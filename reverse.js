let argv = process.argv.slice(2, process.argv.length);
let reversed = '';
for (let argv1 of argv) {

  for (let k = argv1.length - 1; k >= 0; k--) {
    reversed += argv1[k];
  }
  reversed += '\n';
}
console.log(reversed);
