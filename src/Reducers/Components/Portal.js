import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import MyConnectedComponent from './MyConnectedComponent';
import NewDept from './NewDept';
import NewEmployee from './NewEmployee';

const Employee = (e) => <div><div>Name:{e.e1.name}</div><div>Age:{e.e1.age}</div></div>
const Department = (e) => <div><div>Name:{e.e1.name}</div><div>Description:{e.e1.id}</div></div>

export default function Portal() {

    const empState = useSelector(state => state.empReducer.employees);
    const deptState = useSelector(state => state.deptReducer.depts);
    const dispatch = useDispatch();

    const deleteEmp = (e) => {
        dispatch({ type: 'deleteEmployee', value: e })
    }
    const deleteDept = (e) => {
        dispatch({ type: 'deleteDept', value: e })
    }
    return (
        <div>
            <div style={{ display: "flex",float: "left"  }}>
            <div> Employees:  {empState.map((e, k) =>
                <div key={k}> <div><Employee e1={e}  ></Employee></div>
                    <div><button onClick={()=>deleteEmp(e)}>Remove</button></div>
                </div>)}

            </div>
            <NewEmployee></NewEmployee>
            </div>
            <div  style={{ display: "flex",float: "right"  }}>
            <div> Department:  {deptState.map((e, k) =>
                <div key={k}> <div><Department e1={e}  ></Department></div>
                    <div><button onClick={()=>deleteDept(e)}>Remove</button></div>
                </div>)}

            </div>
            <NewDept></NewDept>
            
            </div>
            <MyConnectedComponent></MyConnectedComponent>
        </div>
    )
}
