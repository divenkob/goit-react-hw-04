import css from './loadMoreBtn.module.css'

export default function LoadMoreBtn({ handleClick }) {
    return (
      <button className={css.button} onClick={handleClick}>
        Load more
      </button>
    );
  }