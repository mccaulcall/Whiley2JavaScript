function test() {
//lambda %3 = () FunctionRef_Valid_8:id : function(int) -> int
 var r4 = 1;
//invoke %2 = (%3, %4) FunctionRef_Valid_8:test : function(function(int) -> int,int) -> int
 r1 = r2;
 r0 = r1;
//assume 
//lambda %7 = () FunctionRef_Valid_8:id : function(int) -> int
 var r8 = 123;
//invoke %6 = (%7, %8) FunctionRef_Valid_8:test : function(function(int) -> int,int) -> int
 r0 = r6;
//assume 
//lambda %11 = () FunctionRef_Valid_8:id : function(int) -> int
 var r12 = 223;
//invoke %10 = (%11, %12) FunctionRef_Valid_8:test : function(function(int) -> int,int) -> int
 r0 = r10;
//assume 
 return;
}
