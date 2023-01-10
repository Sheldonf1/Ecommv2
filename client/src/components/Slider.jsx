import ImageSlider from "./ImageSlider";


const Slider = () => {
    const slides = [
        "public/image-1.jpg",
        "http://localhost:3000/image-2.jpg",
        "http://localhost:3000/image-3.jpg",
        "http://localhost:3000/image-4.jpg",
        "http://localhost:3000/image-5.jpg",
    ];
    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    };
    return (
        <div>

            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
        </div>
    );
};

export default Slider;