const getParams = (params) =>{

    const arrrayParams = []

    const searchParams = new URLSearchParams(params)
    searchParams.forEach(element => {
        arrrayParams.push(element)
    });
    console.log(arrrayParams);
}

const URL = ('https://retosdeprogramacion.com?year=2023&challenge=0');

getParams(URL)