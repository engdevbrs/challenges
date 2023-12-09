function hackTranslator(palabra) {
    palabra = palabra.toLowerCase()
    const vowels = ['a','e','i','o','u'];
    const leetVowels = {
        a: 4,
        e:3,
        i:1,
        o:0,
        u:'(_)'
    }

    let newWord = '';

    for (let i = 0; i < palabra.length; i++) {
        if(!vowels.includes(palabra.charAt(i))){
            newWord = newWord.concat(palabra.charAt(i))
        }else if(palabra.charAt(i) === 'a'){
            newWord = newWord.concat(leetVowels.a)
        }else if(palabra.charAt(i) === 'e'){
            newWord = newWord.concat(leetVowels.e)
        }else if(palabra.charAt(i) === 'i'){
            newWord =  newWord.concat(leetVowels.i)
        }else if(palabra.charAt(i) === 'o'){
            newWord = newWord.concat(leetVowels.o)
        }else if(palabra.charAt(i) === 'u'){
            newWord = newWord.concat(leetVowels.u)
        }
    }

    console.log(newWord);
}

hackTranslator("cOncatenAcion")