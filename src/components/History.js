import React, {useEffect, useState} from "react"

const History = () => {
  const savedTimes = useState([])

  useEffect( () => {
    console.log( savedTimes )
  })

  const savedItems = savedTimes[0].map( (item, index) =>
    <li key={index}>{item}</li>
  )

  return (
    <ul className="saves">
      {savedItems}
    </ul>
  )
}

export default History
