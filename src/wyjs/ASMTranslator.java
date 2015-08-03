package wyjs;

import java.util.ArrayList;

import wyil.lang.WyilFile;

public class ASMTranslator {

	private static ArrayList<String> body;

	public static String[] translateWyIL(WyilFile wyilFile) {
		body = new ArrayList<>();
		body.add("some ASM preamble {");
		for (WyilFile.Block b : wyilFile.blocks())
			if (b instanceof WyilFile.FunctionOrMethod)
				body.addAll(FunctionTranslater.translateFunction((WyilFile.FunctionOrMethod)b));
		body.add("some ASM postamble }");
		String stringArray[] = new String[body.size()];
		return body.toArray(stringArray);
	}

}
