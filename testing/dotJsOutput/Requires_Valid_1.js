function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r4 = 1;
  var r6 = 1;
   //invoke %5 = (%6) Requires_Valid_1:f : function(int) -> int
   //invoke %3 = (%4, %5) Requires_Valid_1:g : function(int,int) -> (int,int)
  r2 = r3;
   //tupleload %7 = %2 0 : (int,int)
  r0 = r7;
   //tupleload %8 = %2 1 : (int,int)
  r1 = r8;
   //assume 
   //assume 
  return;
}}}
