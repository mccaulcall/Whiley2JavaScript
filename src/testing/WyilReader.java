package testing;

import java.io.IOException;

import wyil.io.WyilFilePrinter;
import wyil.io.WyilFileReader;
import wyil.lang.WyilFile;
import wyjs.WyJS;

public class WyilReader {

	private String files[] = {"FunctionCall"};
	private WyJS wyJS = new WyJS();

	public void main(String[] args) {
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
			wyJS.main(file);
		}
	}

}