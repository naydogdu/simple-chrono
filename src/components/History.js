import React, {useEffect, useState} from "react"

const History = () => {
  const key = "simple-chrono-history"
  const [times] = useState(
    JSON.parse(localStorage.getItem(key)) ?? []
  )

  useEffect( () => localStorage.setItem(key, JSON.stringify( times )), [times] )

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
