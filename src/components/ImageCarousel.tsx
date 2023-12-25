import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { useState } from "react";

interface IImageCarouselProps {
    images: string[];
    mobile?: boolean;
}

const ImageCarousel = (props: IImageCarouselProps) => {

    const [imageIndex, setImageIndex] = useState<number>(0);

    const goForward = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % props.images.length);
    };

    const goBackward = () => {
        setImageIndex((prevIndex) => (prevIndex - 1 + props.images.length) % props.images.length);
    };

    const imageCarouselClass = `image-carousel${props.mobile ? ' mobile' : ''}`;

    return (
        <div className={imageCarouselClass}>
            <button className="arrow-button left" onClick={goBackward}>
                ←
            </button>
            <img
                className="carousel-image"
                src={props.images[imageIndex]}
                alt={`Image ${imageIndex + 1}`}
            />
            <button className="arrow-button right" onClick={goForward}>
                →
            </button>
        </div>
    );
};

export default ImageCarousel;
