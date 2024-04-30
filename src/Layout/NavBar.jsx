import homeImg from '../assets/home.svg';
import communityImg from '../assets/community.svg'
import profileImg from '../assets/john small nav.svg';
import searchImg from '../assets/search-normal.svg'
import logoImg from '../assets/Fem.svg';
import NavBag from '../Components/NavBag';
import '../style/NavBar.css';
import { GoChevronDown } from 'react-icons/go';
import { GoChevronUp } from 'react-icons/go';

import { useState } from 'react';
import { Outlet,Link } from 'react-router-dom';



const Navbar = () => {
  const [bagShow, SetBagShow] = useState(false);
  function handleDrop() {
    !bagShow ? SetBagShow(true) : SetBagShow(false);
  }
  return (
    <>
      <main className='d-flex justify-content-between align-items-center container nav-container'>
        {/* search section */}
        <section className='d-flex gap-3 align-items-center search-div'>
          <div className='logo-div d-none d-lg-block'>
            <img src={logoImg} alt='' className='logo-img ' />
          </div>
          <div className='position-relative'>
            <input
              type='text'
              className='rounded-pill ps-5 search-input search-box'
              placeholder='search'
            />
            <img
              src={searchImg}
              alt=''
              className='position-absolute img-fluid search-img'
            />
          </div>
        </section>

        {/* profile section */}
        <div className='d-none d-lg-block'>
          <section className='d-flex gap-3 align-items-center position-relative'>
            <Link to={"../"} className='text-decoration-none text-black'>
            
            <div className='d-flex flex-column align-items-center'>
              <img src={homeImg} alt='' />
              <span>Home</span>
            </div>
            </Link>
            <div className='d-flex flex-column align-items-center'>
              <img src={communityImg} alt='' />
              <span>Community</span>
            </div>
            <div className='d-flex flex-column align-items-center '>
              <img src={profileImg} alt='' />
              <span className='d-flex'>
                Me
                <span
                  className='d-none   d-lg-block'
                  role='button'
                  onClick={handleDrop}
                >
                  {' '}
                  {bagShow ? <GoChevronUp /> : <GoChevronDown />}
                </span>
              </span>
            </div>
            <div className='position-absolute nav-bag'>
              {bagShow && <NavBag />}
            </div>
          </section>
        </div>
      </main>
      <Outlet/>
    </>
  );
};

export default Navbar;