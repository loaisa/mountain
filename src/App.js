
import './styles/App.css';
import Parallax from "./components/Parallax";
import ParallaxSlider from "./components/ParallaxSlider";
import Form from "./components/Form";
import ImageCollage from "./components/ImageCollage";
import SideBar from "./components/SideBar";


function App() {

    return (
        <div className="App">
            <SideBar/>
            <Parallax/>
            <ParallaxSlider/>
            <ImageCollage/>
            <Form/>
        </div>
    );
}

export default App;
