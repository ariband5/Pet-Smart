import React, {useEffect, useState} from 'react'
import {Link, navigate} from "@reach/router"
import axios from 'axios'


const EditComponent = ({id}) =>{

    const [detailState, setDetailState] = useState({

    })

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pet/'+id)
            .then(res => {
                setDetailState(res.data)
            })
            .catch(err => console.log(err))
    },[])

    const changeHandler = e => {
        setDetailState({
            ...detailState,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put("http://localhost:8000/api/pet/"+id, detailState)
            .then(res => {
                console.log("NEW OBJECT CAME BACK: ",res)
                navigate("/")
            })
            .catch(err => console.log(err))
    }



    return(
        <div>
            <h1>PetSmart</h1>
            <Link to ="/">Back to Home</Link><br/><br/>
            <div>
                <form onSubmit={submitHandler}>
                    <p>
                        <label>Name</label><br/>
                        <input type="text" name="pet_name" value={detailState.pet_name} onChange={changeHandler} />
                    </p>
                    <p>
                        <label>Type</label><br/>
                        <input type="text" name="pet_type" value={detailState.pet_type} onChange={changeHandler} />
                    </p>
                    <p>
                        <label>Description</label><br/>
                        <input type="text" name="pet_description" value={detailState.pet_description} onChange={changeHandler} />
                    </p>
                    <p>
                        <label>Skill 1</label><br/>
                        <input type="text" name="skill_1" value={detailState.skill_1} onChange={changeHandler} />
                    </p>
                    <p>
                        <label>Skill 2</label><br/>
                        <input type="text" name="skill_2" value={detailState.skill_2} onChange={changeHandler} />
                    </p>
                    <p>
                        <label>Skill 3</label><br/>
                        <input type="text" name="skill_3" value={detailState.skill_3} onChange={changeHandler} />
                    </p>
                    <button type="submit" className="btn btn-primary">Edit</button>
                </form>
            </div>
        </div>
    )
}
export default EditComponent;