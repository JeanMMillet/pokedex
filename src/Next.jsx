function Next(props) {
    const { index, setter, next } = props
    const handleClickNext = () => {
        setter(index + 1)
    }

    return <button id='next' disabled={!next} onClick={handleClickNext}>Suivant</button>

}

export default Next;