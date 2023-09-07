import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <div className="owl-carousel-wrapper">
        <div className="box-92819">
          <h1 className="text-white mb-3">Contact</h1>
          <p className="lead text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ab
            doloremque a quia laboriosam suscipit, iure illum perspiciatis!
          </p>
        </div>
        <div
          className="ftco-cover-1 overlay"
          style={{ backgroundImage: 'url("images/hero_3.jpg")' }}
        />
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5">
              <form action="#" method="post">
                <div className="form-group row">
                  <div className="col-md-6 mb-4 mb-lg-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <textarea
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Write your message."
                      cols={30}
                      rows={10}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 mr-auto">
                    <input
                      type="submit"
                      className="btn btn-block btn-primary text-white py-3 px-5 rounded-0"
                      defaultValue="Send Message"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 ml-auto">
              <div className="bg-white p-3 p-md-5">
                <h3 className="text-cursive mb-4">Contact Info</h3>
                <ul className="list-unstyled footer-link">
                  <li className="d-block mb-3">
                    <span className="d-block text-muted small text-uppercase font-weight-bold">
                      Address:
                    </span>
                    <span>34 Press complex, Indore, Madhay pradesh, India</span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-muted small text-uppercase font-weight-bold">
                      Phone:
                    </span>
                    <span>+91 9644697642</span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-muted small text-uppercase font-weight-bold">
                      Email:
                    </span>
                    <span>amanpatel96917@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="d-md-flex cta-20101 align-self-center bg-light p-5">
            <div className="">
              <h2 className="text-cursive">
                Helping the Homeless, Hungry, and Hurtings Children
              </h2>
            </div>
            <div className="ml-auto">
              <NavLink to="/" className="btn btn-primary">
                Donate Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Contact
