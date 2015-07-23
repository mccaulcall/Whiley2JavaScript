package wyjs;

import java.util.ArrayList;

import wyil.lang.Code;
import wyil.lang.Codes;
import wyil.util.AttributedCodeBlock;

public class Translater {

	private static ArrayList<String> body;
	private static boolean fail;

	public static String[] translateWyIL(AttributedCodeBlock codebody) {
		body = new ArrayList<>();
		fail = false;
		for (Code bytecode : codebody) translate(bytecode);
		String stringArray[] = new String[body.size()];
		if (fail) return new String[] {"//could not interpret method body"};
		return body.toArray(stringArray);
	}


	private static void translate(Code bytecode) {
		switch (bytecode.getClass().getSimpleName()) {
		case "Return": translate((Codes.Return) bytecode); break;
		case "Const": translate((Codes.Const) bytecode); break;
		case "BinaryOperator": translate((Codes.BinaryOperator) bytecode); break;
		case "Assign": translate((Codes.Assign) bytecode); break;
		case "Assert": translate((Codes.Assert) bytecode); break;
		case "If": translate((Codes.If) bytecode); break;
		case "Label": translate((Codes.Label) bytecode); break;
		case "Goto": translate((Codes.Goto) bytecode); break;
		case "Fail": translate((Codes.Fail) bytecode); break;
		default: unknownCodeType(bytecode); break;
		}
	}

	private static void translate(Codes.Return bytecode) {
		if(bytecode.operand != Codes.NULL_REG)
			body.add("return r" + bytecode.operand + ";");
		else body.add("return" + ";");
	}

	private static void translate(Codes.Const bytecode) {
		body.add("var r"  + bytecode.target() + " = " +  bytecode.constant + ";");
	}

	private static void translate(Codes.BinaryOperator bytecode) {
		String output = "var r" + bytecode.target() + " = r" + bytecode.operand(0);
		if (bytecode.kind.toString().equals("add")) output += " + ";
		else if (bytecode.kind.toString().equals("sub")) output += " - ";
		else if (bytecode.kind.toString().equals("mul")) output += " * ";
		else if (bytecode.kind.toString().equals("div")) output += " / ";
		else body.add("//Unknown binary operator");
		body.add(output + "r" + bytecode.operand(1) + ";");
	}

	private static void translate(Codes.Assign bytecode) {
		body.add("r" + bytecode.target() + " = r" + bytecode.operand(0) + ";");
	}

	private static void translate(Codes.Assert bytecode) {
		for (Code code: bytecode) translate(code);
	}

	private static void translate(Codes.If bytecode) {
		String op = "";
		switch(bytecode.opcode()) {
			case 96: op = "=="; break;
			case 97: op = "!="; break;
		}
		String lo = "r" + bytecode.leftOperand;
		String ro = "r" + bytecode.rightOperand;
		String target = "pc = " + (bytecode.target.replaceAll("[^0-9]", "")) + "; continue;";
		body.add("if (" + lo + " " + op + " " + ro + ") { " + target + " }");
	}

	private static void translate(Codes.Label bytecode) {
		body.add("case " + ":"); //(bytecode.toString().replaceAll("[^0-9]", "")) +
	}

	private static void translate(Codes.Goto bytecode) {
		int label = Integer.parseInt(bytecode.target);//.replaceAll("[^0-9]", ""));
		label = label + 10;
		body.add("pc = " + label + "; continue;");
	}

	private static void translate(Codes.Fail bytecode) {
		body.add("throw \"" + bytecode.toString() + "\";");
	}

	private static void unknownCodeType(Code bytecode) {
		fail = true;
	}

}
