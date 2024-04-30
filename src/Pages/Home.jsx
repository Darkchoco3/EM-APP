import React from "react";
import Navbar from "../Layout/NavBar";
import "../style/Home.css";
import johnImg from "../assets/john small nav.svg";
import locationImg from "../assets/location.svg";
import bagImg from "../assets/ph_briefcase-light.svg";
import twitterImg from "../assets/_twitter.svg";
import linkedImg from "../assets/_linkedin.svg";
import photoImg from "../assets/gallery.svg";
import { Link } from "react-router-dom";
import { people } from "../db";
import loveImg from "../assets/heart.svg";
import commentImg from "../assets/messages-2.svg";
import shareImg from "../assets/send-2.svg";

const Home = () => {
  console.log(people);
  return (
    <>
      {/* john section */}

      <div className="parent container position-sticky">
        <div className="children">
          <main className=" row main-parent gap-2 pt-3">
            {/* first section */}
            
            <section className="rounded-2 col-lg-4  border john-main">
              {/* john img */}
              <div className="d-flex align-items-center gap-2">
                <img src={johnImg} alt="john-img" />
                <div className="d-flex flex-column ">
                  <span className="">John Doe</span>
                  <span className="">0 friends</span>
                </div>
              </div>

              <hr />

              {/* work section */}
              <div>
                <h4>Bio</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum impedit quis rerum inventore distinctio ad quos, quam
                  voluptate iusto! Illum nisi vel quas sit pariatur.
                </p>
              </div>
              <hr />
              {/* work bio */}
              <div>
                <h4>Info</h4>
                <div className="d-flex align-items-center gap-2">
                  <img src={locationImg} alt="bag-img" /> <span>Location</span>
                </div>
                <div className="d-flex align-items-center mt-2 gap-2">
                  <img src={bagImg} alt="" /> <span>Realtor</span>
                </div>
              </div>
              <hr />

              {/* media bio */}
              <div>
                <h4>Socials</h4>
                <div className="d-flex align-items-center gap-2">
                  <img src={twitterImg} alt="" />
                  <span>Twitter</span>
                </div>
                <div className="d-flex align-items-center mt-2 gap-2">
                  <img src={linkedImg} alt="" />
                  <span>LinkedIn</span>
                </div>
              </div>
              
            </section>
            {/* second section */}
            <section className="col-lg">
              <div className="p-2 post-section rounded-2 border">
                <div className="d-flex gap-2 align-items-center">
                  <img src={johnImg} alt="" />
                  <input
                    type="text"
                    className="rounded-pill p5-3 post-input w-100"
                    placeholder="What do you want to ask or share"
                  />
                </div>

                {/* img */}
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <div className="d-flex gap-2 align-items-center">
                    <img src={photoImg} alt="" />
                    <span>Image</span>
                  </div>

                  <button className="btn btn-sm  btn-primary text-light px-4 rounded-pill">
                    {" "}
                    post
                  </button>
                </div>
              </div>

              <div className="my-5">
                {people.map((person) => {
                  const { id, name, time, post, profileImg, postImg, follow } =
                    person;
                  return (
                    <div key={id} className="p-2 mb-3 rounded-2 scroll-page">
                      {/* top div */}
                      <div className="d-flex justify-content-between align-items-center ">
                        {/* img and time */}
                        <div className="d-flex gap-2 align-items-center">
                          <img src={profileImg} alt="" className="" />
                          <span className="d-flex flex-column justify-content-center ">
                            
                            <Link to={"../FriendProfile"}>
                            <h5 className="pt-3">{name}</h5>
                            </Link>
                            <p>{time}</p>
                          </span>
                        </div>

                        {/* btn-div */}
                        <div>
                          <button className="btn btn-white btn-sm rounded-pill border px-4">
                            {follow}
                          </button>
                        </div>
                      </div>

                      {/* post */}
                      <p>{post}</p>

                      {/* post-img */}
                      <img src={postImg} className="w-100" alt="" />

                      {/* reactions */}
                      <main className="d-flex pt-2 justify-content-between align-items-center">
                        {/* like and comment */}

                        <div className="d-flex gap-2">
                          <img src={loveImg} alt="" role="button" />
                          <img src={commentImg} alt="" role="button" />
                        </div>

                        {/* share */}
                        <div>
                          <img src={shareImg} alt="" role="button" />
                        </div>
                      </main>
                    </div>
                  );
                })}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
