package wyjs;

import static org.junit.Assert.fail;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileReader;
import java.io.OutputStream;
import java.io.PrintStream;
import java.io.Reader;

import org.junit.*;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;

public class Tester {
	
	private void runTest(String fileName) {
		String dotJsOutputFile = "testing/dotJsOutput/" + File.separatorChar + fileName + ".js";
		validateJavaScript(dotJsOutputFile);
	}
	
	private static String validateJavaScript(String fileName) {
		OutputStream out = new ByteArrayOutputStream();
	    try {
		    Reader file = new FileReader(new File(fileName));
		    Context context = Context.enter();
		    Scriptable scope = context.initStandardObjects();
		    Object sysout = Context.javaToJS(new PrintStream(out), scope);
		    OutputStream err = new ByteArrayOutputStream();
		    Object syserr = Context.javaToJS(new PrintStream(err), scope);
		    ScriptableObject.putConstProperty(scope, "sysout", sysout);
		    ScriptableObject.putConstProperty(scope, "syserr", syserr);
		    context.evaluateReader(scope, file, fileName, 1, null);
		    System.err.println(err);
		    return out.toString();
	    } catch (Exception ex) {
	    	System.err.print(out);
	    	ex.printStackTrace();
	    	fail("Problem running compiled test");
	    } finally {
	    	Context.exit();
	    }
	    return null;
	}
	
	@Test
	public void Basic() {
		runTest("basic");
	}
	
	@Test
	public void BasicPlus() {
		runTest("basicplus");
	}
	
	@Test
	public void Assert() {
		runTest("assert");
	}
	
}
