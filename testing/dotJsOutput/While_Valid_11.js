function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r3 = 1;
   //neg %4 = %3 : int
  var r5 = 2;
  var r6 = 3;
  var r7 = 4;
   //neg %8 = %7 : int
  var r9 = 5;
  var r10 = 6;
  var r11 = 7;
  var r12 = 23987;
  var r13 = 23897;
   //neg %14 = %13 : int
  var r15 = 0;
  var r16 = 1;
   //neg %17 = %16 : int
  var r18 = 1;
  var r19 = 2389;
   //neg %20 = %19 : int
   //newlist %21 = (%4, %5, %6, %8, %9, %10, %11, %12, %14, %15, %17, %18, %20) : [int]
   //invoke %2 = (%21) While_Valid_11:extract : function([int]) -> [While_Valid_11:nat]
  r1 = r2;
  r0 = r1;
   //assume 
   //newlist %37 = () : [void]
   //invoke %36 = (%37) While_Valid_11:extract : function([int]) -> [While_Valid_11:nat]
  r0 = r36;
   //assume 
  return;
}}}
