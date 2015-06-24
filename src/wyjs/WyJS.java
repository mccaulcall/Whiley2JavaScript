package wyjs;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collections;

import org.apache.commons.io.FilenameUtils;
import org.junit.Test;

import wyil.io.WyilFilePrinter;
import wyil.io.WyilFileReader;
import wyil.lang.Code;
import wyil.lang.Code.AbstractNaryAssignable;
import wyil.lang.Codes;
import wyil.lang.Type;
import wyil.lang.WyilFile;

public class WyJS {

	private static boolean testMode = true;
	private static boolean generateTests = false;
	private static boolean writeFiles = true;
	private static boolean declareASM = false;
	private static String[] testSelectedFiles = {"Asserteq","Assertne"}; // = new String[0]; //

	static PrintWriter fileWriter;
	private static FilenameUtils FileUtils = new FilenameUtils();

	public static void main(String[] args) {
		if (testMode) {
			File[] wyils = new File("testing/validWyil").listFiles();
//			System.out.println("Number of files found: " + wyils.length);
			ArrayList<String> wyilNames = new ArrayList<String>();
			if (testSelectedFiles.length == 0) { for(File wyil : wyils) { if (wyil.isFile()) { wyilNames.add(FileUtils.removeExtension(wyil.getName())); } } }
			else { for (String name : testSelectedFiles) { wyilNames.add(name); } }
			Collections.sort(wyilNames);
//			for(String wyilName : wyilNames) System.out.println(wyilName);
			for (String fileName : wyilNames) {
				//System.out.println("FileName: " + fileName); System.out.println();
				if (generateTests) {
					System.out.println("@Test public void " + fileName + "() { runTest(\"" + fileName + "\"); }");
				} else {
					try {
//						First, make sure you've got a file
						InputStream is = new FileInputStream("testing/validWyil/" + fileName + ".wyil");
//						Second, read the WyIL file from the file input stream
						System.out.println(fileName);
						WyilFileReader r = new WyilFileReader(is);
						WyilFile wyilFile = r.read();
//						Third, print out its full contents (if selected files only)
						if (testSelectedFiles.length != 0) {
							System.out.println(fileName);
							WyilFilePrinter printer = new WyilFilePrinter(System.out);
							printer.apply(wyilFile);
							System.out.flush();
						}
//						Fourth, try to interpret into js
						for (WyilFile.Block b : wyilFile.blocks()) {
							if (b instanceof WyilFile.FunctionOrMethod) {
								translate((WyilFile.FunctionOrMethod)b,fileName);
							}
						}
					} catch (IOException e) { System.out.println(e.getMessage());}
				}
			}

		} else {
			try {
//				First, read the WyIL file specified on the command-line
				WyilFileReader r = new WyilFileReader(args[0]);
				WyilFile wyilFile = r.read();
//				Second, try to interpret into js
				for (WyilFile.Block b : wyilFile.blocks()) {
					if (b instanceof WyilFile.FunctionOrMethod) {
						translate((WyilFile.FunctionOrMethod)b,FileUtils.removeExtension(args[0]));
					}
				}
			} catch (IOException e) { System.out.println(e.getMessage()); }
		}
	}

	public static void translate(WyilFile.FunctionOrMethod m, String fileName) {
		try { fileWriter = new PrintWriter("testing/dotJsOutput/"+fileName+".js"); }
		catch (FileNotFoundException e) { e.printStackTrace(); }
		output(0,  "function " + m.name() + "(" + paramsString(m) + ") {");
		if (declareASM) asm();
		output(1, "while(true) { var pc = 0; switch (pc) {");
		output("case 0:");
		for (Code bytecode : m.body()) {
			translate(bytecode);
		}
		output(0, "}}}");
		fileWriter.close();
		System.out.println();
		System.out.println();
	}

	public static String paramsString(WyilFile.FunctionOrMethod m) {
//		System.out.println("NUMBER OF PARAMETERS: " + m.type().params().size());
		String params = "";
		if (m.type().params().size() > 0) {
			params += "r0";
			for (int i = 1; i < m.type().params().size(); i++) params += ", r" + i;
		}
		return params;
	}

	public static void translate(Code bytecode) {
		if (bytecode instanceof Codes.Return) {
			translate((Codes.Return) bytecode);
		} else if (bytecode instanceof Codes.Const) {
			translate((Codes.Const) bytecode);
		} else if (bytecode instanceof Codes.BinaryOperator) {
			translate((Codes.BinaryOperator) bytecode);
		} else if (bytecode instanceof Codes.Assign) {
			translate((Codes.Assign) bytecode);
		} else if (bytecode instanceof Codes.Assert) {
			translate((Codes.Assert) bytecode);
		} else if (bytecode instanceof Codes.If) {
			translate((Codes.If) bytecode);
		} else if (bytecode instanceof Codes.Label) {
			translate((Codes.Label) bytecode);
		} else if (bytecode instanceof Codes.Goto) {
			translate((Codes.Goto) bytecode);
		} else if (bytecode instanceof Codes.Fail) {
			translate((Codes.Fail) bytecode);
		} else {
			unknownCodeType(bytecode);
		}
	}

	public static void translate(Codes.Return bytecode) {
		if(bytecode.operand != Codes.NULL_REG) {
			output("return r" + bytecode.operand + ";");
		} else {
			output("return" + ";");
		}
	}

	public static void translate(Codes.Const bytecode) {
		output("var r"  + bytecode.target() + " = " +  bytecode.constant + ";");
	}

	public static void translate(Codes.BinaryOperator bytecode) {
		String output = "var r" + bytecode.target() + " = r" + bytecode.operand(0);
		if (bytecode.kind.toString().equals("add")) output += " + ";
		else if (bytecode.kind.toString().equals("sub")) output += " - ";
		else if (bytecode.kind.toString().equals("mul")) output += " * ";
		else if (bytecode.kind.toString().equals("div")) output += " / ";
		else { System.out.println(bytecode.kind.toString()); return;}
		output(output + "r" + bytecode.operand(1) + ";");
	}

	public static void translate(Codes.Assign bytecode) {
		output("r" + bytecode.target() + " = r" + bytecode.operand(0) + ";");
	}

	public static void translate(Codes.Assert bytecode) {
		for (Code code: bytecode) translate(code);
	}

	public static void translate(Codes.If bytecode) {
		String op = "";
		switch(bytecode.opcode()) {
			case 96: op = "=="; break;
			case 97: op = "!="; break;
		}
		String lo = "r" + bytecode.leftOperand;
		String ro = "r" + bytecode.rightOperand;
		String target = "pc = " + (bytecode.target.replaceAll("[^0-9]", "")) + "; continue;";
		output("if (" + lo + " " + op + " " + ro + ") { " + target + " }");
	}

	public static void translate(Codes.Label bytecode) {
		output("case " + bytecode.toString().replaceAll("[^0-9]", "") + ":");
	}

	public static void translate(Codes.Goto bytecode) {
		output("pc = " + (bytecode.target.replaceAll("[^0-9]", "")) + "; continue;");
	}

	public static void translate(Codes.Fail bytecode) {
		output("throw \"" + bytecode.toString() + "\";");
	}

	public static void unknownCodeType(Code bytecode) {
		output(" //" + bytecode.toString());
	}

	public static void output(int indent, String toprint) {
		String ind = "";
		for (int i = 0 ; i < indent ; i++) ind += " ";
		if (!generateTests) System.out.println(ind + toprint); // for display purposes only
		if (writeFiles) fileWriter.println(ind + toprint); // writes line to file
	}

	private static void output(String toprint) {
		if (!generateTests) System.out.println("  " + toprint); // for display purposes only
		if (writeFiles) fileWriter.println("  " + toprint); // writes line to file
	}

	private static void asm() { // this will write the required ASM.js lines at the top of the code
		output("\"use asm\";"); // this line tells JIT to try interpret as ASM.js
	}
}
