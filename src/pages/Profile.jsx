import "../assets/styles/css/Profile.css";
import Maskot from "../assets/images/illustrations/m_jempol_keren.png";
import Tomat from "../assets/images/illustrations/tomat.png";
import Cabai from "../assets/images/illustrations/cabai.png";
import Bayam from "../assets/images/illustrations/Bayam.png";
import DaunBawang from "../assets/images/illustrations/Daun Bawang.png";
import Brokoli from "../assets/images/illustrations/brokoli.png";
import Gender from "../assets/images/illustrations/gender-lk.png";
import Mudah from "../assets/images/illustrations/mudah.png";
import Sedang from "../assets/images/illustrations/sedang.png";
import Susah from "../assets/images/illustrations/susah.png";
import Master from "../assets/images/illustrations//master.png";
import Expert from "../assets/images/illustrations/expert.png";
import AddPlant from "./AddPlant";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




const Profile = () => {
  return (
    <div id="root" className="grayBg d-flex align-items-center justify-content-center" style={{ width: "78%", height: "105vh" }}>
      <div className="" id="main">
        <div id="atas">
          <section id="pengingat">
            <h3>
              Hai, <b>Zacky!</b>
            </h3>
            <div className="card card-pengingat">
              <div className="card-body">
                <h5 className="text-pengingat title fw-semibold">Capai Kemajuan Anda Hari Ini</h5>
                <p className="card-text text-pengingat">Total 1 dari 4 tugas selesai!</p>
                <button src="" className="text-pengingat rounded-3">Detail</button>
              </div>
              <div className="card-maskot m-0 p-2">
                <img className="maskot-img" src={Maskot} alt=""></img>
              </div>
            </div>
          </section>

          <section id="mulai">
            <div className="card-mulai">
              <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="true" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={Tomat} className="mulai-img rounded-4 d-block " alt="tomat"></img>
                  </div>
                  <div className="carousel-item">
                    <img src={Cabai} className="mulai-img rounded-4 -block " alt="cabai"></img>
                  </div>
                  <div className="carousel-item">
                    <img src={Bayam} className="mulai-img rounded-4 d-block " alt="semangka"></img>
                  </div>
                  <button className="carousel-control carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="card-tombol-mulai py-3">
              <button className="rounded-3"src={AddPlant} >Mulai Tanam</button>
            </div>
          </section>
        </div>

        <div id="bawah">
          <div className="container-bawah">
            <aside>
              <section className="profil">
                <div className="container-profil">
                  <div className="card-title-profil">
                    <h3 className="fw-semibold">Profil</h3>
                  </div>
                  <div className="card-body-profil">
                    <div className="card card-profil">
                      <div className="card-icon">
                        <a href=""><img className="justify-content-start" width="32" height="32" src="https://img.icons8.com/windows/32/FFFFFF/edit--v1.png" alt="edit--v1" /></a>
                        <h6 className="text-level text-light fw-semibold px-2 py-2 justify-content-end">LV. 1</h6>
                      </div>

                      <div className="card-img-gender justify-content-center">
                        <img className="img-gender" src={Gender} alt=""></img>
                      </div>
                    </div>

                    <div className="card-level">
                      <h5 className="fw-semibold">Zacky</h5>
                      <div className="card-heart">
                        <img className="icon-heart" width="50" height="50" src="https://img.icons8.com/ios-filled/50/FA5252/hearts.png" alt="hearts" />
                        <div className="progress-long-heart">
                          <div className="progress-short-heart"></div>
                        </div>
                      </div>
                      <div className="card-star">
                        <img className="icon-star" width="50" height="50" src="https://img.icons8.com/ios-filled/50/228BE6/filled-star.png" alt="filled-star" />
                        <div className="progress-long-star">
                          <div className="progress-short-star"></div>
                        </div>
                      </div>
                      <div className="card-coin">
                        <img className="icon-coins" width="50" height="50" src="https://img.icons8.com/ios-filled/50/fcb825/coins.png" alt="coins" />
                        <h5 className="text-coins fw-semibold ">9.999.999</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="lencana">
                <div className="card-title-lencana">
                  <h3 className="mt-4 fw-semibold">Lencana</h3>
                </div>
                <div className="card card-body-lencana shadow-lg">

                  <div className="card-body-img-lencana">
                    <img className="lencana-img" src={Mudah} alt=""></img>
                    <img className="lencana-img" src={Sedang} alt=""></img>
                    <img className="lencana-img" src={Susah} alt=""></img>
                    <img className="lencana-img-king" src={Expert} alt=""></img>
                    <img className="lencana-img-king" src={Master} alt=""></img>
                  </div>
                  <div className="card-body-text-lencana">
                    <p>Mudah</p>
                    <p>Sedang</p>
                    <p>Sulit</p>
                    <p>Expert</p>
                    <p>Master</p>
                  </div>

                </div>
                
                <div className="card-body"></div>
              </section>
            </aside>

            <div className="section-main">
              <section id="notif">
                <div className="card-title-notif">
                  <h3 className="justify-content-start">Pemberitahuan</h3>
                </div>
                <div className="card-body">
                  <div className="card notif">
                    <div className="konten">
                      <div className="container-notif">
                        <p>Hari ini</p>
                        <div className="card notif-body">
                          <div className="img">
                            <img className="img-sayur" src={Bayam} alt=""></img>
                          </div>
                          <div className="text">
                            <h6 className="fw-semibold">Jangan lupa untuk menyiram tanaman hari ini</h6>
                            <p>Bayam 1 Minggu</p>
                          </div>
                        </div>

                        <div className="card notif-body">
                          <div className="img">
                            <img className="img-sayur" src={DaunBawang} alt=""></img>
                          </div>
                          <div className="text">
                            <h6 className="fw-semibold">Jangan lupa untuk menyiram tanaman hari ini</h6>
                            <p>Daun Bawang 1 Minggu</p>
                          </div>
                        </div>

                        <p>Kemarin</p>
                        <div className="notif-list">
                          <div className=" card notif-body">
                            <div className="img">
                              <img className="img-sayur" src={Tomat} alt=""></img>
                            </div>
                            <div className="text">
                              <h6 className="fw-semibold">Jangan lupa untuk menyiram tanaman hari ini</h6>
                              <p>Tomat 1 Minggu</p>
                            </div>
                          </div>
                          <div className=" card notif-body">
                            <div className="img">
                              <img className="img-sayur" src={Cabai} alt=""></img>
                            </div>
                            <div className="text">
                              <h6 className="fw-semibold">Jangan lupa untuk menyiram tanaman hari ini</h6>
                              <p>Cabai 1 Minggu</p>
                            </div>
                          </div>
                          <div className=" card notif-body">
                            <div className="img">
                              <img className="img-sayur" src={Brokoli} alt=""></img>
                            </div>
                            <div className="text">
                              <h6 className="fw-semibold">Jangan lupa untuk menyiram tanaman hari ini</h6>
                              <p>Tomat 1 Minggu</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="progress-bar-container">
                        <div className="progress-bar"></div>
                        <div className="progress-bar-small "></div>
                      </div>
                    </div>
                  </div>
                  <div className="scroll scrollspy-example bg-light p-3 rounded-2" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex="0"></div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
