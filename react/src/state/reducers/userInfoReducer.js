const initialState={ userName:"Nann",isLogged:false}


const userInfo = (state=[initialState],action)=>{
    switch(action.type){
        case "insertInfo":
            state= action.payload;break;
        default :state=state;
    }
    return state;
}

export default userInfo;