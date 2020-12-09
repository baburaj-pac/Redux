import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function NewEmployee() {

    const dispatch = useDispatch();

    const [getEmp, setEmp] = useState({ emp: {id:'', name: '', age: 0 } });
    function nameChange(e) {
        debugger;
        let e1 = { emp: { id:new Date().getMilliseconds(), name: e.target.value, age: getEmp.emp.age } };
        setEmp(e1);
    }
    function ageChange(e) {
        debugger;
        let e1 = { emp: {  id:new Date().getMilliseconds(),name: getEmp.emp.name, age: e.target.value } };
        setEmp(e1);
    }
    const addEmp = () => {
        debugger;
        let e=getEmp.emp;
        dispatch({type:'addEmployee',value:e})
        

    }
    return (<div>
        <div>Name:<input onChange={nameChange.bind(this)} type="text"></input></div>
        <div>Age:<input onChange={ageChange.bind(this)} type="text"></input></div>
        <button onClick={()=>addEmp()} >Add Employee1</button>
    </div>)


}
