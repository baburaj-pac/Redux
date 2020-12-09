const initState = {
    counter: 1
}
const CounterReducer = (state = initState, action) => {
    if (action.type === "add") {

        return {
            ...state,
            counter:state.counter+action.value
        }
    }
    else if (action.type === "sub") {

        return {
            ...state,
            counter:state.counter-action.value
        }
    }

    return state;
}
export default CounterReducer;

