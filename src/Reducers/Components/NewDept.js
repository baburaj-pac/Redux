import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function NewDept() {

    const dispatch = useDispatch();

    const [getEmp, setEmp] = useState({ emp: {id:0, name: ''} });
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
    const addDept = () => {
        debugger;
        let e=getEmp.emp;
        dispatch({type:'addDept',value:e})
        

    }
    return (<div>
        <div>Name:<input onChange={nameChange.bind(this)} type="text"></input></div>
        <div>Dept ID:<input onChange={ageChange.bind(this)} type="text"></input></div>
        <button onClick={()=>addDept()} >Add Department</button>
    </div>)


}
