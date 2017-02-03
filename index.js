#!/usr/bin/env node
'use strict'

const readlineSync = require('readline-sync');
const childproc = require('child_process');
const execSync = childproc.execSync;

const git = require('gitty');
const repo = git('./');


const black   = '\u001b[30m';
const red     = '\u001b[31m';
const green   = '\u001b[32m';
const yellow  = '\u001b[33m';
const blue    = '\u001b[34m';
const magenta = '\u001b[35m';
const cyan    = '\u001b[36m';
const white   = '\u001b[37m';

const reset   = '\u001b[0m';

repo.getBranches((n,branches) => {
  if(!branches){
    console.log('Branch nothing...');
    return;
  }
  console.log('Current branch is [' + branches.current + ']');
  branches.others
    .filter((ob) => {
      return ob != 'master' && ob != 'develop';
    })
    .forEach((ob) =>{
      const ans = readlineSync.question(reset + 'Delete branch [' + green + ob + reset + ']?(yes)/n : ');
      if(ans !== 'n' && ans !== 'N'){
        execSync('git branch -D ' + ob,{cwd: repo.path});
        console.log(reset + 'Deleted [' + green + ob + reset + ']');
      }
    });
});

