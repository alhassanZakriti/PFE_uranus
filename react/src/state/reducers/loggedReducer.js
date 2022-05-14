const initialState={ isLogged:false}


const isLogged = (state=[initialState],action)=>{
    switch(action.type){
        case "logged":
            state= action.payload;break;
        default : state=state;
    }
    return state;
}

export default isLogged;