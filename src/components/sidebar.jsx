import React, { Component } from 'react'
import fei from '../f_image/fei.JPG'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: `url(${fei})`}} />
              <h1 id="colorlib-logo"><a href="index.html">Fei Wu</a></h1>
              <span className="email"><i className="icon-mail"></i> feiw1005@gmail.com</span>
              <span className='location'><i className='icon-location4'></i>&nbsp;Brisbane   Australia</span>
              <br />
            </div>
            <br />
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Experiences</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/fei-wu-4226771bb/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/FayeWu1005" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  fwu &nbsp;&copy;2022
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
