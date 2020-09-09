import React, {useState, useEffect} from 'react'
import Dashboard from '../components/Dashboard'
import AddComp from '../components/AddComp'
import DetailComp from '../components/DetailComp'
import axios from 'axios'
import { Router } from '@reach/router'

export default () => {
    const [ listState, setListState ] = useState([])
    const [petState, setPetState] = useState("");
    const [petTypeState, setPetTypeState] = useState("");
    const [petDescription, setPetDescriptionState] = useState("")
    const [skill_1, setSkill_1] = useState("")
    const [skill_2, setSkill_2] = useState("")
    const [skill_3, setSkill_3] = useState("")
    


    useEffect(()=>{
        axios.get("http://localhost:8000/api/pet")
            .then(res => setListState(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <Dashboard listState={listState} setListState={setListState} petState={petState} petTypeState={petTypeState} petDescription={petDescription} skill_1={skill_1} skill_2={skill_2} skill_3={skill_3} />

            
        </div>
    )
}