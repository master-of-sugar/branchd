#!/usr/bin/env node
'use strict'

const readlineSync = require('readline-sync');
const childproc = require('child_process');
const execSync = childproc.execSync;

const git = require('gitty');
const repo = git('./');


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
      const ans = readlineSync.question('Delete branch [' + ob + ']?(yes)/n : ');
      if(ans !== 'n' && ans !== 'N'){
        execSync('git branch -D ' + ob,{cwd: repo.path});
        console.log('Deleted [' + ob + ']');
      }
    });
});

