function test() {
 while(true) { var pc = 0; switch (pc) {
  case 0:
  var r4 = 1;
   //neg %5 = %4 : int
   //invoke %3 = (%5) TupleType_Valid_6:f : function(int) -> TupleType_Valid_6:etup
  r2 = r3;
   //tupleload %6 = %2 0 : (int|real,int|real)
  r0 = r6;
   //tupleload %7 = %2 1 : (int|real,int|real)
  r1 = r7;
   //assume 
  var r11 = 2;
   //invoke %10 = (%11) TupleType_Valid_6:f : function(int) -> TupleType_Valid_6:etup
   //tupleload %0 = %10 0 : (int,int)|(real,real)
   //tupleload %1 = %10 1 : (int,int)|(real,real)
   //assume 
  return;
}}}
