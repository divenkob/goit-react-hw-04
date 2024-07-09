import css from './imageGallery.module.css'
import ImageCard from '../ImageCard/imageCard';

export default function ImageGallery({ imageArr, openModal }) {
    return (
      <ul className={css.list}>
        {imageArr.map((image) => {
          return (
            <li key={image.id}>
              <ImageCard image={image} openModal={openModal} />
            </li>
          );
        })}
      </ul>
    );
  }