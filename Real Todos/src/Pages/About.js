import React from 'react'
import { useContext } from 'react'
import NoteContext from '../Context/NoteContext'

function About() {
  const b = useContext(NoteContext);
  return (
    <div>
        <h1>
          my class number is {b.class}
        </h1>
    </div>
  )
}

export default About