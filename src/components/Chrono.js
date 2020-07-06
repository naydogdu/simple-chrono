import React from "react"
import Container from "./../layout/Container"
import History from "./History"

const Go = () => {
  return (
    <Container add="font-sans">
      <button className="rounded-lg py-3 px-8 bg-blue-500 font-bold text-white hover:bg-blue-600">
        Start
      </button>
    </Container>
  )
}

const Chrono = () => {
  return (
    <Container add="font-mono py-8 text-4xl font-bold text-center space-y-8">
      <div className="inline-block bg-black text-white rounded-lg px-8 py-4">
        00:00:00.000
      </div>
      <Go />
      <History />
    </Container>
  )
}

export default Chrono;
