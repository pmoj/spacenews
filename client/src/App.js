import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
      fetch("/members").then(
        res => res.json()
      ).then(
        data => {
          setData(data)
          console.log(data)
        }
      )
  },[])

  return (
    <div>
    </div>
  )
}

export default App