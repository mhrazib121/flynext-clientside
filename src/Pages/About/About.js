import React from 'react';
import './About.css'
import aboutBanner from '../../Images/banner-img1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach, faSearchDollar, faPlaneDeparture, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div>
            {/* About us */}
            <section className='d-lg-flex
         jusify-content-between container'>
                {/* Details  */}
                <div className='col-12 col-lg-8'>
                    <div className='d-lg-flex'>
                        <img className='img-design' src={aboutBanner} alt="" />
                        <div className='banner-details'>
                            <p>WE ARE BEST FOR AIRLINES & TRAVEL SINCE 1985 !</p>
                        </div>
                    </div>
                    <div className='my-4'>
                        <h1 className='mb-3'>HOW WE ARE BEST FOR AIRLINES & TRAVEL AGENCY !</h1>
                        <p>Dictumst voluptas qui placeat omnis repellendus, est assumenda dolores facilisis, nostra, inceptos. Ullam laudantium deserunt duis platea. Fermentum diam, perspiciatis cupidatat justo quam voluptate,
                            <br />
                            <br />
                            feugiat, quaerat. Delectus aute scelerisque blanditiis venenatis aperiam rem. Tempore porttitor orci eligendi velit vel scelerisque minus scelerisque? Dis! Aenean! Deleniti esse aperiam adipiscing, sapiente?
                            <br />
                            <br />
                            Ratione conubia incididunt nullam! Sodales, impedit, molestias consectetuer itaque magni ut neque, lobortis expedita corporis voluptatem natus praesent mollis quidem auctor curae, mattis laboris diamlorem iure nullam esse? Pariatur primis.</p>
                    </div>
                </div>
                {/* feature  */}
                <div className='col-12 col-lg-4 my-5 p-4'>
                    <div className='text-center m'>
                        <FontAwesomeIcon className='feature-icon' icon={faUmbrellaBeach} />
                        <h4>AFFORDABLE TOURS</h4>
                        <p className='mb-4'>Iure doloremque saepe? Ultrices mi aliquam dis tempore incididunt sint, cumque dis temp!</p>
                    </div>
                    <div className='text-center'>
                        <FontAwesomeIcon className='feature-icon' icon={faPaperPlane} />
                        <h4>ONLINE TICKET</h4>
                        <p className='mb-4'>Iure doloremque saepe? Ultrices mi aliquam dis tempore incididunt sint, cumque dis temp!</p>
                    </div>
                    <div className='text-center'>
                    <FontAwesomeIcon className='feature-icon' icon={faSearchDollar} />
                        <h4>BEST PRICCE</h4>
                        <p className='mb-4'>Iure doloremque saepe? Ultrices mi aliquam dis tempore incididunt sint, cumque dis temp!</p>
                    </div>
                    <div className='text-center'>
                    <FontAwesomeIcon className='feature-icon' icon={faPlaneDeparture} />
                        <h4>COMFOTABLE FLY</h4>
                        <p className='mb-4'>Iure doloremque saepe? Ultrices mi aliquam dis tempore incididunt sint, cumque dis temp!</p>
                    </div>
                </div>
            </section>

            {/* <!-- FAQ Section  --> */}
            <section className="container faq my-5">
                <h1 className="text-center my-5"> Frequently Asked <span className="tittle-color ">Questions</span> </h1>
                <div className="d-lg-flex  align-items-center">
                    <div className="d-lg-flex justify-content-center">
                        <div className="col-lg-7">
                            <img className="w-100" src="https://image.freepik.com/free-vector/travel-concept-with-landmarks_1057-4873.jpg" alt="" />
                        </div>
                    </div>
                    {/* <!-- Anccordian Start  --> */}
                    <div className="col-lg-5">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        Are you carry the all transportation and hotel booking cost ?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"> Yes, of Course. We will carry out your all transportation and hotel booking cost. </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                        How can I book your package?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"> It just a simple process. Just you have to register in our account then just pay for your booking through any kind international payment method. </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Have you any couple package?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Yes, We have couple package. If you are Husband and Wife, you are mostly welcome with us.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFour" aria-expanded="false"
                                        aria-controls="flush-collapseFour">
                                        Have you give some discount if we can join with you as a big team?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Yes, If You join with us at least 10 members, We will provide you 10% discount. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Anccordian End  --> */}
                </div>
            </section>
        </div>
    );
};

export default About;