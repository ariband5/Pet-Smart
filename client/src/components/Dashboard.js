import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router'


const Dashboard = ({listState}, {setListState})=>{

    const [state, setState] = useState(false)
    

    // const deletePet = (id) => {
    //     axios.delete('http://localhost:8000/api/pet/' + id)
    //         .then(res => setState(!state))
    // }
    
    // const [listState, setListState] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pet")
        .then(res => {
            setListState(res.data)
        })
        .catch(err => console.log(err))
    },[state])
    
    return(
        <div>
            <div>
                <h1>PetSmart</h1>
                <p><Link to ="/pet/new">Add a pet to the shelter</Link></p>
            </div>

                <h3>These pets are looking for a good home</h3>
                
            <table className="table">
            <thead className="thead-light">
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {listState.map((pet, i)=> 
                    <tr key={i}>
                        <th scope="row">{pet.pet_name}</th>
                        <th scope="row">{pet.pet_type}</th>
                        <td>
                            <button className="btn btn-secondary" onClick ={() => navigate(`/pet/${pet._id}`)} >Details</button>
                            <button className="btn btn-primary ml-2" onClick={() => navigate(`/pet/${pet._id}/edit`)}>Edit</button>
                        </td>
                    </tr>
                )}

            </tbody>
            </table>
        </div>
    )
}
export default Dashboard