function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r3 = 0;
  var r4 = 1;
  var r5 = 2;
  var r6 = 3;
   //newlist %7 = (%3, %4, %5, %6) : [int]
   //invoke %2 = (%7) Assume_Valid_1:sum : function([Assume_Valid_1:nat]) -> Assume_Valid_1:nat
  r1 = r2;
  r0 = r1;
  var r8 = 6;
  if (r0 == r8) { pc = 19; continue; }
  throw "fail";
  case 19:
  return;
}}}
