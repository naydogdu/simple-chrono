import React, {useEffect, useState} from "react"

const History = () => {
  const [times] = useState(
    JSON.parse(localStorage.getItem("times")) ?? []
  )

  useEffect( () => localStorage.setItem("times", JSON.stringify( times )), [times] )

  const savedItems = times.map( (item, index) =>
    <li key={index}>{item}</li>
  )

  return (
    <ul className="saves">
      {savedItems}
    </ul>
  )
}

export default History
