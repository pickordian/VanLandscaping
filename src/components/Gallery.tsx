
import { gallery_images } from "./interface";
function Gallery() {
  return (
    <section id="Gallery">
      <h2>Gallery</h2>
      <div>
        {gallery_images.map((image, index) => {
          return <img key={index} src={image.imgSrc} alt={image.alt} loading="lazy"/>;
        })}
      </div>
    </section>
  );
}

export default Gallery;
