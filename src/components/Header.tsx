import { Link } from 'react-router-dom';
import { shoppingOnAirLogo } from '../assets/images';
import { NotificationIcon, SearchIcon } from '~/assets/icons';

function Header() {
  return (
    <header className="w-full py-5 px-4 sticky top-0 border-b border-gray-200">
      <div className="flex justify-between items-center">
        <h1 className="w-40 mx-2">
          <Link to="/">
            <img src={shoppingOnAirLogo} alt="쇼핑온에어 로고 이미지" />
          </Link>
        </h1>
        <div className="grid grid-cols-2 gap-x-4">
          <button>
            <SearchIcon />
          </button>
          <button>
            <NotificationIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
