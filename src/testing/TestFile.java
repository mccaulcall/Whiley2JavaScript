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

	public static void runTest(String fileName) {
		generateJavaScript(fileName + ".wyil");
		validateJavaScript(fileName + ".js");
	}

	private static void generateJavaScript(String fileName) {
		String files[] = {fileName,"testing/validWyil/","testing/dotJsOutput/"};
		try { WyJS.main(files); }
		catch (Exception e) { System.out.println(); }
	}

	private static String validateJavaScript(String fileName) {
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
		    System.err.println(err);
		    return out.toString();
	    } catch (Exception e) {
	    	System.err.print(out);
//	    	e.printStackTrace();
	    	System.out.println("Error testing: " + fileName);
	    	System.out.println(e.toString());
//	    	fail("Problem running compiled test");
	    } finally {
	    	Context.exit();
	    }
	    return null;
	}
}
