

const pokenonApi = async (details,pokemoName) =>{
    const URI = `https://pokeapi.co/api/v2/${details}${pokemoName}`
    console.log(URI);
    const response = await fetch(URI);
    const data = await response.json()
    console.log(data);
}

const details = 'pokemon/'
const pokemoName = 'clefairy'

pokenonApi(details,pokemoName)