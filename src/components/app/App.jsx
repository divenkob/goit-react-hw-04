import { useState, useEffect } from 'react';
import fetchImages from '../../unplash-api';
import SearchBar from '../SearchBar/searchBar';
import ImageGallery from '../ImageGallery/imageGallery';
import Loader from '../Loader/loader';
import ErrorMessage from '../ErrorMessage/errorMessage';
import LoadMoreBtn from '../LoadMoreBtn/loadMoreBtn';
import ImageModal from '../ImageModal/imageModal';


export default function App() {
    const [image, setImage] = useState([]);
    const [query, setQuery] = useState('');
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(999);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    function onSubmit(newImage) {
      setImage([]);
      setQuery(newImage);
      setPage(1);
    }
    function handleClick() {
      setPage(page + 1);
    }
  
    function openModal(image) {
      setSelectedImage(image);
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
      setSelectedImage(null);
    }
  
    useEffect(() => {
      if (query.trim() === "") {
        return;
      }
  
      async function getImages() {
        try {
          setLoader(true);
          setError(false);
          const promise = await fetchImages(query, page);
          setTotalPages(3);
          setImage((prevArray) => {
            return [...prevArray, ...promise.results];
          });
          setTotalPages(promise.total_pages);
        } catch {
          setError(true);
        } finally {
          setLoader(false);
        }
      }
      getImages();
    }, [query, page]);
    return (
      <>
        <SearchBar onSubmit={onSubmit} />
        {error && <ErrorMessage />}
        {image.length !== 0 && (
          <ImageGallery imageArr={image} openModal={openModal} />
        )}
        {modalIsOpen && (
          <ImageModal
            image={selectedImage}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          />
        )}
        {loader && <Loader />}
        {image.length !== 0 && page < totalPages && (
          <LoadMoreBtn handleClick={handleClick} />
        )}
        {page >= totalPages && <p>This is the end!</p>}
      </>
    );
  }
