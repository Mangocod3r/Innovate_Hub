import React from "react";
import { Link } from "react-router-dom";

import Card from "../components/card";
import "./home.css";
import { motion } from "framer-motion";

import { useState, useEffect, useRef } from "react";

import Typed from "typed.js";

const TypingText = (props) => {
  const elRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: props.words,
      typeSpeed: props.typingSpeed || 50,
      backSpeed: props.backSpeed || 30,
      startDelay: props.startDelay || 0,
      backDelay: props.backDelay || 500,
      loop: props.loop || false,
      loopCount: props.loopCount || Infinity,
      showCursor: props.showCursor || true,
      cursorChar: props.cursorChar || "|",
      contentType: props.contentType || "html",
      onComplete: (self) => {
        props.onComplete && props.onComplete(self);
      },
    };

    const typed = new Typed(elRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [props]);

  return <span className="home-text10" ref={elRef} />;
};

const Home = (props) => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Is this a Free or Paid service?",
      answer:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      isOpen: false,
    },
    {
      id: 2,
      question: "Do you have any connections?",
      answer:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      isOpen: false,
    },
    {
      id: 3,
      question: "Do you have an iOS or Android app?",
      answer:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      isOpen: false,
    },
  ]);

  const toggleAnswer = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].isOpen = !newQuestions[index].isOpen;
    setQuestions(newQuestions);
  };

  const showAnswer = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].isOpen = !newQuestions[index].isOpen;
    setQuestions(newQuestions);
  };

  const renderCard = (card, index) => {
    return (
      <div key={index} className="question">
        <div className="home-trigger" onClick={() => showAnswer(index)}>
          <span className="home-text40">{card.question}</span>
          <svg viewBox="0 0 1024 1024" className="home-icon2">
            <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
          </svg>
        </div>
        {card.isOpen && (
          <div className="question-content">
            <span className="home-text41">{card.answer}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <motion.div
      className="home-container"
      style={{ marginTop: "-20px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {}
      <title>Up Start Template</title>
      <meta property="og:title" content="Up Start Template" />
      {}
      {}
      {}
      {}
      <div className="hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <h1 className="home-title">
              <span>Empowering Non-Profit Org, Investors, and Sponsors to </span>
              <br></br>
              {}
              {}
              <TypingText
                words={["Collaborate", "Innovate", "Succeed"]}
                typingSpeed={50}
                startDelay={1000}
                backDelay={1000}
                loop={true}
                loopCount={Infinity}
              />
              <span> Together</span>
            </h1>
            <span className="home-description">
  Connect with non-profit organisations, volunteers, and Sponsors to create impactful solutions, collaborate on meaningful initiatives, and drive positive change in communities and industries. 
  Together, let's empower innovation and build a sustainable future.
</span>
            <div className="home-container01">
              <Link
                style={{ textDecoration: "none" }}
                to="/login"
                className="butto-out"
              >
                Join for free
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/login"
                className="butto-in"
              >
                Log in
              </Link>
            </div>
          </div>
          <div className="home-image1">
            <img
              alt="image"
              src="https://media.istockphoto.com/id/1349142218/photo/new-startup-launch-business-ideas-creativity.jpg?s=612x612&w=0&k=20&c=rmW-MQo3rV9xpFZHAC31c7S-do0w-F4Ab4BUQl8Vr40="
              className="home-hero-image"
            />
            {}
            <img
              alt="image"
              src="/playground_assets/group18-1200w.png"
              className="home-image2"
            />
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width2 max-width">
          <div className="home-image3">
            <img
              alt="image"
              src="https://media.istockphoto.com/id/1287030300/photo/drop-shipping-business-owner-confirming-the-order-on-phone.jpg?s=612x612&w=0&k=20&c=XfaGtdTFUZofCWdOC70kiJ_DHls-a9VIdAwBdctBvoQ="
              className="home-hero-image1"
            />
          </div>

          <motion.div
            className="home-content1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <span className="home-text11 beforeHeading">NON PROFIT ORGANISATION</span>
            <h1 className="home-text12">
              {}
              {}
            </h1>
            <span className="home-text15">
  Are you passionate about creating lasting change? Our platform connects non-profit organizations with dedicated volunteers and generous sponsors, enabling collaboration on projects that make a real difference. 
  Explore impactful initiatives, gain support from willing sponsors, and work alongside motivated volunteers to bring your mission to life. 
  Take the first step towards fostering meaningful social change today.
</span>
            <div className="home-container02">
              <button className="my-button  bb blue">Learn more</button>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="home-section1 section-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 2.5 }}
      >
        <div className="home-max-width3 max-width">
          <div className="home-content2">
            <span className="home-text16 beforeHeading">VOLUNTEER</span>
            <h1 className="home-text17">
              {}
              {}
              {}
            </h1>
            <span className="home-text21">
  Are you passionate about making a difference? Join our platform where volunteers can explore various non-profit service events, express interest, and get involved in causes that matter to you. Connect with organizations, offer your time and skills, and contribute to meaningful projects that impact communities. Take the first step towards being part of something greater today!
</span>

            <div className="home-container03">
              <button className="my-button bb blue">See how</button>
            </div>
          </div>
          <img
            alt="image"
            src="https://media.istockphoto.com/id/1301397300/photo/portrait-of-young-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=Xvgo-k58_woBTuQaRNZ4JXP2SQsw_RSbrlSbt7XbQlU="
            className="home-hero-image2"
          />
          <div className="home-image4"></div>
        </div>
      </motion.div>
      <div className="home-section2 section-container">
        <div className="home-max-width4 max-width">
          <div className="home-image5">
            <img
              alt="image"
              src="https://media.istockphoto.com/id/841390884/photo/door-opened-light.jpg?s=612x612&w=0&k=20&c=tmL9D6eo2yofXD7Pwcp2v73OFMBa4IsoyVTojt1dQTE="
              className="home-hero-image3"
            />
          </div>
          <div className="home-content3">
            {}
            <h1 className="home-text23">Join today this innovation portal </h1>
            <div className="home-step">
              <div className="home-number">
                <span className="home-text24">1</span>
              </div>
              <div className="home-container04">
                <span className="home-title1">Create your free account</span>
                <span className="home-text25">
                  Step into the future of innovation with us by creating your
                  free account today
                </span>
              </div>
            </div>
           <div className="home-step1">
  <div className="home-number1">
    <span className="home-text26">2</span>
  </div>
  <div className="home-container05">
    <span className="home-title2">
      Learn, Connect &amp; Contribute
    </span>
    <span className="home-text27">
      Learn about various non-profit causes, connect with event organizers, and volunteer your time to impactful service events. Sponsors can also explore opportunities to fund and support initiatives that drive social change. Collaborate with like-minded individuals and make a meaningful impact in your community.
    </span>
  </div>
</div>

            <div className="home-step2">
              <div className="home-number2">
                <span className="home-text28">3</span>
              </div>
              <div className="home-container06">
                <span className="home-title3">Fund ideas </span>
                <span className="home-text29">
                  Join the movement of funding groundbreaking events that have
                  the potential to change the world
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width5 max-width">
          <span className="home-text30 beforeHeading">Join us now!</span>
          <h1 className="home-text31">
            {}
            <span>
              Take your skills to new heights with Innovate Hub's innovation
              community
            </span>
          </h1>
        </div>
      </div>
      <div className="home-section4 section-container">
        <div className="home-max-width6 max-width">
          <div className="home-faq">
            <div className="home-questions">
              <span className="home-text35 beforeHeading">faq</span>
              <h1 className="home-text36">
                <span className="home-text37">
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text39">Questions</span>
              </h1>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger">
                  <span className="home-text40">
                    Is this a Free or Paid service?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text41">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger1">
                  <span className="home-text42">
                    Do you have any connections?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon4">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text43">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger2">
                  <span className="home-text44">
                    Do you have an iOS or Android app?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon6">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text45">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/group2-1200w.png"
              className="home-image6"
            />
          </div>
          {}
          <div className="home-banner">
            <span className="home-text46 beforeHeading3">get started</span>
            <h1 className="home-text47">
              <span>Push your minds to</span>
              <br></br>
              <span></span>
              <span></span>
              <span> the next level.</span>
            </h1>
            <span className="home-text53">
              <span>
                Unleash your potential and turn your ideas into reality with
                Innovate Hub{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
              <span>
                the ultimate innovation hub for students and entrepreneurs{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
            {}
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-links-container">
          <div className="home-container07">
            <div className="footer-column">
              <span className="home-text58">How it works</span>
              <span className="home-text59">Features</span>
              <span>FAQ</span>
            </div>
            <div className="footer-column">
              <span className="home-text70">About us</span>
              <span className="home-text74">News</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span>Customer Help</span>
            </div>
            <div className="footer-column">
              <span className="home-text95">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Home;
