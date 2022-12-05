import React from 'react';
import { useState, useEffect, useRef } from 'react';
import icon from './resource/icon.svg';
import  './header.css';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeaderArea = styled.div`
    position: relative;
    width: 100%;
    height: 90px;
`;

const HeaderWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 90px;
    transition: 0.4s ease;
    background-color: #fff;
    &.hide {
        transform: translateY(-80px);
    }
`;

const throttle = function (callback, waitTime) {
  let timerId = null;
  return (e) => {
      if (timerId) return;
      timerId = setTimeout(() => {
          callback.call(this, e);
          timerId = null;
      }, waitTime);
  };
};


const Header = () => {
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);

  const handleScroll = () => {
      const { pageYOffset } = window;
      const deltaY = pageYOffset - pageY;
      const hide = pageYOffset !== 0 && deltaY >= 0;
      setHide(hide);
      setPageY(pageYOffset);
  };

  const throttleScroll = throttle(handleScroll, 50);

  useEffect(() => {
      documentRef.current.addEventListener('scroll', throttleScroll);
      return () => documentRef.current.removeEventListener('scroll', throttleScroll);
  }, [pageY]);

  return (
    <HeaderArea>
      <HeaderWrap className={hide && 'hide'}>
        
        <div class="header">
            <nav className="navbar">
              <ul class="navmake">
                <li class="item">
                <Link to="1" spy={true} smooth={true} >
                 <a class="menu_link" role="menuitem"><span class="item_wrap" />Service</a>
                </Link>
                </li>
                <li class="item">
                  <a href='/' role="menuitem"><img src={icon} alt="" weight="70" height="70"/></a>
                </li>
                <li class="item">
                  <Link to="2" spy={true} smooth={true}>
                  <a class="menu_link" role="menuitem"><span class="item_wrap"/>Tech</a>
                </Link>
                </li>
              </ul>
            </nav>
        </div>
       
      </HeaderWrap>
    </HeaderArea>
  
  );
}

export default Header;