function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r5 = 10;
  var r6 = 4;
   //invoke %4 = (%5, %6) For_Valid_9:run : function(int,int) -> bool
  r3 = r4;
  r0 = r3;
   //assume 
  var r10 = 10;
  var r11 = 1;
   //neg %12 = %11 : int
   //invoke %9 = (%10, %12) For_Valid_9:run : function(int,int) -> bool
  r8 = r9;
  r1 = r8;
   //assume 
  var r16 = 10;
  var r17 = 11;
   //invoke %15 = (%16, %17) For_Valid_9:run : function(int,int) -> bool
  r14 = r15;
  r2 = r14;
   //assume 
  return;
}}}
