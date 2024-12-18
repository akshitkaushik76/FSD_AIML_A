import React, { createContext } from 'react'
const StudentContext  = createContext();
import Child1 from './Child1'
const parent = () => {
    const stu = {name:"ABC",age:23}
    return (
        <div>
            <h1>Parent Component</h1>
            <Child1 student = {stu}/>
        </div>
    )
}
export default Parent
export StudentContext;