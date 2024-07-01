function testTuples() {
    let ourTuples: [string, boolean, number]

    ourTuples = ["Aqib", true, 1]

    ourTuples.push(
        "Javed", 12, true
    )

    const [name, drivingLicense, id] = ourTuples

    console.log(name)
    console.log(drivingLicense)
    console.log(id)
}

testTuples()


const constantName = "This is constant"

// constantName = "reassign" constant can not re-assign

let nonConstantName = "This is not constant"

nonConstantName = "I can reassign"

console.log(typeof nonConstantName)