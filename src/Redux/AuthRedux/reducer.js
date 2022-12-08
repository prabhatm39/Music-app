import * as types from "./actionTypes";

const initState = {
    isAuth: false,
    token: '',
    isLodding: false,
    isError: false,
}

const reducer = (oldState=initState, action) => {
    const {type, payload} = action;
    switch(type){

        case types.USER_LOGIN_REQUEST:
            return{
                ...oldState,
                isAuth:false,
                isLodding:true,
                isError:false,
            }

        case types.USER_LOGIN_SUCCESS:
            return{
                ...oldState,
                isAuth:true,
                isLodding: false,
                token: payload,
                isError:false,
            }
        case types.USER_LOGIN_FIALURE:
            return{
                ...oldState,
                isAuth:false,
                isLodding:false,
                isError: true,
            }

        default:
           return oldState;
    }
}

export {reducer}