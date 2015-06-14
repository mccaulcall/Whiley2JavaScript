function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
   //invoke %2 = () ConstrainedRecord_Valid_8:EmptyBoard : function() -> ConstrainedRecord_Valid_8:EmptyBoard
  r1 = r2;
  r0 = r1;
   //fieldload %3 = %0 pieces : {int move,[int] pieces}
  var r4 = 0;
   //indexof %5 = %3, %4 : [int]
  var r6 = 0;
  if (r5 == r6) { pc = 647; continue; }
  throw "fail";
  case 647:
   //fieldload %7 = %0 pieces : {int move,[int] pieces}
  var r8 = 1;
   //indexof %9 = %7, %8 : [int]
  var r10 = 0;
  if (r9 == r10) { pc = 648; continue; }
  throw "fail";
  case 648:
   //fieldload %11 = %0 pieces : {int move,[int] pieces}
  var r12 = 8;
   //indexof %13 = %11, %12 : [int]
  var r14 = 0;
  if (r13 == r14) { pc = 649; continue; }
  throw "fail";
  case 649:
  return;
}}}
