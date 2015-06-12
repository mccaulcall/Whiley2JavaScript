function test() {
 var r2 = 1;
 var r3 = 3;
//neg %4 = %3 : int
 var r5 = 5;
//neg %6 = %5 : int
 var r7 = 7;
 var r8 = 9;
//neg %9 = %8 : int
 var r10 = 11;
//newlist %11 = (%2, %4, %6, %7, %9, %10) : [int]
 r1 = r11;
 r0 = r1;
//invoke %12 = (%0) ConstrainedList_Valid_2:abs : function([int]) -> [ConstrainedList_Valid_2:nat]
 r0 = r12;
//assume 
 return;
}
