import React from "react"
import Container from "./../layout/Container"
import History from "./History"
import Go from "./Go"
import Stopwatch from "./Stopwatch"

class Master extends React.Component {
    constructor(props) {
        super(props)
        this.delay = 2
        this.state = {
            running: false,
            ms: 0
        }
    }

    handleClick() {
        const running = this.state.running
        this.setState({ running: !this.state.running })
        !running ? this.run() : this.stop()
    }

    run() {
        this.timer = setInterval(
            () => this.tick(),
            this.delay
        )
    }

    stop() {
        clearInterval(this.timer)
    }

    tick() {
        const tick = this.state.ms + this.delay
        this.setState({ ms: tick })
    }

    render() {
        const isRunning = this.state.running
        const ms = this.state.ms

        return (
            <Container add="font-mono py-8 text-4xl font-bold text-center space-y-8">
                <div className="tabular-nums inline-block bg-black text-white rounded-3xl px-12 py-8">
                    <Stopwatch running={isRunning} ms={ms} />
                </div>
                <Go running={this.state.running} onClick={() => this.handleClick()} />
                <History />
            </Container>
        )
    }
}

export default Master
