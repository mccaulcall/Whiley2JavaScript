package testing;

import org.junit.*;

public class TestSome {

    static long startTime;
    static long endTime;

    @BeforeClass public static  void recordStartTime() { startTime = System.currentTimeMillis(); }
    @AfterClass public static void totalTime() {
        endTime = System.currentTimeMillis();
		System.out.println("------------------------------------------------------\n");
        System.out.println("Total time to execute all tests: " + (endTime - startTime) + "ms");
    }

//	@Test public void noWyilFile() throws Exception { TestFile.runTest(""); }

	@Test public void Asserteq() throws Exception { TestFile.runTest("Asserteq"); }
	@Test public void Assertne() throws Exception { TestFile.runTest("Assertne"); }
	@Test public void Basic() throws Exception { TestFile.runTest("Basic"); }
	@Test public void BasicPlus() throws Exception { TestFile.runTest("BasicPlus"); }

}