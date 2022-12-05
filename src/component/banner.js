import React from 'react';
import Gator from './resource/image.png';
import { GlitchedImage } from 'react-image-glitch'

const Banner = () => {
  return (
    <div style={{height: "500px" }}>
      <GlitchedImage image={Gator} />
    </div>
  )
}

export default Banner;