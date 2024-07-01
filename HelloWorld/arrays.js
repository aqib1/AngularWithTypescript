// const names: string[] = []
// names.push("Aqib")
// names.push("Javed")
// for(let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }
function countMatches(items, ruleKey, ruleValue) {
    var numberOfItemsMatched = 0;
    var itemAttribute = new Map([
        ["type", 0],
        ["color", 1],
        ["name", 2]
    ]);
    for (var i = 0; i < items.length; i++) {
        var valueIndex = itemAttribute.get(ruleKey);
        if (items[i][valueIndex] == ruleValue) {
            numberOfItemsMatched++;
        }
    }
    return numberOfItemsMatched;
}
var response = countMatches([["aqib", "red", "car"]], "color", "red");
console.log(response);
