package wyjs;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;

import org.apache.commons.io.FilenameUtils;

import wyil.io.WyilFileReader;
import wyil.lang.Code;
import wyil.lang.WyilFile;

public class WyJS {

	private static boolean writeFiles = true;
	private static boolean ASM = false;

	static PrintWriter fileWriter;

	public static void main(String[] args) {
		try {
			String wyilInputFolder = "", jsOutputFolder = "";
			if (args[1] != null) wyilInputFolder = args[1];
			if (args[2] != null) jsOutputFolder = args[2];
//			First, read the WyIL file specified on the command-line
			WyilFileReader r = new WyilFileReader(wyilInputFolder + args[0]);
			WyilFile wyilFile = r.read();
//			Second, try to interpret into js
			for (WyilFile.Block b : wyilFile.blocks()) {
				if (b instanceof WyilFile.FunctionOrMethod) {
					translate((WyilFile.FunctionOrMethod)b,FilenameUtils.removeExtension(args[0]), jsOutputFolder);

				}
			}
		} catch (IOException e) { System.out.println(e.getMessage()); }


	}

	private static void translate(WyilFile.FunctionOrMethod m, String fileName, String outputFolder) {
		try { fileWriter = new PrintWriter(outputFolder+fileName+".js"); }
		catch (FileNotFoundException e) { e.printStackTrace(); }
		output(0,  "function " + m.name() + "(" + paramsString(m) + ") {");
		if (ASM) asmPrefix();
		output(1, "while(true) { var pc = 0; switch (pc) {");
		output("case 0:");
		for (Code bytecode : m.body()) {
			output(Translater.translateWyIL(bytecode));
		}
		output(0, "}}}");
		if (ASM) asmSuffix();
		fileWriter.close();
		System.out.println();
		System.out.println();
	}

	private static String paramsString(WyilFile.FunctionOrMethod m) {
//		System.out.println("NUMBER OF PARAMETERS: " + m.type().params().size());
		String params = "";
		if (m.type().params().size() > 0) {
			params += "r0";
			for (int i = 1; i < m.type().params().size(); i++) params += ", r" + i;
		}
		return params;
	}

	private static void output(int indent, String toprint) {
		String ind = "";
		for (int i = 0 ; i < indent ; i++) ind += " ";
		System.out.println(ind + toprint); // for display purposes only
		if (writeFiles) fileWriter.println(ind + toprint); // writes line to file
	}

	private static void output(String toprint) {
		System.out.println("   " + toprint); // for display purposes only
		if (writeFiles) fileWriter.println("   " + toprint); // writes line to file
	}

	private static void asmPrefix() { // this will write the required ASM.js lines at the top of the code
		output("\"use asm\";"); // this line tells JIT to try interpret as ASM.js
	}

	private static void asmSuffix() { // this will write the required ASM.js lines at the bottom of the code
		output("");
	}
}
