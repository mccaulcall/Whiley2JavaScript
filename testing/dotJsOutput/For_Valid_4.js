function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r3 = 1;
   //neg %4 = %3 : int
  var r5 = 2;
   //neg %6 = %5 : int
  var r7 = 0;
  var r8 = 1;
  var r9 = 2;
  var r10 = 3;
   //newlist %11 = (%4, %6, %7, %8, %9, %10) : [int]
   //invoke %2 = (%11) For_Valid_4:extract : function([int]) -> For_Valid_4:pos
  r1 = r2;
  r0 = r1;
   //assume 
  return;
}}}
