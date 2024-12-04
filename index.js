const officegen=require("officegen");
const fs=require("fs");
const docx=officegen('docx');
const p=docx.createP();
p.addText("This should be a simple paragragh");
const out_put=fs.createWriteStream("results.docx");
docx.generate(out_put)
