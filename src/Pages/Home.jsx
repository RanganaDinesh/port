import React from 'react'
import profile from '../pic.jpg'
import './Home.css'
import Fade from 'react-reveal/Fade';
import TypeWriter from '../Pages/Font/Textanimation'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';



const typeWriter = ["FRONT-END DEVELOPER","WEB DEVELOPER", "MERN STACK DEVELOPER", "REACTJS DEVELOPER"];
const Home = () => {
  const pdfUrl = 'https://github.com/RanganaDinesh/Blog-Project/raw/main/src/Pages/dineshcv.pdf';

 
    return (
       <>
        <div id='section-container'>
            
            {/* left -section */}
           
            <div className='container-text'>
            <Fade bottom>
                <div>
                <span>WELCOME TO MY WORLD</span>
                <h1>Hi,I’m Dinesh RANGANA  <br /> <TypeWriter data={typeWriter} /></h1>

                <p className='content-p' >I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript, and REACT.JS. I am currently improving my mobile app development skills by learning various new technologies.</p>
                </div>
            </Fade>
                <Fade bottom>
              <div>
                  <span>FIND WITH ME</span>
                        <div>
                            <div className='conatct-icons'>
                          
<a class="btn btn-primary" style={{backgroundColor:'#333333'}} href="https://github.com/RanganaDinesh" role="button"
  ><i class="fab fa-github"></i
></a>


<a class="btn btn-primary"  style={{backgroundColor: '#55acee'}} href="https://github.com/RanganaDinesh" role="button"
  ><i class="fab fa-twitter"></i
></a>


<a class="btn btn-primary"  style={{backgroundColor:'#dd4b39'}} href="https://www.linkedin.com/feed/" role="button"
  ><i class="fab fa-google"></i
></a>


<a class="btn btn-primary"  style={{backgroundColor: '#ac2bac'}} href="https://www.linkedin.com/feed/" role="button"
  ><i class="fab fa-instagram"></i
></a>


<a class="btn btn-primary"  style={{backgroundColor: '#0082ca'}} href="https://www.linkedin.com/feed/" role="button"
  ><i class="fab fa-linkedin-in"></i
></a>

                            
                            </div>
                            <span>Download CV &nbsp; </span>
                       <a href={pdfUrl}   download>     <MDBBtn floating tag='a'>
      <MDBIcon fas icon='download' />
    </MDBBtn></a>
                      
                  </div>
                        </div>
                        </Fade>
              
                </div>
                {/* right-section */}
                <div>
                <Fade bottom>
              <div className='frame'>
                        <img src={profile} alt="" className='profile-pic' /> <br />
                       
                        <div className='profile-pic1'></div>
                       
                      
                    </div>
                    <h1 className='dinu'>Dinesh </h1>
                    <div className='conatct-icons  hideicons' >
                                        
<a class="btn btn-primary" style={{backgroundColor:'#333333'}} href="https://github.com/RanganaDinesh" role="button"
  ><i class="fab fa-github"></i
></a>


<a class="btn btn-primary"  style={{backgroundColor: '#55acee'}} href="https://github.com/RanganaDinesh" role="button"
  ><i class="fab fa-twitter"></i
></a>


<a class="btn btn-primary"  style={{backgroundColor:'#dd4b39'}} href="https://www.linkedin.com/feed/" role="button"
  ><i class="fab fa-google"></i
></a>


<a class="btn btn-primary"  style={{backgroundColor: '#ac2bac'}} href="https://www.linkedin.com/feed/" role="button"
  ><i class="fab fa-instagram"></i
></a>


<a class="btn btn-primary"  style={{backgroundColor: '#0082ca'}} href="https://www.linkedin.com/feed/" role="button"
  ><i class="fab fa-linkedin-in"></i
></a>

                        </div>
                        </Fade>
                </div>
               
          
      
            </div>
            </>        
  )
}

export default Home

