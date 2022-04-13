import {createStore,combineReducers} from 'redux'

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"


export const addTodo = (payload)=>{
    return {
        type:ADD_TODO,
        payload,
    }
}

export const deleteTodo = (id)=>{
    return {
        type:DELETE_TODO,
        id
    }
}
const intialstate = {
    todos: [
        {
            title:"do your task",
            content: "01"
        }
    ],
}
const itemReducer = (state=intialstate,action)=>{
    switch(action.type){
        case ADD_TODO:
            return {todos:[...state.todos,action.payload]};
            case DELETE_TODO:
                return {todos:[...state.todos.filter((item,id)=> id !==action.id)]};
        default:
            return state;
    }
}

/*----------------------------------*/
const COUNTER = "COUNTER"

export const Counter = (payload)=>{

    return {
        type:COUNTER,
        payload,
    }
}
let intialCounterState = {
    counter:10
}
const CounterReducer = (state=intialCounterState,action)=>{
        if(action.type===COUNTER)
            return {counter:action.payload};
            
        return state;
    }    



const rootReducer = combineReducers({
    itemReducer,
    CounterReducer
  })
export const store = createStore(rootReducer)