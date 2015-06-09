package wyjs;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.ArrayList;

import org.apache.commons.io.FilenameUtils;
import org.junit.Test;

import wyil.io.WyilFilePrinter;
import wyil.io.WyilFileReader;
import wyil.lang.Code;
import wyil.lang.Codes;
import wyil.lang.WyilFile;

public class WyJS {
	
	private static boolean testMode = true;
	private static boolean generateTests = false;
	private static String testSelectedFiles = "";
	
	static PrintWriter out;
	private static FilenameUtils FileUtils = new FilenameUtils();
	
	public static void main(String[] args) {
		if (testMode) {
			File[] wyils = new File("testing/validWyil").listFiles();
//			System.out.println("Number of files found: " + wyils.length);
			ArrayList<String> wyilNames = new ArrayList<String>();
			if (testSelectedFiles.equals("")) { for(File wyil : wyils) { if (wyil.isFile()) { wyilNames.add(FileUtils.removeExtension(wyil.getName())); } } }
			else { wyilNames.add(testSelectedFiles); }
//			for(String wyilName : wyilNames) System.out.println(wyilName);
			for (String fileName : wyilNames) {
				System.out.println("FileName: " + fileName); System.out.println();
				if (generateTests) {
					System.out.println("");
					System.out.println("@Test");
					System.out.println("public void " + fileName + "() { runTest(\"" + fileName + "\"); }");
				} else {
					try {
//						First, make sure you've got a file
						InputStream is = new FileInputStream("testing/validWyil/" + fileName + ".wyil");
//						Second, read the WyIL file from the file input stream
						WyilFileReader r = new WyilFileReader(is);
						WyilFile wyilFile = r.read();
//						Third, print out its contents (for now, though this should be changed)
//						WyilFilePrinter printer = new WyilFilePrinter(System.out);
//						printer.apply(wyilFile);
//						System.out.flush();
//						Fourth, try to interpret into js
						for (WyilFile.Block b : wyilFile.blocks()) {
							if (b instanceof WyilFile.FunctionOrMethod) {
								translate((WyilFile.FunctionOrMethod)b,fileName);
							}
						}
					} catch (IOException e) { System.out.println(e.getMessage()); }
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
		try { out = new PrintWriter("testing/dotJsOutput/"+fileName+".js"); }
		catch (FileNotFoundException e) { e.printStackTrace(); }
		System.out.println("function " + m.name() + "(" + paramsString(m) + ") {");
		out.println("function " + m.name() + "(" + paramsString(m) + ") {");
		for (Code bytecode : m.body()) {
			translate(bytecode);
		}
		System.out.println("}");
		out.println("}");
		out.close();
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
		} else {
			dummyline();
		}
	}

	public static void translate(Codes.Return bytecode) {
		if(bytecode.operand != Codes.NULL_REG) {
			System.out.println(" return r" + bytecode.operand + ";");
			out.println(" return r" + bytecode.operand + ";");
		} else {
			System.out.println(" return" + ";");
			out.println(" return" + ";");
		}
	}

	public static void translate(Codes.Const bytecode) {
		System.out.println(" var r"  + bytecode.target() + " = " +  bytecode.constant + ";");
		out.println(" var r"  + bytecode.target() + " = " +  bytecode.constant + ";");
	}

	public static void translate(Codes.BinaryOperator bytecode) {
		String output = " var r" + bytecode.target() + " = r" + bytecode.operand(0);
		if (bytecode.kind.toString().equals("add")) output += " + ";
		else if (bytecode.kind.toString().equals("sub")) output += " - ";
		else if (bytecode.kind.toString().equals("mul")) output += " * ";
		else if (bytecode.kind.toString().equals("div")) output += " / ";
		else { System.out.println(bytecode.kind.toString()); return;}
		System.out.println(output + "r" + bytecode.operand(1) + ";");
		out.println(output + "r" + bytecode.operand(1) + ";");
	}

	public static void translate(Codes.Assign bytecode) {
		System.out.println(" r" + bytecode.target() + " = r" + bytecode.operand(0) + ";");
		out.println(" r" + bytecode.target() + " = r" + bytecode.operand(0) + ";");
	}
	
	public static void translate(Codes.Assert bytecode) {
		System.out.println(" -- assert statement here -- ");
		out.println(" -- assert statement here -- ");
	}

	public static void dummyline() {
		System.out.println(" -- something is here -- ");
		out.println(" -- something is here -- ");
	}
}
