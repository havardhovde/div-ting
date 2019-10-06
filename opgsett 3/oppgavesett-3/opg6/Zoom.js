import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import './Zoom.css'
import maplrg from "./img/maplrg.png"
import mapsml from "./img/mapsml.png"
 
class Zoom extends React.Component {
    render() {
        return(
            <div className="fluid">
                <div className="fluid__image-container">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Kart',
                            isFluidWidth: true,
                            src: mapsml,
                        },
                        largeImage: {
                            src: maplrg,
                            width: 1440,
                            height: 1192
                        }
                    }} />
                </div>
            </div>
        )
    }
}

export default Zoom