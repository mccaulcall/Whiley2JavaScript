function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r3 = 1;
   //newrecord %4 = (%3) : {int data}
   //newobject %5 = %4 : &{int data}
  r2 = r5;
  r0 = r2;
  var r8 = 123;
   //invoke %7 = (%0, %8) FunctionRef_Valid_7:test : method(FunctionRef_Valid_7:Proc,int) -> int
  r6 = r7;
  r1 = r6;
   //assume 
  var r11 = 12545;
   //invoke %10 = (%0, %11) FunctionRef_Valid_7:test : method(FunctionRef_Valid_7:Proc,int) -> int
  r1 = r10;
   //assume 
  var r14 = 11;
   //neg %15 = %14 : int
   //invoke %13 = (%0, %15) FunctionRef_Valid_7:test : method(FunctionRef_Valid_7:Proc,int) -> int
  r1 = r13;
   //assume 
  return;
}}}
