let argv = process.argv.slice(2, process.argv.length);
let pigL = "";
let argv0 = "";
let pigLatin = "";

for (let argvs of argv) {
  argv0 = argvs[0];
  argvs = argvs.slice(1, argvs.length);
  pigL = argvs + argv0 + "ay";
  pigLatin += pigL + " ";
}
console.log(pigLatin);