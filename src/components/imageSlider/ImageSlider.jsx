import React, { useState, useRef } from "react";
import image from "../../Datas/Images";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function ImageSlider() {
  let [activeImage, setActiveImage] = useState([
    "1",
    "https://picsum.photos/id/0/5000/3333",
  ]);
  let activeRef = useRef(null);
  const handleImageClick = (clickedId, url) => {
    setActiveImage([clickedId, url]);
  };

  const prevTrackImage = (e) => {
    let currentIndex = image.imageData.findIndex(
      (img) => img.id === activeImage[0]
    );
    if (currentIndex === 0) {
      currentIndex = image.imageData.length - 1;
    } else {
      currentIndex--;
    }
    setActiveImage([
      image.imageData[currentIndex].id,
      image.imageData[currentIndex].download_url,
    ]);
    if (activeRef.current)
      activeRef.current.scrollIntoView({ behavoir: "smooth" });
  };

  const nextTrackImage = () => {
    let currentIndex = image.imageData.findIndex(
      (img) => img.id === activeImage[0]
    );
    if (currentIndex === image.imageData.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    setActiveImage([
      image.imageData[currentIndex].id,
      image.imageData[currentIndex].download_url,
    ]);
    if (activeRef.current)
      activeRef.current.scrollIntoView({ behavoir: "smooth" });
  };

  return (
    <div className="imageSlider">
      <h1>Image Slider</h1>
      <div className="imageContainer">
        <div className="imageScreen">
          <img src={activeImage[1]} width={700} alt="No image selected yet" />
        </div>
        <div className="icons">
          <FaArrowAltCircleLeft onClick={prevTrackImage} id="prev" size={30} />
          <FaArrowAltCircleRight onClick={nextTrackImage} id="next" size={30} />
        </div>
        <div className="imageList">
          {image.imageData.map((img) => {
            return (
              <span
                ref={img.id === activeImage[0] ? activeRef : null}
                className={
                  img.id === activeImage[0] ? "active images" : "images"
                }
                key={img.id}
              >
                <img
                  loading="lazy"
                  width={100}
                  src={img.download_url}
                  alt={"image by " + img.author}
                  onClick={() => handleImageClick(img.id, img.download_url)}
                />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
