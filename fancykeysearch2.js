//PATTERN FILENAME
const path = require('path');
const fs = require('fs');
//node, filename, pattern, and filename
if (process.argv.length !== 4){
  console.log(`Usage: node ${path.basename(__filename)} PATTERN FILENAME`)
  return;
};

let pattern = process.argv[2]; //keyword search
let filename = process.argv[3]; //target the filepath
// if targetfile exists on disk, returns file dne
if(!fs.existsSync(filename)){
  console.log(`${filename}: File / Directory does not exist`);
  return;
};

let content = fs.readFileSync(filename, 'utf8');
let lines = content.split('\n');
// line iterator
let linecount = 0;
for(let line of lines){
  if(line.includes(pattern)){
    linecount++;
  }
};
// UPDATED PART: counts the words and characters in a file
function wordCounter(content){
  let word = content.split(' ');
  console.log(`Total Amount of Words: ${word.length}`);
};

console.log(`Pattern found: ${pattern} in ${linecount} lines within ${filename}`);