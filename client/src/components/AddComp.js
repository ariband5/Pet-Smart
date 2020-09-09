import React, { useState } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

export default ({pet_name, pet_type, pet_description}) => {
    const [petState, setPetState] = useState("");
    const [petTypeState, setPetTypeState] = useState("");
    const [petDescription, setPetDescriptionState] = useState("")
    const [skill1, setSkill_1] = useState("")
    const [skill2, setSkill_2] = useState("")
    const [skill3, setSkill_3] = useState("")

    const [errors, setErrors] = useState([]); 


    const onSubmitHandler = e => {
        e.preventDefault();
        console.log("Submitted")
        axios.post('http://localhost:8000/api/pet', {
            pet_name: petState,
            pet_type: petTypeState,
            pet_description: petDescription,

            skill_1: skill1,
            skill_2: skill2,
            skill_3: skill3

        })
            .then(res=>
                navigate("/"))
            .catch(err=> {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);})
    }
    return (
        <div className = "container">
            <form onSubmit={onSubmitHandler} >
                {errors.map((err, index) => <p className="text-danger" key={index}>{err}</p>)}
                <h1>PetSmart</h1>
                <Link to ="/">Back to Home</Link><br/><br/>
                <h5>Know a pet needing a home?</h5><br/>
                <p>
                    <label>Pet Name</label><br/>
                    <input type="text" onChange = {(e)=>setPetState(e.target.value)}/>
                </p>
                <p>
                    <label>Pet Type</label><br/>
                    <input type="text" onChange ={(e)=>setPetTypeState(e.target.value)}/>
                </p>
                <p>
                    <label>Pet Description</label><br/>
                    <input type="text" onChange ={(e)=>setPetDescriptionState(e.target.value)}/>
                </p>
        

        
                <p>
                    <label>Skill 1</label><br/>
                    <input type="text" onChange ={(e)=>setSkill_1(e.target.value)}/>
                </p>
                <p>
                    <label>Skill 2</label><br/>
                    <input type="text" onChange ={(e)=>setSkill_2(e.target.value)}/>
                </p>
                <p>
                    <label>Skill 3</label><br/>
                    <input type="text" onChange ={(e)=>setSkill_3(e.target.value)}/>
                </p>
                <button className="btn btn-success" type="submit">Add Pet</button>
            </form>
        </div>
    )
}