import css from './loader.module.css'
import { Blocks } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className={css.loader}>
    <Blocks
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="Blocks"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      visible={true}
    />
    </div>
  );
}