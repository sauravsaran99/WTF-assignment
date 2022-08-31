
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