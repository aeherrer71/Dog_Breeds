
import '../App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import React from 'react'

function Students() {

  const [breeds, setBreeds] = useState([])

  const getBreeds = async () => {
    try {
      const response = await axios.get('https://dogtopia-production.up.railway.app/breeds')
      return response.data
    } catch (error) {
      throw error;
    }
  }

  const fetchBreeds = async () => {

    const allBreeds = await getBreeds()
    setBreeds(allBreeds)


  }

  useEffect(() => {
    fetchBreeds()
  }, [])
console.log(breeds)
  return (

    <div className='dogCard'>
      {breeds.map((dogData) => (
        <>
          
         <div className='card'>
          <img src={dogData.img} alt="dog breed" key={dogData._id} /> 
           <div className="container">
            <h3> {dogData.breed}</h3>
            <p>Origin: {dogData.origin}</p>
            </div>
            </div>
      </>
      )
      )
      }
    </div>

  )
}

export default Students