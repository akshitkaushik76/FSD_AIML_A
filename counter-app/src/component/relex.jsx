import {useRef, useState} from 'react'
const RefEx=()=>{
    console.log("Object Rendered");
    let a=5;
    const refcnt=useRef(0);
    const [cnt1,setcnt1] = useState(0);
    function handleIncre(){
        refcnt.current++;
        setcnt1(cnt1+1);
        console.log("refCount"+refcnt.current);
        if(refcnt.current==5){
            alert("refcount="+refcnt.current);
        }
    }
    return(
        <div>
            <h1>useRef Example</h1>
            <h1>refCount={refcnt.current}</h1>
            <h1>value={cnt1}</h1>
            <button onClick={handleIncre}>Increment</button>
        </div>
    )
}
export default RefEx;