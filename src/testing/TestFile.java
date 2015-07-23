package testing;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileReader;
import java.io.OutputStream;
import java.io.PrintStream;
import java.io.Reader;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;

import wyjs.WyJS;

public class TestFile {

	public static void runTest(String fileName) throws Exception {
		generateJavaScript(fileName + ".wyil");
		validateJavaScript(fileName + ".js");
	}

	private static void generateJavaScript(String fileName) throws Exception {
		String files[] = {fileName,"testing/dotJsOutput/","testing/validWyil/"};
		try { WyJS.main(files); }
		catch (Exception e) { System.out.println(); throw new Exception();}
	}

	private static void validateJavaScript(String fileName) throws Exception {
		OutputStream out = new ByteArrayOutputStream();
	    try {
		    Reader file = new FileReader(new File("testing/dotJsOutput/" + fileName));
		    Context context = Context.enter();
		    Scriptable scope = context.initStandardObjects();
		    Object sysout = Context.javaToJS(new PrintStream(out), scope);
		    OutputStream err = new ByteArrayOutputStream();
		    Object syserr = Context.javaToJS(new PrintStream(err), scope);
		    ScriptableObject.putConstProperty(scope, "sysout", sysout);
		    ScriptableObject.putConstProperty(scope, "syserr", syserr);
		    context.evaluateReader(scope, file, "testing/dotJsOutput/" + fileName, 1, null);
	    } catch (Exception e) {
	    	System.out.println("Error testing: " + fileName + "\n" + e.toString() + "\n\n\n");
	    	throw new Exception();
	    } finally {
	    	Context.exit();
	    }
	}

}
