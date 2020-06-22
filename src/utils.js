//List of Object In Local Storage = LOILS
const soundfile = require("./test.mp3");

export function transformListOfStringfiedObjectsIntoArray(stringfiedObjectList) {
    if (!stringfiedObjectList)
        return;

    stringfiedObjectList = stringfiedObjectList.split("}");
    stringfiedObjectList = stringfiedObjectList.map((one, index) => {
        if (index > 0)
            one = one.substr(1);
        return one + "}";
    });
    stringfiedObjectList.pop();
    stringfiedObjectList = stringfiedObjectList.map(stringTimer => JSON.parse(stringTimer));
    return stringfiedObjectList;
}

export function deleteItemLOILS(keyValue,identifier){
    let list = transformListOfStringfiedObjectsIntoArray(localStorage.getItem(keyValue))
    list.splice(identifier,identifier + 1);
    insertItemLOILS(keyValue,list);
}

export function insertItemLOILS(keyValue,list){
    list = list.map(item => JSON.stringify(item));            
    localStorage.setItem(keyValue,list.join());
}

function Notify(){
    let l = new Audio(soundfile);
    l.play()
}