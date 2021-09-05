import { shoppingOnAirLogo } from '../assets/images';

function Header() {
  return (
    <header>
      <div>
        <h1>
          <img src={shoppingOnAirLogo} alt="쇼핑온에어 로고 이미지" />
        </h1>
        <div>
          <button>서치</button>
          <button>알림</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
