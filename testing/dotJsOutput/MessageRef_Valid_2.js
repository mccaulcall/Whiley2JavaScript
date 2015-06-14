function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
   //invoke %4 = () MessageRef_Valid_2:openReader : method() -> MessageRef_Valid_2:Reader
  r3 = r4;
  r0 = r3;
   //fieldload %6 = %0 thus : {method(&{int position},int) -> int read,&{int position} thus}
  r5 = r6;
  r1 = r5;
   //fieldload %9 = %0 read : {method(&{int position},int) -> int read,&{int position} thus}
  var r10 = 1;
   //indirectinvoke 8 = 9 (%1, %10) : method(&{int position},int) -> int
  r7 = r8;
  r2 = r7;
   //assume 
  return;
}}}
