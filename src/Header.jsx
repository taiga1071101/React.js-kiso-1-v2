import { Link } from 'react-router';
import './header.css';

const Header = () => {
  return (
    <header>
      <p className="app-title">React掲示板</p>
      <Link to="/threads/new" className="create-thread">新規スレッド作成</Link>
    </header>
  );
}

export default Header
