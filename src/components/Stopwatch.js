import { FormatMs } from "../utils/FormatMs"

const Stopwatch = (props) => {
    const ms = props.ms ? props.ms : 0
    const formatted = FormatMs(ms)

    return formatted
}

export default Stopwatch