import { useState } from "react";

interface IImageCarouselProps {
    images: string[];
}

const ImageCarousel = (props: IImageCarouselProps) => {

    const [imageIndex, setImageIndex] = useState<number>(0);

    const goForward = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % props.images.length);
    };

    const goBackward = () => {
        setImageIndex((prevIndex) => (prevIndex - 1 + props.images.length) % props.images.length);
    };

    return (
        <div className="flex">
            <button onClick={goBackward}>←</button>
            <img src={props.images[imageIndex]} alt={`Image ${imageIndex + 1}`} style={{ maxWidth: "500px", maxHeight: "500px" }} />
            <button onClick={goForward}>→</button>
        </div>
    );
};

export default ImageCarousel;
