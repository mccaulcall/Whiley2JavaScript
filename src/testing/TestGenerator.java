package testing;

import java.io.File;
import java.util.ArrayList;
import java.util.Collections;

import org.apache.commons.io.FilenameUtils;

public class TestGenerator {

	private static String[] testSelectedFiles = {"Basic", "BasicPlus", "Asserteq", "Assertne"}; // = new String[0]; //

	public static void main(String[] args) {
		ArrayList<String> wyilNames = new ArrayList<String>();
		if (testSelectedFiles.length == 0) {
			File[] wyils = new File("testing/validWyil").listFiles();
			for (File wyil : wyils) if (wyil.isFile()) wyilNames.add(FilenameUtils.removeExtension(wyil.getName()));
		}
		else {
			for (String fileName : testSelectedFiles) wyilNames.add(fileName);
		}
		Collections.sort(wyilNames);
		for (String fileName : wyilNames)
			System.out.println("@Test public void " + fileName + "() { TestFile.runTest(\"" + fileName + "\"); }");
		//System.out.println("\n\n" + "Files Found: " + wyils.length);
	}

}
