export function Jsx({match}) {

    const filmData =  data(fetching(match))

    console.log('film data', filmData)

            return (<>
            <img src={filmData.poster.url} alt="" />
            <h1>{filmData.name}</h1>
            <span>{filmData.year, filmData.genres.forEach(e => e.name)}</span>
            <span>{filmData.countries.forEach(e => e.name)}</span>
            <p>{filmData.description}</p>
            </>)

}



// const url = `https://api.kinopoisk.dev/movie?search=${match.params.id}&field=id&token=9QQHNGV-DW1M2SZ-PXQ0A9T-3WCES4R`

function fetching(match) {
    const prom = fetch(`https://api.kinopoisk.dev/movie?search=${match.params.id}&field=id&token=9QQHNGV-DW1M2SZ-PXQ0A9T-3WCES4R`)
    .then(res => res.json(),err => console.error(err))
    return prom
}

function data(promise) {
    let result;

    promise.then(smth => result = smth)

    return result
}