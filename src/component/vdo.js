import { DefaultPlayer as Video} from 'react-html5video';

import 'react-html5video/dist/styles.css';
import "../css/vdo.css";

import vdo from '../video/vdo.mp4';
import thum from '../images/vdo_img.jpg';
import { useEffect } from 'react';
function Vdo(){

    useEffect(() => {
        const videoElement = document.getElementById("v");
        if(videoElement) {
            videoElement.scrollIntoView({behavior: "smooth"});
        }
    }, [])
    return(
        <div>
            <div className="git_video">
                <h1 style={{fontSize: "40px"}}>Video</h1>
                <Video autoPlay loop poster={thum} id="v">
                    <source src={vdo} type='video/webm'></source>
                </Video>
                <hr style={{width: "90%", marginTop: "70px"}}></hr>
            </div>
        </div>
    )
}

export default Vdo;