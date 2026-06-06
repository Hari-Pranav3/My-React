import { combineReducers } from "redux"

const initialAddstate = {
    result : 0
}

const addReducer = ( state = initialAddstate , action) => {
    switch(action.type){
        case 'ADDITION' :
            return{
                ...state,
                result: state.result + action.payload,
            }
            default:
                return state;
    }
}


const initialSubtractstate = {
    result : 0
}

const subtractReducer = ( state = initialSubtractstate , action) => {
    switch(action.type){
        case 'SUBTRACT' :
            return{
                ...state,
                result: state.result - action.payload,
            }
            default:
                return state
    }
}

const initialMultiplystate = {
    result : 0
}

const multiplyReducer = ( state = initialMultiplystate , action) => {
    switch(action.type){
        case 'MULTIPLICATION' :
            return{
                ...state,
                result: state.result * action.payload,
            }
            default:
                return state;
    }
}

const initialDivisionstate = {
    result : 0
}

const divideReducer = ( state = initialDivisionstate , action) => {
    switch(action.type){
        case 'DIVISION' :
            return{
                ...state,
                result: state.result/ action.payload,
            }
            default:
                return state;
    }
}

const initialModulusstate = {
    result : 0
}

const modulusReducer = ( state = initialModulusstate , action) => {
    switch(action.type){
        case 'MODULUS' :
            return{
                ...state,
                result: state.result % action.payload,
            }
            default:
                return state;
    }
}

const initialExponentstate = {
    result : 0
}

const exponentReducer = ( state = initialExponentstate , action) => {
    switch(action.type){
        case 'EXPONENT' :
            return{
                ...state,
                result: state.result ** action.payload,
            }
            default:
                return state;
    }
}
 
const rootReducer = combineReducers({
    add : addReducer,
    subtract : subtractReducer,
    multiply : multiplyReducer,
    division : divideReducer,
    modulus : modulusReducer,
    exponent : exponentReducer,
});

export default rootReducer;