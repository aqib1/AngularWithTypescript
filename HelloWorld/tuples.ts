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