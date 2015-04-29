package wyjs;


import java.io.IOException;

import wyil.io.WyilFilePrinter;
import wyil.io.WyilFileReader;
import wyil.lang.Code;
import wyil.lang.Codes;
import wyil.lang.WyilFile;

public class WyJS {
	public static void main(String[] args) {
		try {
			// First, read the WyIL file specified on the command-line.
			WyilFileReader r = new WyilFileReader(args[0]);
			WyilFile wyilFile = r.read();
			
			for(WyilFile.Block b : wyilFile.blocks()) {
				if(b instanceof WyilFile.FunctionOrMethod) {
					translate((WyilFile.FunctionOrMethod)b);
				}
			}
			
			// Second, print out its contents (for now, though this should be
			// changed)
			WyilFilePrinter printer = new WyilFilePrinter(System.out);
			printer.apply(wyilFile);
			System.out.flush();
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
	}
	
	public static void translate(WyilFile.FunctionOrMethod m) {
		System.out.println("NUMBER OF PARAMETERS: " + m.type().params().size());
		System.out.println("function " + m.name() + "() {");
		for(Code bytecode : m.body()) {
			translate(bytecode);			
		}
	}
	
	public static void translate(Code bytecode) {
		if(bytecode instanceof Codes.Return) {
			translate((Codes.Return) bytecode);
		} else {
			// ...
		}
	}
	
	public static void translate(Codes.Return bytecode) {
		if(bytecode.operand != Codes.NULL_REG) {
			System.out.println("return r" + bytecode.operand);	
		} else {
			System.out.println("return");
		}
		
	}
}
