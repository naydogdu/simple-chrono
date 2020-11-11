import { Pad } from "./Pad"

export const FormatMs = (ms) => {
    let seconds = Math.floor(ms / 1000) % 60
    let minutes = Math.floor(ms / 1000 / 60) % 60
    let hours = Math.floor(ms / 1000 / 60 / 60)

    return `${Pad(hours)}:${Pad(minutes)}:${Pad(seconds)}.${Pad(ms,3)}`
}
