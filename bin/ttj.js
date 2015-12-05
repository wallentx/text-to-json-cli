#!/usr/bin/env node

"use strict";

const fs = require('fs');
const chalk = require('chalk');
const meow = require('meow');
const text_to_json = require('plain-text-data-to-json');

const cli = meow(`
+---------------------------------------------------------------------+
|  _____ _____ __ __ _____    _____ _____       __ _____ _____ _____  |
| |_   _|   __|  |  |_   _|  |_   _|     |   __|  |   __|     |   | | |
|   | | |   __|-   -| | |      | | |  |  |  |  |  |__   |  |  | | | | |
|   |_| |_____|__|__| |_|      |_| |_____|  |_____|_____|_____|_|___| |
|                                                                     |
|    Usage                                                            |
|      $ ttj <file>                                                   |
|                                                                     |
|    Options                                                          |
|      -f,  --file,  File to convert                                  |
|      -c,  --comments, allow comments                                |
|      -d,  --delimiter, delimiter for key value pairs                |
|      -fg, --forgiving, doesn't throw error for duplicate keys       |
|      -l,  --log, Wether to log when forgiving ignores an error      |
|                                                                     |
|    Examples                                                         |
|      $ ttj --file unicorns.txt                                      |
|                                                                     |
+---------------------------------------------------------------------+
`, {
    alias: {
        r: 'rainbow'
    }
});


// Process commands
if(cli.input[0] === 'help') {
  console.log(cli.help);
}



if(cli.flags.f || cli.flags.file) {
  let options = {};
  options.file       = cli.flags.file      || cli.flags.f;
  options.comments   = cli.flags.comments  || cli.flags.c   || '%';
  options.delimiter  = cli.flags.delimiter || cli.flags.d   || ':';
  options.forgiving  = cli.flags.forgiving || cli.flags.fg  || false;
  options.log        = cli.flags.log       || cli.flags.l   || true;
  options.output     = cli.flags.output    || cli.flags.o   || options.file;

  fs.readFile(options.file, (err, data) => {
    if(err) {throw err;}
    let filtered   = text_to_json(data.toString(), options);
    options.output = options.output.replace(/\.[\w]+$/g, '.json');

    console.log(options.output);

    fs.writeFile(options.output, JSON.stringify(filtered), (err) => {
      if (err) {throw err;}
      console.log(chalk.green('Hurra, finished with any problems. Good luck on your project! \n'));
    });
  });
} else {
  cli.showHelp();
}




 process.on('uncaughtException', (err) => {
   console.log(err);
 });
