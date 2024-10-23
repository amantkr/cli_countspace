const { Command } = require('commander');
const program = new Command();
const fs = require("fs");

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('count')
  .description('Count number of words in a file')
  .argument('<file>', 'file to read from')
  
  .action((file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
     if(err)
        console.log(err);

     else {
        let words = 0;
        for(let i=0;i < data.length;i++)
        {
            if(data[i] === " "){
                words++;
            }
        }
        console.log(words);
     }
    });
  }
  );

program.parse();
















