import ReactStopwatch from "react-stopwatch"
import React from "react";
import Pad from "../utils/Pad";

const Stopwatch = (props) => (
    <ReactStopwatch
        seconds={props.times && props.times.seconds ? props.times.seconds : 0}
        minutes={props.times && props.times.minutes ? props.times.minutes : 0}
        hours={props.times && props.times.hours ? props.times.hours : 0}
        limit="10:00:00"
        autoStart={props.running}
        onChange={({ hours, minutes, seconds }) => {
            console.log('changed')
        }}
        onCallback={() => console.log('Stopped')}
        render={({ formatted, hours, minutes, seconds }) => {
            if( !props.running ) {
                return (
                    <>
                        { Pad(0) }:{ Pad(0) }:{ Pad(0) }
                    </>
                )
            }
            return (
                <>
                    { Pad(hours) }:{ Pad(minutes) }:{ Pad(seconds) }
                </>
            )
        }}
    />
)

export default Stopwatch