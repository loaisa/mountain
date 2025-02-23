import React, {useState} from 'react';
import '../styles/SideBar.css';
const SideBar = () => {
    const [activeSide, setActiveSide] = useState(false)

    return (
        <div className=''>

            <div id="mySidenav" className={activeSide ? "sidenav active" : "sidenav "}>
                <span className="closebtn" onClick={() => setActiveSide(!activeSide)}>&times;</span>
                <a href="#">Main</a>
                <a href="#Slider">Slider</a>
                <a href="#ImageCollage">Image</a>
                <a href="#Contact">Contact</a>
            </div>
            <span onClick={() => setActiveSide(!activeSide)} className='openBtn'></span>
        </div>
    );
};

export default SideBar;