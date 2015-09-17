package testing;

import org.junit.*;

public class TestCustom {

	private TestFile fileTester = new TestFile();
    private static long startTime;
    private static long endTime;

    @BeforeClass public static void recordStartTime() { startTime = System.currentTimeMillis(); }
    @AfterClass public static void totalTime() {
        endTime = System.currentTimeMillis();
		System.out.println("------------------------------------------------------\n");
        System.out.println("Total time to execute all tests: " + (endTime - startTime) + "ms");
    }

//	@Test public void noWyilFile() throws Exception { TestFile.runTest(""); }

	@Test public void Asserteq() throws Exception { fileTester.runTest("Asserteq"); }
	@Test public void Assertne() throws Exception { fileTester.runTest("Assertne"); }
	@Test public void Basic() throws Exception { fileTester.runTest("Basic"); }
	@Test public void BasicPlus() throws Exception { fileTester.runTest("BasicPlus"); }
	@Test public void FunctionCall() throws Exception { fileTester.runTest("FunctionCall"); }

}