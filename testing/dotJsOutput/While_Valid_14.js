function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r3 = 2;
   //neg %4 = %3 : int
  var r5 = 3;
   //neg %6 = %5 : int
  var r7 = 1;
  var r8 = 2;
  var r9 = 23;
   //neg %10 = %9 : int
  var r11 = 3;
  var r12 = 2345;
  var r13 = 4;
  var r14 = 5;
   //newlist %15 = (%4, %6, %7, %8, %10, %11, %12, %13, %14) : [int]
   //invoke %2 = (%15) While_Valid_14:extract : function([int]) -> int
  r1 = r2;
  r0 = r1;
   //assume 
  return;
}}}