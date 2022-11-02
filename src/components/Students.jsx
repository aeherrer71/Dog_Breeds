
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

    <div>
      <h1>Dog Breeds</h1>
      {breeds.map((dogData) => (
        <div>
        <img src={dogData.img} alt="dog image"/> 
        </div>
      )
      )
      }
    </div>

  )
}

export default Students