const initState = {
    results: []
}
const ResultReducer = (state = initState, action) => {
    debugger;
    if (action.type === "addStore") {

        return {
            ...state,
            results:state.results.concat(action.value)
        }
    }
    else if (action.type === "viewStore") {

        return {
            ...state,
            results:state.results
        }
    }

    return state;
}
export default ResultReducer;

