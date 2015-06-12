function test() {
 var r3 = false;
 var r4 = true;
 var r5 = false;
//newlist %6 = (%3, %4, %5) : [bool]
 var r7 = false;
 var r8 = true;
 var r9 = false;
//newlist %10 = (%7, %8, %9) : [bool]
 var r11 = false;
 var r12 = true;
 var r13 = false;
//newlist %14 = (%11, %12, %13) : [bool]
//newlist %15 = (%6, %10, %14) : [[bool]]
 r2 = r15;
 r0 = r2;
//invoke %17 = (%0) BoolList_Valid_3:update : function(BoolList_Valid_3:Board) -> BoolList_Valid_3:Board
 r16 = r17;
 r1 = r16;
//assume 
//assume 
 return;
}
