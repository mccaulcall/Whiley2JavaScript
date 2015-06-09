function test() {
 var r2 = 112233445566778899;
 r1 = r2;
 r0 = r1;
 -- assert statement here -- 
 var r4 = 1;
 var r5 = r0 + r4;
 r0 = r5;
 -- assert statement here -- 
 var r7 = 556;
 var r8 = r0 - r7;
 r0 = r8;
 -- assert statement here -- 
 var r10 = 123;
 var r11 = r0 * r10;
 r0 = r11;
 -- assert statement here -- 
 var r13 = 2;
 var r14 = r0 / r13;
 r0 = r14;
 -- assert statement here -- 
 return;
}
