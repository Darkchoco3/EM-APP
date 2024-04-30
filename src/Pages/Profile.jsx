import React, { useEffect } from "react";
import joePic from "../assets/john doe.svg";
import locationicon from "../assets/location.svg";
import Bag from "../assets/ph_briefcase-light.svg";
import Twitter from "../assets/_twitter.svg";
import LinkedIn from "../assets/_linkedin.svg";
import followingicon from "../assets/people.svg";
import follwersicon from "../assets/persons.svg"
import likeicon from "../assets/like.svg";
import "../style/FriendProfile.css";
// import NavBarMobile from "../layout/NavBarMobile";
import { ProfileData } from "../db";
import { Link } from "react-router-dom";
// import CommentModal from "../components/CommentModal";

const Profile = () => {
  return (
    <>
    <main className="container-fluid bg-light">
        <section className="container">
          <div className="row ">
            <div className="bg-white rounded mt-3 h-50 stick1 col-md-4 d-none d-md-block ">
              <div className="d-flex align-items-center mt-3 gap-3">
                <img
                  src={joePic}
                  alt="profile-image"
                  className="img-fluid rounded-circle profile1"
                />
                <div className="my-1">
                  <h3>John Doe</h3>
                  <p>0 Friends</p>
                </div>
              </div>
              <hr />
              <div>
                <h2>Bio</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Mi nec turpis
                  vulputate sed. Tellus quisque pharetra facilisi nisl nisi
                  consectetur. Sed in nisi convallis vitae tortor rhoncus.
                </p>
              </div>
              <hr />

              {/* activity */}
              <div className="d-flex flex-column gap-2">
                <h2>Activies</h2>
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-2">
                  <img src={follwersicon} alt="followersicon" className="center" />
                  <p>Followers</p>
                  </div>
                  <p>1000</p>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-2">
                  <img src={followingicon} alt="following-icon" className="center img-fluid"/>
                  <p>Following</p>
                  </div>
                  <p>1000</p>
                </div>
                <div className="d-flex justify-content-between ">
                  <div className="d-flex gap-2">
                  <img src={likeicon} alt="likes-icon"className="center" />
                  <p>Likes</p>
                  </div>
                  <p>1000</p>
                </div>
              </div>
              <hr />
              <div>
                <h2>Info</h2>
                <div>
                  <div className="d-flex align-items-center gap-2">
                    <img src={locationicon} alt="location-icon" className=""/>
                    <p className="pt-3">Lagos, Nigeria</p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <img src={Bag} alt="bag-icon" className="" />
                    <p className="pt-3">Realtor</p>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <h2>Socials</h2>
                <div className="mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <img src={Twitter} alt="twittwer-icon" />
                    <p className="pt-3">Twitter</p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <img src={LinkedIn} alt="linkedin-icon" />
                    <p className="pt-3">LinkedIn</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded mt-2 d-flex flex-wrap gap-2 col-md-8">
              {/* <div className="bg-white w-100">
                <div className="d-flex gap-3 p-3 ">
                  <img
                    src={friend}
                    alt="profile-pics"
                    className="img-fluid profile rounded-circle "
                  />
                  <input
                    type="text"
                    placeholder="What do you want to ask or share?"
                    className="bg-light rounded-5 w-100 shift"
                  />
                </div>
                <div className="d-flex justify-content-between p-3">
                  <img src={imgicon} role="button" alt="image-icon" />
                  <button className="btn button1 postbtn text-white  rounded-5">Post</button>
                </div>
              </div> */}
              {ProfileData.map((personal) => {
                const {
                  id,
                  title,
                  time,
                  description,
                  image,
                  profile,
                  icon,
                  icon2,
                  icon3,
                } = personal;
                return (
                  <div
                    key={id}
                    className="p-3 my-2 bg-white rounded d-flex flex-column"
                  >
                    <div className="d-md-flex justify-content-between align-items-center">
                      <div className="d-flex gap-2">
                        <img
                          src={profile}
                          alt="profile-image"
                          className="border imglg rounded-pill"
                        />
                        <div>
                        <Link to={"../FriendProfile"} className="text-decoration-none text-black"><h2 role="button">{title}</h2></Link>
                          
                          <h6>{time}</h6>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2">{description}</p>
                    <img src={image} alt="feed-image" className="img-fluid" />
                    <div role="button" className="d-flex justify-content-between mt-2">
                      <div  className="d-flex gap-2">
                      <img src={icon} alt="heart-icon" />
                      
                        <div>
                        {/* <CommentModal/> */}
                      <img src={icon2} alt="message-icon" />
                        </div>
                      </div>
                      <img src={icon3} alt="send-icon" />
                    </div>
                  </div>
                );
              })}
              <div>
                {/* <div className="d-flex flex-wrap gap-3">
            <Fetch/>
            </div> */}
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </>
  )
}

export default Profile