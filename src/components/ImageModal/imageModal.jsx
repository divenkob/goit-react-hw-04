import css from './imageModal.module.css';
import Modal from 'react-modal';

Modal.setAppElement("#root");
export default function ImageModal({ image, isOpen, onRequestClose }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "100%",
      maxHeight: "100%",
      overflow: "hidden",
      border: "none",
      padding: 0,
      backgroundColor: "transparent",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={customStyles}
    >
      <img
        className={css.modalImg}
        src={image.urls.regular}
        alt={image.alt_description}
      />
      <ul className={css.modalList}>
        <li>{image.description}</li>
        <li>Creator: {image.user.name}</li>
        <li>Created at: {image.created_at}</li>
        <li>Like`s: {image.likes}</li>
      </ul>
    </Modal>
  );
}