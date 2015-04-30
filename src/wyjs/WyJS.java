package wyjs;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import wyil.io.WyilFilePrinter;
import wyil.io.WyilFileReader;
import wyil.lang.Code;
import wyil.lang.Codes;
import wyil.lang.WyilFile;

public class WyJS {
	public static void main(String[] args) {
		try {
//			First, read the WyIL file specified on the command-line
			WyilFileReader r = new WyilFileReader(args[0]);
			WyilFile wyilFile = r.read();
//			Second, try to interpret into js
			for (WyilFile.Block b : wyilFile.blocks()) {
				if (b instanceof WyilFile.FunctionOrMethod) {
					translate((WyilFile.FunctionOrMethod)b);
				}
			}
		} catch (ArrayIndexOutOfBoundsException a) {
//			For testing, catches no input (for when run in ide) and finds local file
			try {
//				First, make sure you've got a file
				InputStream is = new FileInputStream("testing/basic.wyil");
//				Second, read the WyIL file specified on the command-line
				WyilFileReader r = new WyilFileReader(is);
				WyilFile wyilFile = r.read();
//				Third, print out its contents (for now, though this should be changed)
				WyilFilePrinter printer = new WyilFilePrinter(System.out);
				printer.apply(wyilFile);
				System.out.flush();
//				Fourth, try to interpret into js
				for (WyilFile.Block b : wyilFile.blocks()) {
					if (b instanceof WyilFile.FunctionOrMethod) {
						translate((WyilFile.FunctionOrMethod)b);
					}
				}
			} catch (Exception e) {
				System.out.println("ArrayIndexOutOfBoundsException, need an input");
			}
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
	}

	public static void translate(WyilFile.FunctionOrMethod m) {
		System.out.println("function " + m.name() + "(" + paramsString(m) + ") {");
		for (Code bytecode : m.body()) {
			translate(bytecode);
		}
		System.out.println("}");
	}

	public static String paramsString(WyilFile.FunctionOrMethod m) {
//		System.out.println("NUMBER OF PARAMETERS: " + m.type().params().size());
		String params = "";
		if (m.type().params().size() > 0) {
			params += "var r0";
			for (int i = 1; i < m.type().params().size(); i++) params += ", var r" + i;
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
//		} else if (bytecode instanceof Codes.Assert) {
			// ...
		} else {
			dummyline();
		}
	}

	public static void translate(Codes.Return bytecode) {
		if(bytecode.operand != Codes.NULL_REG) {
			System.out.println("	return r" + bytecode.operand + ";");
		} else {
//			System.out.println("	return" + ";");
		}
	}

	public static void translate(Codes.Const bytecode) {
		System.out.println("	var r"  + bytecode.target() + " = " +  bytecode.constant + ";");
	}

	public static void translate(Codes.BinaryOperator bytecode) {
		String output = "	var r" + bytecode.target() + " = r" + bytecode.operand(0);
		if (bytecode.kind.toString().equals("add")) output += " + ";
		else if (bytecode.kind.toString().equals("sub")) output += " - ";
		else if (bytecode.kind.toString().equals("mul")) output += " * ";
		else if (bytecode.kind.toString().equals("div")) output += " / ";
		System.out.println(output + "r" + bytecode.operand(1) + ";");
	}

	public static void translate(Codes.Assign bytecode) {
		System.out.println("	r" + bytecode.target() + " = r" + bytecode.operand(0) + ";");
	}

	public static void dummyline() {
		System.out.println("Something is here");
	}
}
