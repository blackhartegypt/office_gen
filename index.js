const officegen=require("officegen");
const fs=require("fs");
const docx=officegen('docx');
const p=docx.createP();
p.addText("This should be a simple paragraph");
const out_put=fs.createWriteStream("results.docx");
const p2=docx.createP();
p2.addText("This is the second paragraph");
docx.putPageBreak();
const p3=docx.createP();
p3.addImage("p1.jpg",{cx:100,cy:100});
docx.generate(out_put);

