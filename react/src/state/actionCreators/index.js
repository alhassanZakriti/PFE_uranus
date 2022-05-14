const setMianChat = (data) =>{
    return(dispatch)=>{
        dispatch({
            type:"setMainChat",
            payload:data
        })
    }
}
const insertUserInfo = (data) =>{
    return (dispatch)=>{
        dispatch({
            type:"insertInfo",
            payload:data
        })
    }
}


const setIsLogged = (data) =>{
    return (dispatch)=>{
        dispatch({
            type:"logged",
            payload:data
        })
    }
}

export {setIsLogged,insertUserInfo,setMianChat}