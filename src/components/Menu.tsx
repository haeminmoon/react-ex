import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">
            <i></i>
            <p>일정</p>
          </Link>
        </li>
        <li>
          <Link to="/live">
            <i></i>
            <p>라이브</p>
          </Link>
        </li>
        <li>
          <Link to="/rank">
            <i></i>
            <p>랭킹</p>
          </Link>
        </li>
        <li>
          <Link to="/my">
            <i></i>
            <p>마이페이지</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
