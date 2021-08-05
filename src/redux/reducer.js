const initialState = {
    loading: false,
    loggedIn: true,
};

export default (state = initialState, action) => {
    console.log(action);

    switch(action.type){
        case 'LOADING': return{...state, loading: action.payload}

        case 'LOGIN': return{...state, ...action.payload, loggedIn: true}

        default: return state
    }
}