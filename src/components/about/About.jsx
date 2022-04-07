import React from "react";
import about from "../../assets/about.jpg";
import bgabout from "../../assets/bgabout.png";
import "./about.scss";

function About() {
     return (
          <>
               <div className="container-fluid">
                    <div className="row mb-5">
                         <div className="col-12">
                              <img
                                   src={bgabout}
                                   alt="Background"
                                   className="bg-about"
                              />
                         </div>
                    </div>
               </div>

               <div className="container">
                    <div className="card mb-3">
                         <div className="row g-0">
                              <div className="col-md-4">
                                   <img
                                        src={about}
                                        className="img-fluid rounded-start card-about"
                                        alt="..."
                                   />
                              </div>
                              <div className="col-md-8">
                                   <div className="card-body">
                                        <h3 className="card-title">
                                             ABOUT OUR MONO CHROME STORE
                                        </h3>
                                        <h5 className="card-title">
                                             We believe that every project
                                             existing in digital world is a
                                             result of an idea and every idea
                                             has a cause.
                                        </h5>
                                        <p className="card-text">
                                             For this reason, our each design
                                             serves an idea. Our strength in
                                             design is reflected by our name,
                                             our care for details. Our
                                             specialist won't be afraid to go
                                             extra miles just to approach near
                                             perfection. We don't require
                                             everything to be perfect, but we
                                             need them to be perfectly cared
                                             for.
                                        </p>
                                        <p className="card-text">
                                             That's a reason why we are willing
                                             to give contributions at best.Not a
                                             single detail is missed out under
                                             Billey's professional eyes. The
                                             amount of dedication and effort
                                             equals to the level of passion and
                                             determination. Get better, together
                                             as one. Proin eget tortor risus.
                                             Praesent sapien massa, convallis a
                                             pellentesque nec, egestas non nisi.
                                             Curabitur arcu erat, accumsan id
                                             imperdiet et, porttitor at sem.
                                             Quisque velit nisi, pretium ut
                                             lacinia in, elementum id enim.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default About;
