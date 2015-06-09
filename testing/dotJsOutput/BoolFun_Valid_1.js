function test() {
 var r2 = true;
 r1 = r2;
 r0 = r1;
 -- something is here -- 
 var r5 = false;
 r0 = r5;
 -- something is here -- 
 return;
}
