import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import homeImg from "../assets/Home image.svg";
import femImg from '../assets/Fem.svg'
import lockImg from '../assets/lock.svg'
const ForgotPassword = () => {
  return (
    <>
    <main className="container">
        <section className="d-flex justify-content-center py-5 row ">
          <div className="bg-light  p-5 col-md-6 d-none d-lg-block ">
            <img src={homeImg} alt="" className="img-fluid w-100" />
          </div>

          <div className=" p-5 col-md-6 m-auto">
           <div className="text-center">
            <img src={femImg} alt="fem-img" className="" />
            <h2 className="text-center">Welcome to EM </h2>
            <p className="text-center">Enter email address to recover password</p>
            </div>
            <Form>
              <Form.Group className="mb-3 position-relative" controlId="formBasicEmail">
                {/* <Form.Label>Email </Form.Label> */}
                <Form.Control type="email" placeholder="Email" className='lock' />

                <div className='position-absolute top-0 translate-middle- p-2 '>
            <img src= {lockImg}alt="" className='mb-2' />
               </div>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 rounded-5">
                Recover Password
              </Button>
              
            </Form>
          </div>
        </section>
      </main>
    
    
    </>
  )
}

export default ForgotPassword