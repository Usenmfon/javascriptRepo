var count = 0;

function duplicateCount(text) {
    for (let i = 0; i < text.length; i++) {
        let n = text.length;
        if (text[i].match(text[n - 1])) {

            count++;
        }

    }
    console.log(count);
}
duplicateCount("aabbccdd");