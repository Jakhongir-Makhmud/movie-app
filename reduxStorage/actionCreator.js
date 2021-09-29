import * as type from './actionTypes'

const fetch_data = () => {
    return {
        type: type.FETCH_DATA
    }
}

const fetched_successefully = (data) => {
    return {
        type: type.FETCHED_SUCCESSEFULLY,
        payload: data
    }
}

const fetching_failed = (err) => {
    return {
        type: type.FETCHING_FAILED,
        payload: err
    }
}

export {fetch_data,fetched_successefully,fetching_failed}