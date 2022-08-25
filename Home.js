import React,{Component} from "react";
import './Home.css'

import IG_1 from './IG1.jpg'
import IG_2 from './IG2.jpg'
import IG_3 from './IG3.jpg'

import 'reactjs-popup/dist/index.css';

import { Link } from "react-router-dom";
export class Home extends Component{
    render(){
        
        {
            
            const list = document.querySelectorAll('.list');
        function activeLink(){
          list.forEach((item) =>
          item.classList.remove('active'));
          this.classList.add('active');
        }
        list.forEach((item) =>
        item.addEventListener('click',activeLink));
        }
        return (
            
            
            <div>
                    {/* <-- Navbar --> */}
                    <span className="logo-name">
          <h2><i>SuggestMe</i></h2>
        </span>
                    
                    <div class="navigation">
      <ul>
        <li class="list active">
          <a href="#">
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span class="text "><b>Home</b></span>
          </a>
        </li>
       
        <div class="indicator"></div>
      </ul>
                    </div>
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active ImageDiv">
            <img src={IG_2} class="d-block w-100" />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="text-white">Movies</h1>
             
            </div>
          </div>
          <div class="carousel-item">
            <img src={IG_3} class="d-block w-100" />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="text-White">Music</h1>
             
            </div>
          </div>
          <div class="carousel-item">
            <img src={IG_1} class="d-block w-100" />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="text-white">Game</h1>
             
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
                    </div>
                    <div class="center">
        <div class="outer button">
            
<Link to='/Login' ><button className="text-white " class='LoginBtn'><i>Login/SignUp</i></button></Link>
   
            <span></span>
            <span></span>
        </div>
      </div>
      
        <div class="Music-Button-Position">
          <div class="outer circle">
            <Link to='/songs'><button>Music</button></Link>
            <span></span>
            <span></span>
        </div>
        </div>
        <div class="Game-Button-Position">
        <div class="outer circle">
        <Link to='/games'><button>Games</button></Link>
            <span></span>
            <span></span>
        </div>
        </div>
        <div class="Movie-Button-Position">
        <div class="outer circle">
        <Link to='/movies'><button>Movies</button></Link>
            <span></span>
            <span></span>
        </div>
        </div>
        <footer class="footer-section">
          <div class="container">
              <div class="footer-cta pt-5 pb-5">
                  <div class="row">
                      <div class="col-xl-4 col-md-4 mb-30">
                          <div class="single-cta">
                              <i class="fas fa-map-marker-alt"></i>
                              <div class="cta-text">
                                  <h4>Find us</h4>
                                  <span>1010 Avenue, sw 54321, chandigarh</span>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-4 col-md-4 mb-30">
                          <div class="single-cta">
                              <i class="fas fa-phone"></i>
                              <div class="cta-text">
                                  <h4>Call us</h4>
                                  <span>9876543210 0</span>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-4 col-md-4 mb-30">
                          <div class="single-cta">
                              <i class="far fa-envelope-open"></i>
                              <div class="cta-text">
                                  <h4>Mail us</h4>
                                  <span>mail@info.com</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="footer-content pt-5 pb-5">
                  <div class="row">
                      <div class="col-xl-4 col-lg-4 mb-50">
                          <div class="footer-widget">
                              <div class="footer-logo">
                                  <a href="index.html"><img src="https://st2.depositphotos.com/40988106/42402/v/380/depositphotos_424021854-stock-illustration-calligraphic-feminine-floral-hand-drawn.jpg?forcejpeg=true" class="img-fluid" alt="logo"/></a>
                              </div>
                              <div class="footer-text">
                                  <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                  elit,Lorem ipsum dolor sit amet.</p>
                              </div>
                              <div class="footer-social-icon">
                                  <span>Follow us</span>
                                  <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                  <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                  <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                          <div class="footer-widget">
                              <div class="footer-widget-heading">
                                  <h3>Useful Links</h3>
                              </div>
                              <ul>
                                  <li><a href="#">Home</a></li>
                                  <li><a href="#">about</a></li>
                                  <li><a href="#">services</a></li>
                                  <li><a href="#">portfolio</a></li>
                                  <li><a href="#">Contact</a></li>
                                  <li><a href="#">About us</a></li>
                                  <li><a href="#">Our Services</a></li>
                                  <li><a href="#">Expert Team</a></li>
                                  <li><a href="#">Contact us</a></li>
                                  <li><a href="#">Latest News</a></li>
                              </ul>
                          </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                          <div class="footer-widget">
                              <div class="footer-widget-heading">
                                  <h3>Subscribe</h3>
                              </div>
                              <div class="footer-text mb-25">
                                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                              </div>
                              <div class="subscribe-form">
                                  <form action="#">
                                      <input type="text" placeholder="Email Address"/>
                                      <button><i class="fab fa-telegram-plane"></i></button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="copyright-area">
              <div class="container">
                  <div class="row">
                      <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                          <div class="copyright-text">
                              <p>Copyright &copy; 2018, All Right Reserved <a href="">Anup</a></p>
                          </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                          <div class="footer-menu">
                              <ul>
                                  <li><a href="#">Home</a></li>
                                  <li><a href="#">Terms</a></li>
                                  <li><a href="#">Privacy</a></li>
                                  <li><a href="#">Policy</a></li>
                                  <li><a href="#">Contact</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>

           </div>
            
        )
    }
}
export default Home