package wyjs;

import java.util.ArrayList;

import wyil.lang.WyilFile;

public class ASMTranslator {

	private ArrayList<String> body;
	private FunctionTranslater functionTranslater = new FunctionTranslater();

	public ArrayList<String> translateWyIL(WyilFile wyilFile) {
		body = new ArrayList<>();
		addPreamble();
		for (WyilFile.Block b : wyilFile.blocks()) {
			if (b instanceof WyilFile.FunctionOrMethod)
				body.addAll(functionTranslater.translateFunction((WyilFile.FunctionOrMethod)b));
			line();
		}
		addPostamble();
		return body;
	}

	private void addPreamble() {
		line("function asmf(stdlib, foreign, heap) {");
		line("\"use asm\";");
		line();
		line("var int32 = new stdlib.Int32Array(heap);");
		line();
	}

	private void addPostamble() {
		line("}");
		line();
	}

	private void line(String s) { body.add(s); }
	private void line() { body.add(" "); }

}
