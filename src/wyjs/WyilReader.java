package wyjs;

import java.io.IOException;

import wyil.io.WyilFilePrinter;
import wyil.io.WyilFileReader;
import wyil.lang.WyilFile;

public class WyilReader {

	private static String files[] = {"Access_Valid_1"};

	public static void main(String[] args) {
		for (String fileName : files) {
			fileName = "testing/validWyil/"+fileName+".wyil";
			try {
				WyilFileReader r = new WyilFileReader(fileName);
				WyilFile wyilFile = r.read();
				WyilFilePrinter printer = new WyilFilePrinter(System.out);
				printer.apply(wyilFile);
			} catch (IOException e) { System.out.println(e.getMessage()); }
			System.out.println("\n");
			String file[] = {fileName,"noWrite"};
			WyJS.main(file);
		}
	}

}
