// import NavLink from "./NavLink";
import {Tolu,NavLink} from "./";


const NavBar = () => {
    return (
        <ul>
            <li>
                <NavLink title={'Home'} navLink={'b'}/>
            </li>

            <li>
                <NavLink title={'About Us'} navLink={'bla'}/>
            </li>


            <li>
                <Tolu title={'ContactUs'}/>
            </li>


        </ul>
    )
}

export  default NavBar