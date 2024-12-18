import React, { useEffect, useState } from 'react'

const Dashboard = ()=>{
    const [recipes,setRecipes] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
        const url = 'https://dummyjson.com/recipes'
        const res = fetch(url);
        res.then((res)=>res.json())
        .then((data)=>{
            console.log(data);
         setRecipes(data.recipes);
         setLoading(false);
        })
        .catch((err)=>{
            setError(err.message);
            setLoading(false);
            console.log("unexpected error");
        })
    },[])
    return (
        <div>
            <h1>menu</h1>
            //conditional rendeering//
            {error && <p>{error}</p>};
            {loading && <p>loading...</p>};
            {!error && !loading && (
                <div>
                    <table>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Recipe name</th>
                            <th>Cuisine</th>
                            <th>rating</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>{
                    recipes.map((r)=>(
                         <tr>
                            <td><img src={r.image} width="100" height="50"></img></td>
                            <td>{r.name}</td>
                            <td>{r.cuisine}</td>
                            <td>{r.rating}</td>
                            <td>120/-</td>
                            <td><button>Add to cart</button></td>
                         </tr>    
                    ))
}
                    </table>
                 </div>   
            )}

        </div>
    )
}
export default Dashboard;