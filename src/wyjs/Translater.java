package wyjs;

import wyil.lang.Code;
import wyil.lang.Codes;

public class Translater {

	public static String translateWyIL(Code bytecode) {
		switch (bytecode.getClass().getSimpleName()) {
		case "Return": return translate((Codes.Return) bytecode);
		case "Const": return translate((Codes.Const) bytecode);
		case "BinaryOperator": return translate((Codes.BinaryOperator) bytecode);
		case "Assign": return translate((Codes.Assign) bytecode);
		case "Assert": return translate((Codes.Assert) bytecode);
		case "If": return translate((Codes.If) bytecode);
		case "Label": return translate((Codes.Label) bytecode);
		case "Goto": return translate((Codes.Goto) bytecode);
		case "Fail": return translate((Codes.Fail) bytecode);
		default: return unknownCodeType(bytecode);
		}
	}

	private static String translate(Codes.Return bytecode) {
		if(bytecode.operand != Codes.NULL_REG) {
			return("return r" + bytecode.operand + ";");
		} else {
			return("return" + ";");
		}
	}

	private static String translate(Codes.Const bytecode) {
		return("var r"  + bytecode.target() + " = " +  bytecode.constant + ";");
	}

	private static String translate(Codes.BinaryOperator bytecode) {
		String output = "var r" + bytecode.target() + " = r" + bytecode.operand(0);
		if (bytecode.kind.toString().equals("add")) output += " + ";
		else if (bytecode.kind.toString().equals("sub")) output += " - ";
		else if (bytecode.kind.toString().equals("mul")) output += " * ";
		else if (bytecode.kind.toString().equals("div")) output += " / ";
		else { System.out.println(bytecode.kind.toString()); return null;}
		return(output + "r" + bytecode.operand(1) + ";");
	}

	private static String translate(Codes.Assign bytecode) {
		return("r" + bytecode.target() + " = r" + bytecode.operand(0) + ";");
	}

	private static String translate(Codes.Assert bytecode) {
		String output = "";
		for (Code code: bytecode) output += translateWyIL(code) + "\n   ";
		return output.trim();
	}

	private static String translate(Codes.If bytecode) {
		String op = "";
		switch(bytecode.opcode()) {
			case 96: op = "=="; break;
			case 97: op = "!="; break;
		}
		String lo = "r" + bytecode.leftOperand;
		String ro = "r" + bytecode.rightOperand;
		String target = "pc = " + (bytecode.target.replaceAll("[^0-9]", "")) + "; continue;";
		return("if (" + lo + " " + op + " " + ro + ") { " + target + " }");
	}

	private static String translate(Codes.Label bytecode) {
		return("case " + bytecode.toString().replaceAll("[^0-9]", "") + ":");
	}

	private static String translate(Codes.Goto bytecode) {
		return("pc = " + (bytecode.target.replaceAll("[^0-9]", "")) + "; continue;");
	}

	private static String translate(Codes.Fail bytecode) {
		return("throw \"" + bytecode.toString() + "\";");
	}

	private static String unknownCodeType(Code bytecode) {
		return(" //" + bytecode.toString());
	}

}
