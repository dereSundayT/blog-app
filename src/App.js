import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import NavLink from "./components/NavLink";

import {Test} from "./components/Test";

function App() {
  return (
<>
    <NavBar  />
  <NavLink title={'Home'} navLink={'b'}/>
  <NavLink title={'About Us'} navLink={'bla'}/>
  <Test/>

</>


  );
}

export default App;
