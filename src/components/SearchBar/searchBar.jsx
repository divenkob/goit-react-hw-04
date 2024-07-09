import css from './searchBar.module.css';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { IoSearchSharp } from 'react-icons/io5';

export default function SearchBar({ onSubmit }) {
  const inputRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formInput = inputRef.current.value;
    if (formInput.trim() === "") {
      toast("Please fill in the search field", { position: "top-right" });
      return;
    }
    onSubmit(formInput);
    event.target.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.formInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          ref={inputRef}
        />
        <button className={css.formButton} type="submit">
          <IoSearchSharp />
        </button>
        <Toaster />
      </form>
    </header>
  );
}