package wyjs;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;

import org.apache.commons.io.FilenameUtils;

import wyil.io.WyilFileReader;
import wyil.lang.WyilFile;

public class WyJS {

	private static boolean writeFiles = true;
	private static boolean ASM = false;

	static PrintWriter fileWriter;

	public static void main(String[] args) {
//		args = new String[] {"assertne.wyil","testing/dotJsOutput/","testing/validWyil/"};
		try {
			String wyilInputFolder = "", jsOutputFolder = "";
			if (args.length > 1) {
				jsOutputFolder = args[1];
				if (args.length > 1) wyilInputFolder = args[2];
			}
//			First, read the WyIL file specified on the command-line
			WyilFileReader r = new WyilFileReader(wyilInputFolder + args[0]);
			WyilFile wyilFile = r.read();
//			Second, try to interpret functions into js
			String fileName = FilenameUtils.removeExtension(args[0]);
			try { fileWriter = new PrintWriter(jsOutputFolder+fileName+".js"); }
			catch (FileNotFoundException e) { e.printStackTrace(); }
			System.out.println("Translating: " + fileName + ".wyil \n");
			int indent = 0;
			if (ASM) asmPrefix(indent++);
			for (WyilFile.Block b : wyilFile.blocks())
				if (b instanceof WyilFile.FunctionOrMethod)
					translate(indent, (WyilFile.FunctionOrMethod)b, fileName);
			if (ASM) asmSuffix(0);
			fileWriter.close();
			System.out.println("\n\n");
		} catch (IOException e) { System.out.println(e.getMessage()); }


	}

	private static void translate(int indent, WyilFile.FunctionOrMethod m, String fileName) {
		String methodBody[] = Translater.translateWyIL(m.body());
		if (methodBody.length == 0) return;
		output(indent,  "function " + m.name() + "(" + paramsString(m) + ") {");
		output(indent+1, "while(true) { var pc = 0; switch (pc) {");
		output(new String[] {"case 0:"});
		output(methodBody);
		output(indent, "}}}");
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

	private static void output(String toprint[]) {
		for (String line : toprint) {
			System.out.println("   " + line); // for display purposes only
			if (writeFiles) fileWriter.println("   " + line); // writes line to file
		}
	}

	private static void asmPrefix(int indent) { // this will write the required ASM.js lines at the top of the code
		output(indent,"\"use asm\";"); // this line tells JIT to try interpret as ASM.js
	}

	private static void asmSuffix(int indent) { // this will write the required ASM.js lines at the bottom of the code
		output(indent,"");
	}
}
