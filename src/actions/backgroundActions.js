import axios from 'axios';

export const fetchBackgroundUrl = (url) => {
    return dispatch => {
        axios.get(`https://source.unsplash.com/1600x900/?coffee`)
          .then(res =>{
            dispatch({
                type: 'SET_BACKGROUND_URL',
                payload: res.request.responseURL
            })
          });
    }
        
}