import React, { useState, useEffect } from 'react'
import axios from 'axios'  
import { Link, navigate } from '@reach/router'

const DetailComp = ({id}) => {

    
    const [detailState, setDetailState] = useState({})

    const adoptPet = (id) => {
        axios.delete('http://localhost:8000/api/pet/' + id)
            .then(res => 
                setDetailState(!detailState),
                navigate("/"))
    }

    useEffect(() =>{
        axios.get("http://localhost:8000/api/pet/" + id)
            .then(res => {
                setDetailState(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>PetSmart</h1>
            <Link to ="/">Back to Home</Link><br/><br/>
            <h3>Details about: {detailState.pet_name} </h3><br/>
            <button className = "btn btn-success" onClick ={(e) => {adoptPet(detailState._id)}}>Adopt</button><br/><br/>
            <p>Type: {detailState.pet_type}</p>
            <p>Description: {detailState.pet_description}</p>
            <p>Skill 1: {detailState.skill_1}</p>
            <p>Skill 2: {detailState.skill_2}</p>
            <p>Skill 3: {detailState.skill_3}</p>

            
        </div>
    )
}

export default DetailComp