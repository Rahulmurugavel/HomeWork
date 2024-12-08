import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo1 from "../assets/logo1.png";
import myModule from "./Entrance.module.css"
import whatsapp from "../assets/wicon.avif";
import facebook from "../assets/ficon.avif";
import call from "../assets/cicon.avif";
import instagram from "../assets/instaicon.avif";
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
         <header>
            <div className={myModule.sticky1}>
                <div  className={myModule.box}>
                    <img src={logo1} className={myModule.logo} alt="logo"></img>
                    <h1 className={myModule.title}>SRM JEWELLERS</h1>
                </div>
                
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                    <Link to="/" class="navbar-brand" style={{fontFamily:"sans-serif", fontSize:"20px"}}>Explore US</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <Link to="/home" class="nav-link active" aria-current="page" style={{fontFamily:"sans-serif", fontSize:"20px"}}>Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/about" class="nav-link active" aria-current="page" style={{fontFamily:"sans-serif", fontSize:"20px"}}>About</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/products" class="nav-link active" aria-current="page" style={{fontFamily:"sans-serif", fontSize:"20px"}}>Products</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" href="#" style={{fontFamily:"sans-serif", fontSize:"20px"}}>Contacts</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                    </nav>
                </div>
                <div className={myModule.position}>
                    <button type='button'>
                    <img src={call} alt="call" className={myModule.circle}></img>
                    </button>
                    <br></br>
                    <button type='button'>
                    <img src={whatsapp} alt="whatsapp" className={myModule.circle}></img>
                    </button>
                    <br></br>
                    <button>
                    <img src={facebook} alt="facebook" className={myModule.circle}></img>
                    </button>
                    <br></br>
                    <button type='button'>
                    <img src={instagram} alt="instagram" className={myModule.circle}></img>
                    </button>
                    <br></br>
                </div>
               
        </header>
        <nav>

        </nav>
        <footer class="container">
              <div class="row" style={{border:"1px solid skyblue", borderRadius:"15px",backgroundColor:"#090440"}}>
                <div class="col-lg-6">
                    <br></br>
                    <h3 style={{color:"white"}}>Download Our App</h3>
                    <br></br>
                    <button type="button" className='btn btn-info' style={{height:"65px",width:"150px"}}><ShopIcon></ShopIcon>Get It On Playstore</button><br></br>
                    <br></br>
                    <button type="button" className='btn btn-info' style={{height:"65px",width:"150px"}}><AppleIcon></AppleIcon>Get It On App Store</button>
                    <br></br>
                    <br></br>
                </div>
                <div class="col-lg-6">
                    <br></br>
                    <h3 style={{color:"white"}}>Contact Us</h3>
                    <br></br>
                    <h5 style={{color:"white"}}><LocationOnIcon></LocationOnIcon> No.53, Icon Savithri Ganesh Building, Habibullah Road, T. Nagar, Chennai – 17.</h5>
                    <br></br>
                    <h5 style={{color:"white"}}><EmailIcon></EmailIcon>srmjewellery@gmail.com</h5>
                    <br></br>
                    <h5 style={{color:"white"}}><PhoneIcon></PhoneIcon>+91-8098113064</h5>
                </div>
              </div>
        </footer>
    </div>
  )
}

export default About