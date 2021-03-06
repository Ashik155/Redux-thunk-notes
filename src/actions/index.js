import jsonplaceholder from "../apis/jsonplaceholder"


export const fetchPost =  () =>{

    return async (dispatch) => {
        const response  = await jsonplaceholder.get('/posts');
        dispatch({type:"FETCH_POSTS", payload:response})
    }
}

