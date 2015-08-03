package wyjs;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;

import org.apache.commons.io.FilenameUtils;

import wyil.io.WyilFileReader;
import wyil.lang.WyilFile;

public class WyJS {

	private static boolean writeFiles = false;
	private static boolean asm = false;

	static PrintWriter fileWriter;

	public static void main(String[] args) {
		try {
//			First, check how many inputs and figure out what they mean
			String wyilInputFolder = "", jsOutputFolder = "";
			if (args.length > 1) {
				jsOutputFolder = args[1];
				if (args.length > 1) wyilInputFolder = args[2];
			}
//			Second, read the WyIL file specified on the command-line
			WyilFileReader r = new WyilFileReader(wyilInputFolder + args[0]);
			WyilFile wyilFile = r.read();
//			Third, try to interpret the wyil code into js code
			String[] codeArray = translate(wyilFile);
//			Fourth, print code to console and possibly files
			print(codeArray, FilenameUtils.removeExtension(args[0]), jsOutputFolder);
		} catch (IOException e) { System.out.println(e.getMessage()); }
	}

	private static String[] translate(WyilFile wyilFile) {
		String codeArray[] = null;
		if (asm) codeArray = ASMTranslator.translateWyIL(wyilFile);
		else
			for (WyilFile.Block b : wyilFile.blocks())
				if (b instanceof WyilFile.FunctionOrMethod)
					codeArray = FunctionTranslater.translateWyil((WyilFile.FunctionOrMethod)b);
		return codeArray;
	}

	private static void print(String[] codeArray, String fileName, String jsOutputFolder) {
		System.out.println("Translating: " + fileName + ".wyil \n");
		try {
			fileWriter = new PrintWriter(jsOutputFolder + fileName + ".js");
			output(formatCode(codeArray));
			fileWriter.close();
		} catch (FileNotFoundException e) { e.printStackTrace(); }
		System.out.println();
	}

	private static void output(String toprint[]) {
		for (String line : toprint) {
			System.out.println(line); // for display purposes only
			if (writeFiles) fileWriter.println(line); // writes line to file
		}
	}

	private static String[] formatCode(String[] codeArray) {
		int indent = 0;
		for (int lineNo = 0 ; lineNo < codeArray.length ; lineNo++) {
			String line = codeArray[lineNo];
			if (line.substring(line.length() - 1).equals("}")) indent--;
			codeArray[lineNo] = indentLine(line, indent);
			if (line.substring(line.length() - 1).equals("{")) indent++;
		}
		return codeArray;
	}

	private static String indentLine(String line, int indent) {
		String indentedLine = "";
		for (int i = 0 ; i < indent ; i++) indentedLine += " ";
		indentedLine += line;
		return indentedLine;
	}

}
