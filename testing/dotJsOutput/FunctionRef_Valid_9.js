function test() {
//lambda %3 = () FunctionRef_Valid_9:id : function(int) -> int
//newrecord %4 = (%3) : {function(int) -> int func}
//newobject %5 = %4 : &{function(int) -> int func}
 r2 = r5;
 r0 = r2;
 var r8 = 123;
//invoke %7 = (%0, %8) FunctionRef_Valid_9:test : method(FunctionRef_Valid_9:Proc,int) -> int
 r6 = r7;
 r1 = r6;
//assume 
 var r11 = 12545;
//invoke %10 = (%0, %11) FunctionRef_Valid_9:test : method(FunctionRef_Valid_9:Proc,int) -> int
 r1 = r10;
//assume 
 var r14 = 11;
//neg %15 = %14 : int
//invoke %13 = (%0, %15) FunctionRef_Valid_9:test : method(FunctionRef_Valid_9:Proc,int) -> int
 r1 = r13;
//assume 
 return;
}
