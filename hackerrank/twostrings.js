// var string1 = "hello"
// var string2 = "world"

function Substring(string1, string2) {
    var successFlag = "YES";
    for (var idx = 0; idx < string1.length; idx++) {
        for (var jdx = 0; jdx < string2.length; jdx++) {
            // console.log(string2[jdx])
            if (string1[idx] != string2[jdx]) {
                successFlag = "NO";
                // console.log(string2[jdx] + " -----> " + string1[idx])
            }

        }
    }
    console.log(successFlag)
}

Substring("wouldyoulikefries", "abcabcabcabcabcabc")

// ANSWER
// NO