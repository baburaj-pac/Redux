const initState = {
    depts: []

}

const DeptState = (state = initState, action) => {
debugger;
    if (action.type === "addDept") {

        return {
            ...state,
            depts: state.depts.concat(action.value)
        }

    }
    else if (action.type === "deleteDept") {

        let findDepts = state.depts.filter((a => a.id.toString() !== action.value.id.toString()));

        return {
            ...state,
            depts:findDepts
        }
    }
    return state;
}

export default DeptState;