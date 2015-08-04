package wyjs;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;

import org.apache.commons.io.FilenameUtils;

import wyil.io.WyilFileReader;
import wyil.lang.WyilFile;

public class WyJS {

	private static boolean writeFiles = true;

	private static PrintWriter fileWriter;

	public static void main(String[] args) {
		try {
			for (String a : args) if (a.equals("noWrite")) writeFiles = false;
//			First, check how many inputs and figure out what they mean
			String wyilInputFolder = "", jsOutputFolder = "";
			if (args.length > 1) {
				if (!args[1].equals("noWrite") && args[1].endsWith("/")) jsOutputFolder = args[1];
				if (args.length > 2) wyilInputFolder = args[2];
			}
//			Second, read the WyIL file specified on the command-line
			WyilFileReader r = new WyilFileReader(wyilInputFolder + args[0]);
			WyilFile wyilFile = r.read();
//			Third, try to interpret the wyil code into js code
			String[] codeArray = translate(wyilFile);
//			Fourth, print code to console and possibly files
			print(codeArray, FilenameUtils.removeExtension(args[0]), jsOutputFolder);
		} catch (Exception e) {
			System.out.println(e.getMessage() + "\n");
//			if(throwException) throw e;
		}
	}

	private static String[] translate(WyilFile wyilFile) {
		ArrayList<String> codeArrayList = new ArrayList<>();
		codeArrayList.addAll(ASMTranslator.translateWyIL(wyilFile));
		String codeArray[] = new String[codeArrayList.size()];
		return codeArrayList.toArray(codeArray);
	}

	private static void print(String[] codeArray, String fileName, String jsOutputFolder) {
		try {
			if(writeFiles) fileWriter = new PrintWriter(jsOutputFolder + fileName + ".js");
			output(formatCode(codeArray));
			if(writeFiles) fileWriter.close();
		} catch (FileNotFoundException e) { e.printStackTrace(); }
	}

	private static void output(String toprint[]) {
		for (String line : toprint) {
			System.out.println(line); // for display purposes only
			if(writeFiles) fileWriter.println(line); // writes line to file
		}
	}

	private static String[] formatCode(String[] codeArray) {
		int indent = 0;
		for (int lineNo = 0 ; lineNo < codeArray.length ; lineNo++) {
			String line = codeArray[lineNo];
			if (line.endsWith("}")) indent--;
			codeArray[lineNo] = indentLine(line, indent);
			if (line.endsWith("{")) indent++;
		}
		return codeArray;
	}

	private static String indentLine(String line, int indent) {
		String indentedLine = "";
		for (int i = 0 ; i < indent ; i++) indentedLine += "  ";
		indentedLine += line;
		return indentedLine;
	}

}
