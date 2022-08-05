import React, { Component } from 'react'
import vres from '../f_image/vres.jpg'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Experiences</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduate Software Engineer at Shell Energy Australia <span>July 2022-present</span></h2>
                        <p>I recently have joined the Shell Energy as an Undergraduate Software Engineer, which is responsible for software engineering, web development, test automation, data engineering and DevOps and cloud infrastructure.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Vacation Research Experience Scheme(VRES) at QUT <span>Nov 2021 - Feb 2022</span></h2>
                        <h5>Research Topic: Retinal Vessel Image Segmentation Analysis based on Neural Networks</h5>
                        <p>Skillsets: Python Scikit-Learn, Matplotlib, Panda, Numpy, Scikit-image</p>
                        <p>This research project consists of two parts. The first part is to create a model that develops advanced image processing methods, artificial intelligence-based algorithms and data fusion methods to detect, segment, and classify retinal arteries and veins from multimodal retinal images.
                        The second part is to evaluate the effectiveness of the model on different real-world image modalities.</p> 
                        <img className='vresPoster' src={vres} alt="VRES poster" width={680} height={500}/>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Student Success Guide at QUT<span>Nov 2021 - June 2022</span></h2>
                        <p>Offer learning assistance through outbound calls and answer emails to students.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>STIMulate Peer Learning Facilitator <span>Mar 2022 - June 2022</span></h2>
                        <p>STIMulate is a group of volunteer students committed to students' success in maths, science and information technology across QUT. <br />My role is about providing support for students with their IT and math unit contents and the assignment requirements.</p> 
                      </div>
                    </div>
                  </article>
                  
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
