import { NavLink } from 'react-router-dom';
import { SvgIcon } from '@material-ui/core';
import { MenuData } from '~/constants/menuList';

import './index.scss';

function Menu() {
  return (
    <nav className="fixed bottom-0 w-full p-4 shadow-top">
      <ul className="grid grid-cols-4 items-end gap-2 text-center text-xs">
        {MenuData.map((menu, index) => (
          <li key={`menu-${index}`}>
            <NavLink to={menu.link} activeClassName="active-menu">
              <i>
                {menu.icon ? (
                  <SvgIcon component={menu.icon} />
                ) : (
                  <img className="w-8 m-auto grayscale filter" src={menu.img} alt="쇼핑온에어 메뉴 아이콘" />
                )}
              </i>
              <p>{menu.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
