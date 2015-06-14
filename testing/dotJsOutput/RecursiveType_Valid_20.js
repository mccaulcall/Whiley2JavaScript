function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r3 = 1;
  var r4 = 2;
   //newrecord %5 = (%3, %4) : {int lhs,int rhs}
  var r6 = 1;
   //newrecord %7 = (%5, %6) : {{int lhs,int rhs} lhs,int rhs}
   //invoke %2 = (%7) RecursiveType_Valid_20:f : function(RecursiveType_Valid_20:posExpr) -> RecursiveType_Valid_20:expr
  r1 = r2;
  r0 = r1;
   //assume 
  return;
}}}
