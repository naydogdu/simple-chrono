import React from "react"
import Container from "../layout/Container"

const Go = (props) => {
    return (
        <Container add="font-sans">
            <button onClick={props.onClick}
                    className="rounded-3xl py-4 px-12 bg-gradient-to-br from-indigo-500 to-indigo-600 font-bold text-white hover:bg-indigo-600"
            >
                {!props.running ? "Start" : "Stop"}
            </button>
        </Container>
    )
}

export default Go