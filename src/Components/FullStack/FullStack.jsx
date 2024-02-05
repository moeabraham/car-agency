import React from 'react'
import {useState, useEffect} from "react";
import styles from "./FullStack.module.css"

function FullStack() {
    const [ fetches, setFetches] = useState({
        skill: "",
        level: ""

    })
    console.log(fetches)
const handleChange = (e)=> {
    setFetches((prev) => ({
        ...prev,
        [e.target.name] : [e.target.value]

    }))
}
    async function handleSubmit(e){
        e.preventDefault();
        // console.log(fetches.skill);

       const addedSkill = await fetch("http://localhost:3001/api/skills",{
            method:'POST',
            headers:{
                'Content-type': 'Application/json'
            },
            body: JSON.stringify({skill:fetches.skill,level: fetches.level} )
            // body: JSON.stringify(typeof fetches.skill === 'string' ? JSON.parse(fetches.skill) : fetches.skill)

        })
// 
        // .then(res => res.json());

        try{
            // console.log({skill:fetches.skill,level: fetches.level})

            const data = await addedSkill.json();
            setFetches((prev)=> ({
                ...prev,
                skill: data.skill,
                level: data.level
            }));
        }catch (err) {
            console.log(err);
          }
        
        // setFetches(prev => ({
        //     ...prev,
        //     addedSkill
        // }))
        // .then(data =>setFetches(prev => ({
        //     ...prev,
        //     data
        // })) ).catch(err=>console.log(err))
    }
    


    useEffect(()=>{
        function fetchAPI(){
            fetch("http://localhost:3001/api/skills",{
                method:'GET',
                headers:{
                    'Content-type': 'Application/json'
                },
                // body: JSON.stringify(fetches)
            })
            .then(res => res.json())
            .then(data =>setFetches(prev => ({
                ...prev,
                data
            })) )
            // .then(data => setFetches(data))
            
            .catch(err=>console.log(err))
        }
        fetchAPI()
    }, [])
    // console.log(fetches)
    // const fetchAPI =() => {
// console.log(fetches.skill)
    // }
  return (
    <div>
        {/* <button >Fetch</button> */}
        <form onSubmit={handleSubmit} >
            <label>Skill
                <input name="skill" value={fetches.skill} onChange={handleChange}  />
            </label>
            <label>Level
                <input name="level" value={fetches.level} onChange={handleChange}  />
            </label>
            <button type="submit">Submit</button>

        </form>
        
        {
        fetches.data ?   fetches.data.map((item, id) => (
            <>
                <p>Created At: {item.createdAt}</p>
          <p>Updated At: {item.updatedAt}</p>
          <p>Skill: {item.skill.join(', ')}</p>
          <p>Level: {item.level.join(', ')}</p>
            </>
        ))   : console.log("a7a") } 
    </div>
  ) 
}

export default FullStack;