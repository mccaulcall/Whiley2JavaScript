package testing;

import org.junit.Test;

public class TestSome {

	@Test public void Asserteq() { TestFile.runTest("Asserteq"); }
	@Test public void Assertne() { TestFile.runTest("Assertne"); }
	@Test public void Basic() { TestFile.runTest("Basic"); }
	@Test public void BasicPlus() { TestFile.runTest("BasicPlus"); }


}
