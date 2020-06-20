import React from "react";
import Container from "./../layout/Container";

const Chrono = () => {
  return (
    <Container add="font-mono py-8 text-4xl font-bold text-center">
      <div className="inline-block bg-black text-white rounded-lg px-8 py-4">
        00:00:00.000
      </div>
    </Container>
  )
}

export default Chrono;