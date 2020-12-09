const initState = {
    employees: []

}

const EmployeeState = (state = initState, action) => {
debugger;
    if (action.type === "addEmployee") {

        return {
            ...state,
            employees: state.employees.concat(action.value)
        }

    }
    else if (action.type === "deleteEmployee") {

        let findEmp = state.employees.filter((a => a.id.toString() !== action.value.id.toString()));

        return {
            ...state,
            employees:findEmp
        }
    }
    return state;
}

export default EmployeeState;