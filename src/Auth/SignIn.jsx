import React from "react";
import homeImg from "../assets/Home image.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import femImg from "../assets/Fem.svg";
import { Link } from "react-router-dom";
import smsImg from "../assets/sms.svg";
import passImg from "../assets/lock.svg";
import "../style/SignIn.css";

const SignIn = () => {
  return (
    <>
      <main className="container">
        <section className="d-flex justify-content-center py-5 row">
          <div className="bg-light  p-5 col-md-6  d-none d-lg-block ">
            <img src={homeImg} alt="home-img" className="img-fluid w-100" />
          </div>

          <div className="p-5 col-md-6">
            <div className="text-center">
              <img src={femImg} alt="fem-img" className="" />
              <h2 className="text-center">Welcome back to EM </h2>
              <p className="text-center">Sign in to your account</p>
            </div>
            <Form>
              <Form.Group
                className="mb-3 position-relative"
                controlId="formBasicEmail"
              >
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="shift"
                />

                <div className="position-absolute top-0 translate-middle- p-2 ">
                  <img src={smsImg} alt="" className="mb-2" />
                </div>
              </Form.Group>

              <Form.Group
                className="mb-3 position-relative"
                controlId="formBasicPassword"
              >
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="pass"
                />

                <div className="position-absolute top-0 translate-middle- p-2 ">
                  <img src={passImg} alt="" className="mb-2" />
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="keep me signed in" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="w-100 rounded-5"
              >
                Sign In
              </Button>
              <h6>
                Don`t have an account{" "}
                <Link to={"../SignUp"}>
                  <span>Sign Up</span>
                </Link>{" "}
              </h6>
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

export default SignIn;
