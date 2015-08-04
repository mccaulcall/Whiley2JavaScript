package wyjs;

import java.util.ArrayList;

import wyil.lang.WyilFile;

public class ASMTranslator {

	private static ArrayList<String> body;

	public static ArrayList<String> translateWyIL(WyilFile wyilFile) {
		body = new ArrayList<>();
		addPreamble();
		for (WyilFile.Block b : wyilFile.blocks()) {
			if (b instanceof WyilFile.FunctionOrMethod)
				body.addAll(FunctionTranslater.translateFunction((WyilFile.FunctionOrMethod)b));
			line();
		}
		addPostamble();
		return body;
	}

	private static void addPreamble() {
		line("function asmf(stdlib, foreign, heap) {");
		line("\"use asm\";");
		line();
		line("var i32 = new stdlib.Int32Array(heap);");
		line("var imul = stdlib.Math.imul;");
		line("var truncate = foreign.truncate;");
		line();
	}

	private static void addPostamble() {
		line("}");
		line();
	}

	private static void line(String s) { body.add(s); }
	private static void line() { body.add(" "); }

}
