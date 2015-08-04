package testing;

import java.io.File;
import java.io.FileReader;
import java.io.Reader;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;
import wyjs.WyJS;

public class TestFile {

	public static long runTest(String fileName) throws Exception {
		System.out.println("------------------------------------------------------\n");
		System.out.println("Translating: " + fileName + ".wyil");
		System.out.println("\n------------------------------------------------------\n");
		long startTime, translatedTime, validatedTime;
		startTime = System.currentTimeMillis();
		generateJavaScript(fileName + ".wyil");
		translatedTime = System.currentTimeMillis();
		validateJavaScript(fileName + ".js");
		validatedTime = System.currentTimeMillis();
		System.out.println("\n------------------------------------------------------\n");
		System.out.println("Time to translate: " + (translatedTime - startTime) + "ms");
		System.out.println("Time to validate: " + (validatedTime - translatedTime) + "ms");
		System.out.println("Total test time: " + (validatedTime - startTime) + "ms");
		System.out.println("\n------------------------------------------------------");
		return validatedTime - startTime;
	}

	private static void generateJavaScript(String fileName) throws Exception {
		String file[] = {fileName,"testing/dotJsOutput/","testing/validWyil/"};
		WyJS.main(file);
	}

	private static void validateJavaScript(String fileName) throws Exception {
	    try {
		    Reader file = new FileReader(new File("testing/dotJsOutput/" + fileName));
		    Context context = Context.enter();
		    Scriptable scope = context.initStandardObjects();
		    context.evaluateReader(scope, file, "testing/dotJsOutput/" + fileName, 1, null);
	    } catch (Exception e) {
	    	if(!e.getMessage().endsWith("missing ;")) throw e;
	    } finally { Context.exit(); }
	}

}
