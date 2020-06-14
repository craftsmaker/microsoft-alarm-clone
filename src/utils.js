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