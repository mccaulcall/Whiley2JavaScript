function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
   //lambda %3 = () FunctionRef_Valid_6:id : function(int) -> int
   //newrecord %4 = (%3) : {function(int) -> int read}
  var r5 = 123;
   //invoke %2 = (%4, %5) FunctionRef_Valid_6:test : function(FunctionRef_Valid_6:Func,int) -> int
  r1 = r2;
  r0 = r1;
   //assume 
   //lambda %8 = () FunctionRef_Valid_6:id : function(int) -> int
   //newrecord %9 = (%8) : {function(int) -> int read}
  var r10 = 12545;
   //invoke %7 = (%9, %10) FunctionRef_Valid_6:test : function(FunctionRef_Valid_6:Func,int) -> int
  r0 = r7;
   //assume 
   //lambda %13 = () FunctionRef_Valid_6:id : function(int) -> int
   //newrecord %14 = (%13) : {function(int) -> int read}
  var r15 = 11;
   //neg %16 = %15 : int
   //invoke %12 = (%14, %16) FunctionRef_Valid_6:test : function(FunctionRef_Valid_6:Func,int) -> int
  r0 = r12;
   //assume 
  return;
}}}
