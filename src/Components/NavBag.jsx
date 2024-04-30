import notifiImg from '../assets/notification.svg'
import logOutImg from '../assets/logout.svg';
import { Link } from 'react-router-dom';
import EditProfile from '../Auth/EditProfile';
import EditImg from '../assets/edit-2.svg'
const NavBag = () => {
  return (
    <>
      <section className='bg-white rounded-2 border p-3'>
        {/* Edit */}
        <div className='mb-4'>
          <div className='d-flex gap-2 align-items-center first-div justify-content-start'>
            <EditProfile />
            <img src={EditImg} alt="" />
            <span className='fw-lighter'>Edit Profile</span>
          </div>
          <hr />
        </div>

        {/* Notification */}
        <div className='mb-4'>
          <div className='d-flex gap-2 align-items-center first-div justify-content-start'>
            <Link to='#'>
              <img src={notifiImg} alt='' />
            </Link>
            <span className='fw-lighter'>Notifications</span>
          </div>
          <hr />
        </div>

        {/* Logout */}
        <div>
          <div className='d-flex gap-2 align-items-center first-div justify-content-start '>
            <Link to='../SignIn'>
              <img src={logOutImg} alt='' />
            </Link>
            <span className='fw-lighter'>Log Out</span>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};

export default NavBag;