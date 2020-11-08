const Pad = (n, pad=2) => {
    return ('0' + n).slice(-Math.abs(pad))
}

export default Pad