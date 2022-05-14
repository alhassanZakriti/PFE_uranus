const initialState={ contact:""}


const mainChat = (state=[initialState],action)=>{
    switch(action.type){
        case "setMainChat":
            state= action.payload;break;

        default : state=state;
    }
    return state;
}

export default mainChat;