import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Contact.css'
export default function ContactUs() {
  return (
    <div className="contact">
      <div className="row no-gutters">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card-shadow" style={{ height: '90%' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.665253471492!2d44.844108878001705!3d41.7061616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d7521bd9ca3%3A0xff4c5e779f488746!2zNCwg4YOX4YOR4YOY4YOa4YOY4YOh4YOY!5e0!3m2!1ska!2sge!4v1660507999024!5m2!1ska!2sge" width="600" height="450" 
                  style={{ width: "70%", height: "100%", frameBorder: "0" }} allowFullScreen data-aos="fade-left" data-aos-duration="3000"></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-box ml-3">
                <h1 className="font-weight-light mt-2">Quick Contact</h1>
                <form className="mt-4" onSubmit={(e) => { e.preventDefault(); }}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="text" placeholder="name" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="email" placeholder="email address" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="text" placeholder="phone" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea className="form-control" rows="3" placeholder="message"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="section3">
              <div className="infodiv numerdiv" id="numerdiv" >
                <div className="imgdiv" id="respo">
                  <img src="https://cdn-icons-png.flaticon.com/512/953/953831.png" alt="Phone" style={{ width: '25px' }} />
                </div>
                <p className="info">+995598907795 <br /></p>
              </div>
              <div className="address infodiv" id="address">
                <div className="imgdiv" id="respo">
                  <img src="https://cdn-icons-png.flaticon.com/512/927/927667.png" alt="Location" style={{ width: '25px' }} />
                </div>
                <p className="info">Tbilisi, Georgia</p>
              </div>
              <div className="infodiv" id="lastinfo">
                <div className="imgdiv" id="respo">
                  <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Mail" style={{ width: '25px' }} />
                </div>
                <p className="info">madonnarevazashvili@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
