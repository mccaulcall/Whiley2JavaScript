function test() {
 var r3 = 1;
 r2 = r3;
 r0 = r2;
//invoke %5 = (%0) RecordAssign_Valid_8:f : function(int) -> RecordAssign_Valid_8:bytes
 r4 = r5;
 r1 = r4;
//assume 
//newrecord %9 = (%0, %0) : {int b1,int b2}
 r1 = r9;
//assume 
 return;
}
