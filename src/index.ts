#!/usr/bin/env node

import { Command } from "commander";

//declare program
const program = new Command();

//add actions to the cli
program
  .argument("<string>", "damnnnnn")
  .action((msg) => {
    console.log("yo your message is: ", msg);
  })
  .description(" jskdjfk");

program
  .command("add <number...>")
  .action((numbers: string[]) => {
    console.log(numbers.reduce((prev, accm) => +accm + +prev, 0));
  })
  .description("add numbers");

program.parse(process.argv);
