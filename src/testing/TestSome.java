package testing;

import org.junit.Test;

public class TestSome {

	@Test public void Asserteq() throws Exception { TestFile.runTest("Asserteq"); }
	@Test public void Assertne() throws Exception { TestFile.runTest("Assertne"); }
	@Test public void Basic() throws Exception { TestFile.runTest("Basic"); }
	@Test public void BasicPlus() throws Exception { TestFile.runTest("BasicPlus"); }

}