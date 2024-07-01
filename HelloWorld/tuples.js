function testTuples() {
    var ourTuples;
    ourTuples = ["Aqib", true, 1];
    ourTuples.push("Javed", 12, true);
    var name = ourTuples[0], drivingLicense = ourTuples[1], id = ourTuples[2];
    console.log(name);
    console.log(drivingLicense);
    console.log(id);
}
testTuples();
