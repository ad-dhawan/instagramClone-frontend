const initialState = {
    loading: false,
    loggedIn: false,
    username: null,
    email: null,
    id: null,
    profilePicture: null,
    followers: null,
    followings: null
};

export default (state = initialState, action) => {
    console.log(action);

    switch(action.type){
        case 'LOADING': return{...state, loading: action.payload}

        case 'LOGIN': return{...state, ...action.payload, loggedIn: true}

        case 'LOGOUT': return{...state, ...action.payload, loggedIn: false}

        default: return state
    }
}