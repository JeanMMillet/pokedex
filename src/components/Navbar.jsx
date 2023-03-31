import Next from "../Next";
import Previous from "../Previous";


function NavBar(props) {
    const { index, setter, list } = props

    return (
        <div id='navbar'>
            <Previous previous={index > 0 ? true : false} setter={setter} index={index} />
            <Next next={index < list.length - 1 ? true : false} setter={setter} index={index} />
        </div>


    )
}

export default NavBar;