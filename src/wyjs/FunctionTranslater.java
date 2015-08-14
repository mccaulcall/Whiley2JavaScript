package wyjs;

import java.util.ArrayList;

import wyil.lang.Code;
import wyil.lang.Codes;
import wyil.lang.WyilFile;
import wyil.lang.WyilFile.FunctionOrMethod;

public class FunctionTranslater {

	private static ArrayList<String> body;
	private static boolean fail;

	public static ArrayList<String> translateFunction(FunctionOrMethod m) {
		body = new ArrayList<>(); fail = false;
		addPreamble(m);
		for (Code bytecode : m.body()) if (!fail) translate(bytecode);
		addPostamble();
		return body;
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
			line("return " + bytecode.operand + "+sp;");
		else line("return" + ";");
	}

	private static void translate(Codes.Const bytecode) {
		line("int32["  + bytecode.target() + "+sp] = " +  bytecode.constant + ";");
	}

	private static void translate(Codes.BinaryOperator bytecode) {
		String output = "int32[" + bytecode.target() + "+sp] = int32[" + bytecode.operand(0) + "+sp]";
		String op = getOp(bytecode.opcode());
		String end = "+sp];";
		if (bytecode.assignedType().toString().equals("int")) end = "+sp] | 0;";
		line(output + " " + op + " int32[" + bytecode.operand(1) + end);
	}

	private static void translate(Codes.Assign bytecode) {
		String end = "+sp];";
		if (bytecode.assignedType().toString().equals("int")) end = "+sp] | 0;";
		line("int32[" + bytecode.target() + "+sp] = int32[" + bytecode.operand(0) + end);
	}

	private static void translate(Codes.Assert bytecode) {
		for (Code code: bytecode) translate(code);
	}

	private static void translate(Codes.If bytecode) {
		String op = getOp(bytecode.opcode());
		String lo = "int32[" + bytecode.leftOperand + "+sp]";
		String ro = "int32[" + bytecode.rightOperand + "+sp]";
		line("if (" + lo + " " + op + " " + ro + ") {");
		line("pc = " + (bytecode.target.replaceAll("[^0-9]", "")) + ";");
		line("continue;");
		line("}");
	}

	private static void translate(Codes.Label bytecode) {
		line("case " + (bytecode.toString().replaceAll("[^0-9]", "")) + ":");
	}

	private static void translate(Codes.Goto bytecode) {
		int label = Integer.parseInt(bytecode.target);//.replaceAll("[^0-9]", ""));
		label = label + 10;
		line("pc = " + label + "; continue;");
	}

	private static void translate(Codes.Fail bytecode) {
		line("throw \"" + bytecode.toString() + "\";");
	}

	private static void unknownCodeType(Code bytecode) {
		line("issue interpreting a " + bytecode.toString() + ".");
		fail = true;
	}

	private static String getOp(int opCode) {
		switch(opCode) {
			case Code.OPCODE_ifeq: return "==";
			case Code.OPCODE_ifne: return "!=";
			case Code.OPCODE_iflt: return "<";
			case Code.OPCODE_ifle: return "<=";
			case Code.OPCODE_ifgt: return ">";
			case Code.OPCODE_ifge: return ">=";
			case Code.OPCODE_add: return "+";
			case Code.OPCODE_sub: return "-";
			case Code.OPCODE_mul: return "*";
			case Code.OPCODE_div: return "/";
			case Code.OPCODE_rem: return "%";
//			case Code.OPCODE_: return "";
			default: return "(" + opCode + ")";
		}
	}

	private static void addPreamble(WyilFile.FunctionOrMethod m) {
		line("function " + m.name() + "(" + paramsString(m) + ") {");
//		line("if (sp == null) {");
//		line("sp = 0;");
//		line("}");
		line("while(true) {");
		line("var pc = -1;");
		line("switch (pc) {");
		line("case -1:");
	}

	private static String paramsString(WyilFile.FunctionOrMethod m) {
		String params = "sp";
//		if (m.type().params().size() > 0) {
//			params += "r0";
//			for (int i = 1; i < m.type().params().size(); i++) params += ", r" + i;
//		}
		return params;
	}

	private static void addPostamble() {
		for(int i = 0 ; i < 3 ; i++) line("}");
	}

	private static void line(String s) { body.add(s); }

}
