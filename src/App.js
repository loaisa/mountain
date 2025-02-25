import './styles/App.css';
import Parallax from "./components/Parallax";
import ParallaxSlider from "./components/ParallaxSlider";
import Form from "./components/Form";
import ImageCollage from "./components/ImageCollage";
import SideBar from "./components/SideBar";
import {useEffect, useState} from "react";


function App() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500)

    }, [loading])

    return (
        <div className="App">
            {loading ? <span className="loader"></span> :
                <>
                    <SideBar/>
                    <Parallax/>
                    <ParallaxSlider/>
                    <ImageCollage/>
                    <Form/>
                </>

            }
        </div>
    );
}

export default App;
