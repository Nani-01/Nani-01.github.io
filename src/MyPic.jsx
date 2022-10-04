import React from 'react';
import Me from './images/Me.jpeg'; // Tell Webpack this JS file uses this image

function MyPic() {
    // Import result is the URL of your image
    return <img id="about" src={Me} alt="My-profile" />;
}

export default MyPic;