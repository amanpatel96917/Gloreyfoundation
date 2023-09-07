// Css Start
import Carousel from "../Component/Carousele"
import "./Style/style.css"
// Css End
import { Link } from 'react-router-dom'

const Home = () => {
  const images = [
    { url: "./images/img1.jpg" },
    { url: "./images/img2.jpg" },
    { url: "./images/img3.jpg" },
  ];
  return (
    <>
      <Carousel images={images} />
      <div className="container">
        <div
          className="feature-29192-wrap d-md-flex"
          style={{ marginTop: "-20px", position: "relative", zIndex: 2 }}
        >
          <Link
            to="/"
            className="feature-29192 overlay-danger"
            style={{ backgroundImage: 'url("images/img_3_gray.jpg")' }}
          >
            <div className="text">
              <span className="meta">Livelihood</span>
              <h3 className="text-cursive text-white h1">Livelihood</h3>
            </div>
          </Link>
          <Link
            className="feature-29192 overlay-success"
            style={{ backgroundImage: 'url("images/img_2_gray.jpg")' }}
          >
            <div className="text">
              <span className="meta">Health</span>
              <h3 className="text-cursive text-white h1">Natural Remedies</h3>
            </div>
          </Link>
          <div
            className="feature-29192 overlay-warning"
            style={{ backgroundImage: 'url("images/img_1_gray.jpg")' }}
          >
            <div className="text">
              <span className="meta">School</span>
              <h3 className="text-cursive text-white h1">New Class Rooms</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row mb-5 align-items-st">
            <div className="col-md-4">
              <div className="heading-20219">
                <h2 className="title text-cursive">Latest Causes</h2>
              </div>
            </div>
            <div className="col-md-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ea
                reprehenderit rerum magnam, ipsum aperiam. Earum, expedita ratione.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="cause shadow-sm">
                <Link to='/' className="cause-link d-block">
                  <img src="./images/img_1.jpg"
                    alt="img" className="img-fluid" />
                  <div className="custom-progress-wrap">
                    <span className="caption">80% complete</span>
                    <div className="custom-progress-inner">
                      <div
                        className="custom-progress bg-danger"
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                </Link>
                <div className="px-3 pt-3 border-top-0 border border shadow-sm">
                  <span className="badge-danger py-1 small px-2 rounded mb-3 d-inline-block">
                    School
                  </span>
                  <h3 className="mb-4">
                    <Link to='/'>Alias Odit Ipsam Quas Unde Obcaecati</Link>
                  </h3>
                  <div className="border-top border-light border-bottom py-2 d-flex">
                    <div>Donated</div>
                    <div className="ml-auto">
                      <strong className="text-primary">$32,919</strong>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="d-flex align-items-center">
                      <img
                        src="images/person_1.jpg"
                        alt="img"
                        className="rounded-circle mr-3"
                        width={50}
                      />
                      <div className="">James Smith</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cause shadow-sm">
                <Link to="/" className="cause-link d-block">
                  <img src="images/img_2.jpg" alt="img" className="img-fluid" />
                  <div className="custom-progress-wrap">
                    <span className="caption">80% complete</span>
                    <div className="custom-progress-inner">
                      <div
                        className="custom-progress bg-primary"
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                </Link>
                <div className="px-3 pt-3 border-top-0 border border shadow-sm">
                  <span className="badge-primary py-1 small px-2 rounded mb-3 d-inline-block">
                    Health
                  </span>
                  <h3 className="mb-4">
                    <Link to='/'>Alias Odit Ipsam Quas Unde Obcaecati</Link>
                  </h3>
                  <div className="border-top border-light border-bottom py-2 d-flex">
                    <div>Donated</div>
                    <div className="ml-auto">
                      <strong className="text-primary">$32,919</strong>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="d-flex align-items-center">
                      <img
                        src="images/person_1.jpg"
                        alt="img"
                        className="rounded-circle mr-3"
                        width={50}
                      />
                      <div className="">James Smith</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cause shadow-sm">
                <Link to='/' className="cause-link d-block">
                  <img src="images/img_3.jpg" alt="img" className="img-fluid" />
                  <div className="custom-progress-wrap">
                    <span className="caption">80% complete</span>
                    <div className="custom-progress-inner">
                      <div
                        className="custom-progress bg-warning"
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                </Link>
                <div className="px-3 pt-3 border-top-0 border border ">
                  <span className="badge-warning py-1 small px-2 rounded mb-3 d-inline-block">
                    Livelihood
                  </span>
                  <h3 className="mb-4">
                    <Link to="/">Alias Odit Ipsam Quas Unde Obcaecati</Link>
                  </h3>
                  <div className="border-top border-light border-bottom py-2 d-flex">
                    <div>Donated</div>
                    <div className="ml-auto">
                      <strong className="text-primary">$32,919</strong>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="d-flex align-items-center">
                      <img
                        src="images/person_1.jpg"
                        alt="img"
                        className="rounded-circle mr-3"
                        width={50}
                      />
                      <div className="">James Smith</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-image overlay site-section"
        style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="row mb-5">
                <div className="col-md-7">
                  <div className="heading-20219">
                    <h2 className="title text-white mb-4 text-cursive">
                      Why Choose Us
                    </h2>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Deserunt ipsam repellendus voluptatum, totam magni iusto
                      numquam quo eos dolor perferendis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-5">
                  <div className="feature-29012 d-flex">
                    <div className="number mr-4">
                      <span>1</span>
                    </div>
                    <div>
                      <h3>Odit Reiciendis</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Nisi id sint explicabo odit reiciendis eaque accusamus
                        labore necessitatibus.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="feature-29012 d-flex">
                    <div className="number mr-4">
                      <span>2</span>
                    </div>
                    <div>
                      <h3>Nisi Sint Explicabo</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Nisi id sint explicabo odit reiciendis eaque accusamus
                        labore necessitatibus.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="feature-29012 d-flex">
                    <div className="number mr-4">
                      <span>3</span>
                    </div>
                    <div>
                      <h3>Accusamus Labore Necessitatibus</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Nisi id sint explicabo odit reiciendis eaque accusamus
                        labore necessitatibus.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="feature-29012 d-flex">
                    <div className="number mr-4">
                      <span>4</span>
                    </div>
                    <div>
                      <h3>Consectetur Dolor Elit</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Nisi id sint explicabo odit reiciendis eaque accusamus
                        labore necessitatibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="heading-20219 mb-5">
            <h2 className="title text-cursive">Latest Event</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="event-29191 mb-5">
                <Link to="/" className="d-block mb-3">
                  <img
                    src="images/img_1.jpg"
                    alt="img"
                    className="img-fluid rounded"
                  />
                </Link>
                <div className="px-3 d-flex">
                  <div className="bg-primary p-3 d-inline-block text-center rounded mr-4 date">
                    <span className="text-white h3 m-0 d-block">22</span>
                    <span className="text-white small">Oct 2019</span>
                  </div>
                  <div>
                    <div className="mb-3">
                      <span className="mr-3">
                        {" "}
                        <span className="icon-clock-o mr-2 text-muted" />
                        9:30 AM — 11:30 AM
                      </span>
                      <span>
                        {" "}
                        <span className="icon-room mr-2 text-muted" />
                        Ghana Africa
                      </span>
                    </div>
                    <h3>
                      <Link to="/">
                        Ratione Delectus Assumenda Rem Modi Quaerat Laborum
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="event-29191 mb-5">
                <Link to='/' className="d-block mb-3">
                  <img
                    src="images/img_2.jpg"
                    alt="img"
                    className="img-fluid rounded"
                  />
                </Link>
                <div className="px-3 d-flex">
                  <div className="bg-primary p-3 d-inline-block text-center rounded mr-4 date">
                    <span className="text-white h3 m-0 d-block">22</span>
                    <span className="text-white small">Oct 2019</span>
                  </div>
                  <div>
                    <div className="mb-3">
                      <span className="mr-3">
                        {" "}
                        <span className="icon-clock-o mr-2 text-muted" />
                        9:30 AM — 11:30 AM
                      </span>
                      <span>
                        {" "}
                        <span className="icon-room mr-2 text-muted" />
                        Ghana Africa
                      </span>
                    </div>
                    <h3>
                      <Link to="single.html">
                        Ratione Delectus Assumenda Rem Modi Quaerat Laborum
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="site-section bg-image overlay-primary"
        style={{ backgroundImage: 'url("images/img_1.jpg")' }}
      >
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-md-6">
              <img
                src="images/img_1.jpg"
                alt="img"
                className="img-fluid shadow"
              />
            </div>
            <div className="col-md-6">
              <div className="bg-white h-100 p-4 shadow">
                <h3 className="mb-4 text-cursive">Donate Now</h3>
                <form action="#">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Amount in dollar"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      defaultValue="Donate Now"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
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
              <Link to="/" className="btn btn-primary">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home
