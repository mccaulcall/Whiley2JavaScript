function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r3 = 1;
  var r4 = 2;
  var r5 = 3;
  var r6 = 4;
  var r7 = 5;
  var r8 = 6;
  var r9 = 7;
   //newlist %10 = (%3, %4, %5, %6, %7, %8, %9) : [int]
   //invoke %2 = (%10) While_Valid_10:extract : function([int]) -> [int]
  r1 = r2;
  r0 = r1;
   //assume 
   //newlist %21 = () : [void]
   //invoke %20 = (%21) While_Valid_10:extract : function([int]) -> [int]
  r0 = r20;
   //assume 
  return;
}}}
