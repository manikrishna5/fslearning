import { useState } from 'react'
import './App.css'
import Usercard from './Usercard.jsx'

function App() {
  const sampleUser = [
    {
      id : 1,
      name: "Sathwik Reddy",
      email: "sathwik.reddy@example.com",
      phone: "123-456-7890",
      age: 25,
      isActive: true

    },
    {
      id : 2,
      name: "Mani Krishna",
      email: "mani.krishna@example.com",
      phone: "123-456-9890",
      age: 21,
      isActive: true

    },
    {
      id : 3,
      name: "varshitha",
      email: "varshitha@example.com",
      phone: "123-456-7890",
      age: 25,
      isActive: true

    },
    {
      id : 4,
      name: "Saneed Reddy",
      email: "saneed.reddy@example.com",
      phone: "123-456-7890",
      age: 25,
      isActive: false

    },
    {
      id : 5,
      name: "Ratnakar Kota",
      email: "ratnakar.kota@example.com",
      phone: "123-456-7890",
      age: 25,
      isActive: false

    }

  ]
    

    return (
      <div>
        <h1>User Profiles</h1>
        {sampleUser.map((u) => (
        <Usercard key={u.id} user={u} />
      ))}
      </div>
    )
}

export default App;
