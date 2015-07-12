package wyjs;

import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import org.apache.commons.io.FilenameUtils;

public class testGenerator {

	public static void main(String[] args) {
		File[] wyils = new File("testing/validWyil").listFiles();
		ArrayList<String> wyilNames = new ArrayList<String>();
		for (File wyil : wyils) if (wyil.isFile()) wyilNames.add(FilenameUtils.removeExtension(wyil.getName()));
		Collections.sort(wyilNames);
		for (String fileName : wyilNames)
			System.out.println("@Test public void " + fileName + "() { runTest(\"" + fileName + "\"); }");
		//System.out.println("\n\n" + "Files Found: " + wyils.length);
	}

}
