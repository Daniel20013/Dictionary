function addToTheDictionary() {
    let container = document.querySelector("#wordsEntered");
    let createWord = document.createElement("p");
    let text = document.querySelector("#inputSave").value;
    let pText = document.createTextNode(text);

    createWord.appendChild(pText);
    cntainer.appendChild(createWord);
}

function lookForTheWord() {
    let dictionary = document.querySelectorAll("p");
    let searchedWord = document.querySelector("#inputSearch").value;
    let exists = false;
  
    for (let i = 0; i < dictionary.length; ++i) {
        let text = dictionary[i].textContent;
        if (text === searchedWord) {
            exists = true;
            break;
        }
    }

    if (exists) {
        alert("Cuvantul exista în dictionar!");
    } else {
        alert("Cuvantul nu exista in dictionar!");
    }
}
