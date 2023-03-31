function Previous(props) {
    const { index, setter, previous } = props
    const handleClickPrevious = () => {
        setter(index - 1)
    }

    return <button id='previous' disabled={!previous} onClick={handleClickPrevious}>Précédent</button>

}

export default Previous;