function test() {
 var r3 = 1.2;
 var r4 = 2.3;
 var r5 = 3.4;
//newlist %6 = (%3, %4, %5) : [real]
 var r7 = 1;
 var r8 = 2;
 var r9 = 3;
 var r10 = 4;
 var r11 = 5;
 var r12 = 6;
 var r13 = 7;
 var r14 = 8;
//newlist %15 = (%7, %8, %9, %10, %11, %12, %13, %14) : [int]
//invoke %2 = (%6, %15) ListAppend_Valid_6:test : function([real],[int]) -> bool
 r1 = r2;
 r0 = r1;
//assume 
 var r18 = 1.2;
 var r19 = 2.3;
 var r20 = 3.4;
//newlist %21 = (%18, %19, %20) : [real]
//newlist %22 = () : [void]
//invoke %17 = (%21, %22) ListAppend_Valid_6:test : function([real],[int]) -> bool
 r0 = r17;
//assume 
 return;
}
