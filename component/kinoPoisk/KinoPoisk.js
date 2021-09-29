import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Button, Collapse } from 'react-bootstrap'
import MovieDisplay from './MovieDisplay';
import PagePagination from './PagePagination';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetch_data, fetched_successefully, fetching_failed } from './../../reduxStorage/actionCreator'
import axios from 'axios'


function KinoPoisk({state}) {

    const {loading , error} = state
 
    const [data, setData] = useState(state.data)



    const [request, setRequest] = useState({});
    const [nameInp, setNameInp] = useState('');
    const [radioSelect, setCheckboxInp] = useState('movie');
    const [yearInp, setYearInp] = useState({
        yearFrom: 2019,
        yearUntil: 2021
    });
    const [ratingInp, setRatingInp] = useState({
        ratingFrom: '5',
        ratingUntil: '10',
        ratingProvider: 'rating.kp'
    });
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    // Toggler
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    const isMounted = useRef(false)
    const isSubmitted = useRef(false)

    const checkEquality = (a,b) => {
        const leng1 = Object.keys(a).length;
        const leng2 = Object.keys(b).length

        if (leng1 === leng2) return Object.keys(a).every( key => b.hasOwnProperty(key) && b[key] === a[key])
        return false

    } 

    const url = `https://api.kinopoisk.dev/movie?search=${nameInp}&field=name&isStrict=false&field=${ratingInp.ratingProvider}&search=${ratingInp.ratingFrom}-${ratingInp.ratingUntil}&field=year&search=${yearInp.yearFrom}-${yearInp.yearUntil}&field=type&search=${radioSelect}&sortField=year&sortType=1&sortField=${ratingInp.ratingProvider}&sortType=-1&limit=${limit}&page=${page}&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06`
    const startFetch = () => function (dispatch) {
        dispatch(fetch_data())
        axios.get(url)
        .then(res => {
            dispatch(fetched_successefully(res.data))
        })
        .catch(err => {
            dispatch(fetching_failed(err))
        })
    }

    const submitForm = (e) => {
        e.preventDefault()

        if (yearInp.yearFrom === '') setYearInp({...yearInp, yearFrom: 2011});
        if (yearInp.yearUntil === '') setYearInp({...yearInp, yearUntil: 2021});


        let calcYear = yearInp.yearUntil - yearInp.yearFrom;
        let calcRating = ratingInp.ratingUntil - ratingInp.ratingFrom;

        if (calcYear > 10 ) {
            alert('Промежуток времени(года) не должно превышать 10 лет!!!')
            return false
        } else if (calcYear < 1) {
            alert('Годы должны быть введены в порядке возрастания!!!')
            return false
        }
        
        if (calcRating <= 0) {
            alert('Рейтинги должны быть введены в порядке возрастания!!!')
            return false
        }



        if (!checkEquality(request,{...request, nameInp,radioSelect,yearInp,ratingInp,page,limit})) {
            
            setRequest({...request, nameInp,radioSelect,yearInp,ratingInp,page,limit})
            isSubmitted.current = true
        }
       
    

    }

    const pageControl = () => {
        if (isMounted.current) {
            if (!checkEquality(request,{...request, nameInp,radioSelect,yearInp,ratingInp,page,limit})) {
                 setRequest({...request, nameInp,radioSelect,yearInp,ratingInp,page,limit})
                 window.scrollTo(0, 0) 
        }
        } else isMounted.current = true;
        
    }

    useEffect(pageControl, [page]);

    
    // useCallback(
    //     () => {
    //         dispatch(startFetch())
    //     },
    //     [request],
    // )
    // useCallback(
    //     () => {
    //         dispatch(startFetch())
    //     },
    //     [],
    // )


    const fetching = useMemo(() => dispatch(startFetch()),[request])


    // useEffect(() => {


    //     if (!checkEquality(data,{...state.data}) || isSubmitted) dispatch(startFetch())

    //     isSubmitted.current = false
    
    // }, [request])
  
    

  

    return (
        <div className='insideMainContent'>
            <div className = 'formContainer'>
            <h1>KinoPoisk</h1>
            <form onSubmit={(e) => submitForm(e)}>
                <input className='nameSearch' onChange={(e) => setNameInp(e.target.value)} type="text" /> {/*search by name*/}
                {/* Toggler */}

        <Button 
        className='filterBtn'
        variant="secondary"
        size="sm"
        onClick={() => setOpen(!open)}
        aria-controls="filter"
        aria-expanded={open}
         >
        <i className="bi bi-sliders"></i>
         </Button>
                <br />

                <div className='radioInp' >

                <input type="radio" value='movie' name='radioSelect' onChange={(e) => setCheckboxInp(e.target.value)} defaultChecked={true} />
                <label htmlFor="radioSelect"> Кинофильм</label>
                
                <input type="radio" value='tv-series' name='radioSelect' onChange={(e) => setCheckboxInp(e.target.value)} />
                <label htmlFor="radioSelect"> ТВ-сералы</label>
               
                <input type="radio" value='cartoon' name='radioSelect' onChange={(e) => setCheckboxInp(e.target.value)} />
                <label htmlFor="radioSelect"> Мультфилмы</label>

                </div>
            


                <Collapse in={open}>
                <div id="filter">

                <label htmlFor="year">Год: </label>
                <br />
                <label htmlFor="yearFrom">От: </label>
                <input className='filterInput' value={yearInp.yearFrom} onChange={(e) => setYearInp({...yearInp, yearFrom: e.target.value})} min='1890' max='2020' name='yearFrom' type="number" /> {/*search by year*/}
                <label htmlFor="yearUntil">До: </label>
                <input className='filterInput' value={yearInp.yearUntil} onChange={(e) => setYearInp({...yearInp, yearUntil: e.target.value})} min='1891' max='2021' name='yearUntil' type="number" />

                <br />
                <label htmlFor="rating">Рейтинг: </label>
                <br />
                <label htmlFor="rating" >От: </label>
                <input className='filterInput' value={ratingInp.ratingFrom} onChange={(e) => setRatingInp({...ratingInp, ratingFrom: e.target.value})} max='9' min='1' type="number" name='rating' /> {/*seach by rating*/}
                <label htmlFor="rating">До: </label>
                <input className='filterInput' value={ratingInp.ratingUntil} onChange={(e) => setRatingInp({...ratingInp, ratingUntil: e.target.value})} min='2' max='10'  type="number" name="rating" />
                <br/>
                <select className='filterSelector' name="Rating" id="ratingSelect" onChange={(e) => setRatingInp({...ratingInp, ratingProvider: e.target.value})}>
                    <option value="rating.kp">KinoPoisk</option>
                    <option value="rating.imdb">IMDB</option>
                    <option value="rating.tmdb">TMDB</option>
                </select>
                <br/>
                <label htmlFor="showLimit">Показать по: </label>
                <input className='filterInput' onChange={(e) => setLimit(e.target.value)} value={limit} type="number" min='10' max='100'  />

                </div>
                </Collapse>
                

                <button type='submit' className='searchBtn'>Search</button>
                
            </form>
            </div>
            <br />
            

            <MovieDisplay/>

            
           
             {!loading && (error == '') ? <PagePagination page={data.page} totalPages={state.pages} pageController={setPage} /> : null }
        </div>
    )

}


const stateToProp = state =>({
    state
})



export default connect(stateToProp)(KinoPoisk)








// 9QQHNGV-DW1M2SZ-PXQ0A9T-3WCES4R


     
    //     fetch(url,{
    //         method: "GET"})
    //       .then(results => results.json())
    //       .then(data => {
    //         SetMovieData(data)
    //         if (data.docs[0] === undefined) setReqStatus(false)
    //         else setReqStatus(true)
    //         })
    //       .catch(err  => {
    //           setReqStatus(false)
    //    
    //       })

        // const xhr = new XMLHttpRequest();


        // xhr.open('GET', url);
        // xhr.setRequestHeader('access-control-allow-origin', '*');
        // xhr.setRequestHeader("Content-type", "application/json;");


        // xhr.responseType = 'json';

        // xhr.send();

        // xhr.onload = () => {
        //     if (xhr.status !== 200) {
        //         alert('Что то пошло не так, перезапустите страницу!')
        //         return false
        //     }
        //     const data = xhr.response
     
        //     SetMovieData(data)
        //     setXhrStatus(xhr.status)
        // }
        
        // xhr.onerror = () => {
        //     alert('Произошла ошибка с соединением!')
        // }

  
        


