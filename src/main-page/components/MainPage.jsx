export const MainPage = () => {
  return (
    <>
      <section id="promo" className="promo section offset-header">
        <div className="container text-center">
          <h2 className="title">
            Inn<span className="highlight">Sight</span>
          </h2>
          <p className="intro">Necesitas un hotel? Usa Inn Sight</p>

          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>

      <section id="about" className="about section">
        <div className="container">
          <h2 className="title text-center">Que es InnSight?</h2>
          <p className="intro text-center">
            Inn Sight es una empresa gestora de hoteles que ofrece una
            plataforma en línea donde los usuarios pueden buscar hoteles,
            eventos y servicios y reservar habitaciones de manera fácil y
            eficiente. 
            Inn Sight se enfoca en brindar una experiencia de usuario
            de calidad, ofreciendo una amplia variedad de opciones de
            alojamiento y servicios en diferentes ubicaciones, desde hoteles de
            lujo hasta opciones más económicas
          </p>
          <div className="row">
            <div className="item col-lg-4 col-md-6 col-12">
              <div className="icon-holder">
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className="content">
                <h3 className="sub-title">Designed for developers</h3>
                <p>
                  Outline a benefit here. Tell users what your plugin/software
                  can do for them. You can change the icon above to any of the
                  8000+{" "}
                </p>
              </div>
            </div>
            <div className="item col-lg-4 col-md-6 col-12">
              <div className="icon-holder">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="content">
                <h3 className="sub-title">Time saver</h3>
                <p>
                  Outline a benefit here. Tell users what your plugin/software
                  can do for them. You can change the icon above to any of the
                  8000+{" "}
                </p>
              </div>
            </div>
            <div className="item col-lg-4 col-md-6 col-12">
              <div className="icon-holder">
                <i className="fa-solid fa-crosshairs"></i>
              </div>
              <div className="content">
                <h3 className="sub-title">UX-centred</h3>
                <p>
                  Outline a benefit here. Tell users what your plugin/software
                  can do for them. You can change the icon above to any of the
                  8000+{" "}
                </p>
              </div>
            </div>
            <div className="item col-lg-4 col-md-6 col-12">
              <div className="icon-holder">
                <i className="fa-solid fa-mobile-alt"></i>
              </div>
              <div className="content">
                <h3 className="sub-title">Mobile-friendly</h3>
                <p>
                  Outline a benefit here. Tell users what your plugin/software
                  can do for them. You can change the icon above to any of the
                  8000+{" "}
                </p>
              </div>
            </div>
            <div className="item col-lg-4 col-md-6 col-12">
              <div className="icon-holder">
                <i className="fa-solid fa-code"></i>
              </div>
              <div className="content">
                <h3 className="sub-title">Easy to customise</h3>
                <p>
                  Outline a benefit here. Tell users what your plugin/software
                  can do for them. You can change the icon above to any of the
                  8000+{" "}
                </p>
              </div>
            </div>
            <div className="item col-lg-4 col-md-6 col-12">
              <div className="icon-holder">
                <i className="fa-solid fa-coffee"></i>
              </div>
              <div className="content">
                <h3 className="sub-title">SCSS source files included</h3>
                <p>
                  Outline a benefit here. Tell users what your plugin/software
                  can do for them. You can change the icon above to any of the
                  8000+{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* aqui son las cards */}
      <div className="rowww">
        <div className="example-2 card">
          <div className="wrapper">

            <div className="data">
              <div className="content">
                <span className="author">Jane Doe</span>
                <h1 className="title"><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
                <p className="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                <a href="#" className="button">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="example-2 card">
          <div className="wrapper">

            <div className="data">
              <div className="content">
                <span className="author">Jane Doe</span>
                <h1 className="title"><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
                <p className="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                <a href="#" className="button">Read more</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* termina cards */}


      {/* cards horizontales  */}
      <div className="container mt-4 mb-5">
        <div className="row">
          <div className="col-md-12">
            <h2 className="sec-title">EVENTOS</h2>
          </div>
          <div className="col-md-12">
            <div className="row rounded bg-white mt-4">
              <div className="col-md-3 pl-0 pr-0">
                <img src="https://th.bing.com/th/id/OIP.fzBLuNsfIZv3oJLplry-vAHaET?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="img-fluid w-100" />
              </div>
              <div className="col-md-9">
                <div className="card-block p-3">
                  <h4 className="card-title mt-0"><strong>Lorem ipsum dolor sit amet</strong></h4>
                  <p className="text-secondary">
                    <strong>1015 California Ave, Los Angeles CA 7:00 pm - 8:00 pm</strong>
                  </p>
                  <ul className="list-inline mt-auto">
                    <li className="list-inline-item">June 3rd, 2015 <span>|</span></li>
                    <li className="list-inline-item">0 Comments</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row rounded bg-white mt-4">
              <div className="col-md-3 pl-0 pr-0">
                <img src="https://th.bing.com/th/id/OIP.ls5XSx0UhrDn1i3zECFDKwHaE8?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="img-fluid w-100" />
              </div>
              <div className="col-md-9">
                <div className="card-block p-3">
                  <h4 className="card-title mt-0"><strong>Lorem ipsum dolor sit amet</strong></h4>
                  <p className="text-secondary">
                    <strong>1015 California Ave, Los Angeles CA 7:00 pm - 8:00 pm</strong>
                  </p>
                  <ul className="list-inline mt-auto">
                    <li className="list-inline-item">June 3rd, 2015 <span>|</span></li>
                    <li className="list-inline-item">0 Comments</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row rounded bg-white mt-4">
              <div className="col-md-3 pl-0 pr-0">
                <img src="https://www.eltiempo.com/files/image_640_428/uploads/2023/01/04/63b616fbedfa8.jpeg" className="img-fluid w-100" />
              </div>
              <div className="col-md-9">
                <div className="card-block p-3">
                  <h4 className="card-title mt-0"><strong>Lorem ipsum dolor sit amet</strong></h4>
                  <p className="text-secondary">
                    <strong>1015 California Ave, Los Angeles CA 7:00 pm - 8:00 pm</strong>
                  </p>
                  <ul className="list-inline mt-auto">
                    <li className="list-inline-item">June 3rd, 2015 <span>|</span></li>
                    <li className="list-inline-item">0 Comments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* terminas horizontales */}

    <div className="modal fade" id="md1">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <strong className="display-4"> Paris </strong>
                </div>
                <div className="modal-body">
                    <p>Hotel ABC</p>
                    <p>Rs 40000 onwards</p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" data-target=""> More hotels </button>
                    <button className="btn btn-success"> Book now </button>
                    <button className="btn btn-info"> Fav </button>
                    <button className="btn btn-danger close" data-dismiss="modal"> Close </button>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade" id="md2">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <strong className="display-4"> New York </strong>
                </div>
                <div className="modal-body">
                    <p>Hotel BAC</p>
                    <p>Rs 50000 onwards</p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" data-target=""> More hotels </button>
                    <button className="btn btn-success"> Book now </button>
                    <button className="btn btn-info"> Fav </button>
                    <button className="btn btn-danger close" data-dismiss="modal"> Close </button>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade" id="md3">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <strong className="display-4"> Singapore </strong>
                </div>
                <div className="modal-body">
                    <p>Hotel CAB</p>
                    <p>Rs 60000 onwards</p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" data-target=""> More hotels </button>
                    <button className="btn btn-success"> Book now </button>
                    <button className="btn btn-info"> Fav </button>
                    <button className="btn btn-danger close" data-dismiss="modal"> Close </button>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade" id="md4">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <strong className="display-4"> London </strong>
                </div>
                <div className="modal-body">
                    <p>Hotel CBA</p>
                    <p>Rs 70000 onwards</p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" data-target=""> More hotels </button>
                    <button className="btn btn-success"> Book now </button>
                    <button className="btn btn-info"> Fav </button>
                    <button className="btn btn-danger close" data-dismiss="modal"> Close </button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};
