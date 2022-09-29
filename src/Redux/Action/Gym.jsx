import axios from "axios";

export const GYM_LOADING = 'GYM_LOADING';
export const GYM_SUCCESS = 'GYM_SUCCESS';
export const GYM_ERROR = 'GYM_ERROR';

const gymSuccess = (payload) => {
    return (
        {type: GYM_SUCCESS, payload}
    )
}

const gymLoading = (payload) => {
    return (
        {type: GYM_LOADING, payload}
    )
}

const gymError = (payload) => {
    return (
        {type: GYM_ERROR, payload}
    )
}

export const Gymmiddleware = (data='nodia') => {
    return async (dispatch) => {
        dispatch(gymLoading());
        await axios.get(`https://api.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231&city=${data}`).then((res) => {
            dispatch(gymSuccess(res.data));
        }).catch((err) => {
            dispatch(gymError())
        })
    }
}
