function test() {
 var r4 = 8;
 r3 = r4;
 r0 = r3;
 var r6 = 1;
 r5 = r6;
 r1 = r5;
 var r8 = r0 * r0;
 var r9 = r8 - r1;
 r7 = r9;
 r2 = r7;
 -- assert statement here -- 
 var r11 = r0 * r0;
 var r12 = r11 - r1;
 r2 = r12;
 -- assert statement here -- 
 var r14 = r0 - r1;
 var r15 = r0 * r14;
 r2 = r15;
 -- assert statement here -- 
 return;
}
