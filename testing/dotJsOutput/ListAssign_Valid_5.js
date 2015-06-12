function test() {
 var r2 = 1;
 var r3 = 2;
 var r4 = 3;
//newlist %5 = (%2, %3, %4) : [int]
 var r6 = 4;
 var r7 = 5;
 var r8 = 6;
//newlist %9 = (%6, %7, %8) : [int]
 var r10 = 7;
 var r11 = 8;
 var r12 = 9;
//newlist %13 = (%10, %11, %12) : [int]
//newlist %14 = (%5, %9, %13) : [[int]]
 r1 = r14;
 r0 = r1;
 var r16 = 0;
 var r17 = 1;
//invoke %15 = (%16, %17, %0) ListAssign_Valid_5:move : function(int,int,[[ListAssign_Valid_5:nint]]) -> [[ListAssign_Valid_5:nint]]
 r0 = r15;
//assume 
 return;
}
