#!/usr/bin/env node
import inquirer from "inquirer";

let condition:boolean = true

while(condition){
let userChoices = await inquirer.prompt([
    {
        type:"list",
        name :"choices",
        message:"choose any one",
        choices:["wordCounter","removeWords","exit"]
    }
]);

if (userChoices.choices === "wordCounter") {

    let userWords = await inquirer.prompt({
        type:"input",
        name:"counter",
        message:"enter your words:"
    });
    if(userWords.counter !== ""){
    var words = userWords.counter.trim().split(" ");
    console.log(words);
    console.log(`your word is: "${words.length}"`);
    }else{
        console.log("please enter your words");
        
    }
}


else if(userChoices.choices === "removeWords"){
    let deleteWords = await inquirer.prompt({
        type:"list",
        name:"delete",
        message:"choose your words and delete it",
        choices:words
    })
    let deleteItems = words.indexOf(deleteWords.delete);

    if (deleteItems >= 0) {
        words.splice(deleteItems,1)
        console.log(`you removed "${deleteWords.delete}"`);
        console.log(words);
    }
}

else{
    condition = false
}

}