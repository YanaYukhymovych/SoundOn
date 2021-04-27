import React from 'react';
import './Sidebar.scss'
import CreatePlaylist from '../../pages/CreatePlaylist/CreatePlaylist'
import Logo from '../../assets/img/sound-logo.png'
import { IoHomeOutline, IoSearchOutline, IoHeartOutline, IoAdd, IoCopyOutline} from 'react-icons/io5'



const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={Logo} alt="logo" width={'40px'} height={'40px'}/>
        <span>SoundOn</span>
      </div>

      <ul className="sidebar__navigation navigation">
        <li className="navigation__item">
          <IoHomeOutline />
          <span>Home</span>
        </li>
        <li className="navigation__item">
          <IoSearchOutline />
          <span>Search</span>
        </li>
        <li className="navigation__item">
          <IoCopyOutline />
          <span>Library</span>
        </li>
        <li className="navigation__item">
          <IoAdd />
          <span>Create playlist</span>
        </li>
        <li className="navigation__item">
          <IoHeartOutline />
          <span>Favorite</span>
        </li>
      </ul>

    <div className="sidebar__divider"> </div>
    </div>
  )
}

export default Sidebar;