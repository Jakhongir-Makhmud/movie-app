// import React, { useEffect, useRef, lazy, Suspense } from 'react'
// import { useState } from 'react'
// import { flushSync } from 'react-dom'
// import { Jsx } from './FetchDetails'
// import {useHistory} from "react-router-dom";

// function MovieDetail({match}) {

//     const [filmData, setItem] = useState({})
//     const [Elem, setElem] = useState()
//     const isMounted = useRef(false)
//     const history = useHistory();
// const url = `https://api.kinopoisk.dev/movie?search=${match.params.id}&field=id&token=9QQHNGV-DW1M2SZ-PXQ0A9T-3WCES4R`

// useEffect( () => {

//     fetch(`https://api.kinopoisk.dev/movie?search=${match.params.id}&field=id&token=9QQHNGV-DW1M2SZ-PXQ0A9T-3WCES4R`)
//     .then(res => res.json(),err => console.error(err))
//     .then(data => setItem(data))

   
// }, [])

// useEffect(() => {
//     if (isMounted.current) {

//     setElem((<>
//         <img src={filmData.poster.url} alt="" />
//         <h1>{filmData.name}</h1>
//         <span>{filmData.year, filmData.genres.forEach(e => e.name)}</span>
//         <span>{filmData.countries.forEach(e => e.name)}</span>
//         <p>{filmData.description}</p>
//        </>))

//        console.log(filmData)
//     } else isMounted.current = true    
// }, [filmData])

//     return (
//         <div>
           

// <button onClick={() => history.goBack()}>Go Back</button>
//                 { Elem}
    
//         </div>
//     )
// }

// export default MovieDetail












// (<>
//     <img src={filmData.poster.url} alt="" />
//     <h1>{filmData.name}</h1>
//     <span>{filmData.year, filmData.genres.forEach(e => e.name)}</span>
//     <span>{filmData.countries.forEach(e => e.name)}</span>
//     <p>{filmData.description}</p>
//     </>)