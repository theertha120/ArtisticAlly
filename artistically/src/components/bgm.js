import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./bgm.css";

export default function BackgroundSlider() {
    const photos = [
        "dance.jpg",
        "theatre.jpg",
        "dancee.jpg",
        "mus.jpg",
        "wrtiting.jpg",
    ];
    const [timestamp, setTimestamp] = useState(0);

    useEffect(() => {
        const handle = setInterval(() => {
            setTimestamp((prevIndex) => (prevIndex + 1) % photos.length);
        }, 4000);

        return () => {
            clearInterval(handle);
        };
    }, [photos.length]);
    return (
        <div
            className="background_slider"
            style={{
                backgroundImage: `url(${photos[timestamp]})`,
                transition: "background-image 1s ease-in-out",
            }}
        ></div>
    );
}

ReactDOM.render(<BackgroundSlider />, document.getElementById("root"));
