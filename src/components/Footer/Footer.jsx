import React from 'react'
import './Footer.css';
import logo from '../../Assets/logotemp.png';
function Footer() {
  return (
    <div>
        <footer>
            <div className="footer-section-1 px-3 py-2 pt-2">
                <p className='text-center '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem rem magnam vel aliquid dolor, officia fugit repellat quae deserunt nihil amet minima unde, incidunt molestiae quo, vero excepturi ex at?</p>
<hr />
            </div>
            <div className="footer-section-2 container">
                <div className="row ">
                    <div className="col-12 col-lg-4 col-box">
                        <img className='logo' src={logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi modi obcaecati vero, necessitatibus suscipit eum nam est id soluta?</p>

                    </div>
                    <div className="col-6 col-lg-2 col-box text-center">
                       <h5> Quick Links</h5>
                       <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Oppertuinity</a></li>
                        <li><a href="/">Community</a></li>
                        <li><a href="/">Saegis Campus</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">clubs</a></li>

                       
                       </ul>
                    </div>
                    <div className="col-6 col-lg-2 col-box text-center">
                    <h5> Clubs</h5>
                       <ul>
                        <li><a href="/">Cricket Club</a></li>
                        <li><a href="/">Football Club</a></li>
                        <li><a href="/">Basketball Club</a></li>
                        <li><a href="/">Vollayball Club</a></li>
                        <li><a href="/">Athletic Club</a></li>
                        

                       
                       </ul>

                    </div>
                    <div className="col-lg-4 ">
                    <h5> Contact</h5>
                       <ul>
                        <li><a href="/">Cricket Club</a></li>
                        <li><a href="/">Football Club</a></li>
                        <li><a href="/">Basketball Club</a></li>
                        <li><a href="/">Vollayball Club</a></li>
                        <li><a href="/">Athletic Club</a></li>
                        

                       
                       </ul>

                    </div>
                </div>
    
            </div>
            <div className='footer-section-3 text-center'>
            <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer