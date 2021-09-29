import {
    SET_NAME,SET_TYPE,SET_YEAR_END,SET_YEAR_START,
    SET_RATE_PROVIDER,SET_RATE_START,SET_RATE_END,SET_MOVIE_LIMIT,
    SET_PAGE,FETCHING_FAILED,FETCHED_SUCCESSEFULLY,FETCH_DATA
} from './actionTypes'


const requsetInitialState = {
    movieTitle: '',
    yearStart: 2016,
    yearEnd: 2021,
    rateStart: 5,
    rateEnd: 10,
    rateProvider: 'rating.kp',
    movieLimit: 10,
    type: 'movie',
    page: 1
}

function requsetParametrs(state = requsetInitialState, action) {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state, movieTitle: action.payload
            }
            break;

        case SET_YEAR_START:
            return {
                ...state, yearStart: action.payload
            }
            break;

        case SET_YEAR_END:
            return {
                ...state, yearEnd: action.payload
            }
            break;

        case SET_RATE_START:
            return {
                ...state, rateStart: action.payload
            }
            break; 

        case SET_RATE_END:
        return {
            ...state, rateEnd: action.payload
        }
        break;

        case SET_RATE_PROVIDER:
            return {
                ...state, rateProvider: action.payload
            }
            break;

        case SET_TYPE:
            return {
                ...state, type: action.payload
            }
            break;

        case SET_PAGE:
            return {
                ...state, page: action.payload
            }
            break;

        case SET_MOVIE_LIMIT:
            return {
                ...state, movieLimit: action.payload
            }
            break;

        default:
            return state
    }
}

const initialDataState = {
    loading: false,
    data: {},
    error: ''
}

function dataReducer(state = initialDataState, action) {
    switch (action.type) {
        case FETCH_DATA: 
        return {
            ...state, loading: true,data: []
        }
            break;
        case FETCHED_SUCCESSEFULLY : 
        return {
            ...state, loading: false, data: {...action.payload}, error:''
        }
        break;
        case FETCHING_FAILED: 
        return {
            ...state, loading: false, data: [], error: action.payload
        }
        default:
            return state
    }
}

export {dataReducer}