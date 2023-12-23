import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faNewspaper, faPlay } from '@fortawesome/free-solid-svg-icons'

import "../css/links.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Links(){

    return(
        <div className="git_link">
            <a href="https://drive.google.com/file/d/19Omxe7cyjATDUpNg4ZCTIgHSsPurVUVs/view?usp=drive_link" target="_blank">
                <button className="button"><FontAwesomeIcon icon={faNewspaper} size="lg" style={{color: "#fcfcfd", marginRight: "10px"}} />Paper</button>
            </a>
            <Link to="/vdo"><button className="button">
                <FontAwesomeIcon icon={faPlay} size="lg" style={{color: "#fcfcfd", marginRight: "10px"}} />
                Video
            </button></Link>
            <a href="https://github.com/SwasthikaR/SummerProject" target="_blank">
                <button className="button"><FontAwesomeIcon icon={faGithub} size="lg" style={{color: "#fcfcfd", marginRight: "10px"}} />Code</button>
            </a>
        </div>
    )
}

export default Links;