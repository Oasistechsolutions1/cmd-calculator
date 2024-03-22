#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "input your first num", type: "number", name: "firstnum", },
    { message: "input your second num", type: "number", name: "secondnum", },
    { message: "select one of the operator to perfome action", type: "list", name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"], },
]);
if (answer.operator === "addition") {
    console.log('your answer is :' + answer.firstnum + answer.secondnum);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnum - answer.secondnum);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstnum * answer.secondnum);
}
else if (answer.operator === "division") {
    console.log(answer.firstnum / answer.secondnum);
}
