const names: string[] = []
names.push("Aqib")
names.push("Javed")

for(let i = 0; i < names.length; i++) {
    console.log(names[i])
}


function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let index: number = 0
    const itemAttribute = new Map <string, number>([
        ["type", 0],
        ["color", 1],
        ["name", 2]
    ])
    
    for(let i = 0; i < items.length; i++) {
        let valueIndex = itemAttribute.get(ruleKey)
        if(items[i][valueIndex!!] == ruleValue)
    }

    return index;
};