// create a program that will ask the users name, age, and reddit username. have it tell them the information back, in the format:

// your name is (blank), you are (blank) years old, and your username is (blank)
// for extra credit, have the program log this information in a file to be accessed later.

function localSave(msg) {
    //Prep the message
    let blob = new Blob([msg], {type: "text/plain;charset=utf-8"});
    
    //Javascript is a poor choice for file storage, as browser security prevents file access. Found the following solution: https://gist.github.com/liabru/11263260
    file = document.createElement('a');
    file.download = "output.txt";
    file.href = (window.webkitURL || window.URL).createObjectURL(blob);
    file.dataset.downloadurl = ['text/plain', file.download, file.href].join(':');
    file.click();

    //Clean up
    document.body.removeChild(element);
}

function processInfo () {
    let myForm = document.forms.myForm;
    
    let name = myForm.elements.name.value;
    let age = myForm.elements.age.value;
    let username = myForm.elements.username.value;

    let result = `your name is ${name}, you are ${age} years old, and your username is ${username}`;
    
    localSave(result);

    alert(result);

}

