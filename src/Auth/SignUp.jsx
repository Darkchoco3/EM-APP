import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import homeImg from "../assets/Home image.svg";
import femImg from '../assets/Fem.svg'
import { Link } from "react-router-dom";
import smsImg from '../assets/sms.svg'
import  bareImg from '../assets/user.svg'
import passImg  from  '../assets/lock.svg'
import  lockImg  from '../assets/lock.svg'
import  '../style/SignUp.css'


const SignUp = () => {
  return (
    <>
      <main className="container">
        <section className="d-flex justify-content-center py-5 row">
          <div className="bg-light  p-5 col-md-6   d-none d-lg-block  ">
            <img src={homeImg} alt="" className="img-fluid w-100" />
          </div>

          <div className=" p-5 col-md-6">
           <div className="text-center">
            <img src={femImg} alt="fem-img" className="" />
            <h2 className="text-center">Welcome to EM </h2>
            <p className="text-center">Sign up for free</p>
            </div>
            <Form>
              <Form.Group className="mb-3 position-relative" controlId="formBasicEmail">
                {/* <Form.Label>Email </Form.Label> */}
                <Form.Control type="email" placeholder="Email" className="sms" />

                <div className='position-absolute top-0 translate-middle- p-2 '>
               <img src= {smsImg}alt="" className='mb-2 ' />
              </div>

              </Form.Group>
              <Form.Group className="mb-3 position-relative" controlId="formBasicUsername">
                {/* <Form.Label>Username</Form.Label> */}
                <Form.Control type="email" placeholder="Username" className="user" />

                <div className='position-absolute top-0 translate-middle- p-2 '>
               <img src= {bareImg}alt="" className='mb-2' />
              </div>

              </Form.Group>
              <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="password" placeholder="Password" className="pass" />

                <div className='position-absolute top-0 translate-middle- p-2 '>
               <img src= {passImg}alt="" className='mb-2' />
              </div>

              </Form.Group>
              <Form.Group className="mb-3 position-relative" controlId="formBasicEmail">
                {/* <Form.Label>Confirm Password </Form.Label> */}
                <Form.Control type="email" placeholder="confirm password" className="lock" />

                <div className='position-absolute top-0 translate-middle- p-2 '>
               <img src= {lockImg}alt="" className='mb-2' />
              </div>

              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <For.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Button variant="primary" type="submit" className="w-100 rounded-5">
                Sign Up
              </Button>
              .<h6>Already have an account <Link to={'../SignIn'}><span>Sign In</span></Link>  </h6>
              <p className="text-center">
                By signing up you accept our Privacy Policy, Terms & Licensing
                Agreement. Protected by reCAPTCHA. Google Privacy
                Policy & Terms apply
              </p>
            </Form>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignUp;
