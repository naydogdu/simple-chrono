import React from "react"
import Container from "./../layout/Container"
import History from "./History"
import Go from "./Go"
import Stopwatch from "./Stopwatch"

class Master extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            running: true,
            times: {
                formatted: "00:00:00.000",
                hours: 0,
                minutes: 0,
                seconds: 0,
            }
        }
    }

    handleClick() {
        this.setState({ running: !this.state.running })
        console.log('states', this.state)
    }

    render() {
        const isRunning = this.state.running
        let timer
        if( isRunning ) {
            timer = <Stopwatch running={this.state.running} times={this.state.times} />
        } else {
            timer = <Stopwatch running={false} times={null} />
        }
        return (
            <Container add="font-mono py-8 text-4xl font-bold text-center space-y-8">
                <div className="tabular-nums inline-block bg-black text-white rounded-3xl px-12 py-8">
                    {timer}
                </div>
                <Go running={this.state.running} onClick={() => this.handleClick()} />
                <History />
            </Container>
        )
    }
}

export default Master
