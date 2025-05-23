import React, { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const popoverFigma = (
      <Popover id="figmaPop">
        <Popover.Body>
          Figma - 5+ years
        </Popover.Body>
      </Popover>
);
const popoverHtml = (
        <Popover id="htmlPop">
        <Popover.Body>
          html - 12+ years
        </Popover.Body>
      </Popover>
);
const popoverCss = (
        <Popover id="cssPop">
        <Popover.Body>
          CSS - 12+ years
        </Popover.Body>
      </Popover>
);
const popoverJs = (
        <Popover id="jsPop">
        <Popover.Body>
          javaScript - 12+ years
        </Popover.Body>
      </Popover>
);
const popoverBs = (
        <Popover id="bsPop">
        <Popover.Body>
          Bootstrap - 10+ years
        </Popover.Body>
      </Popover>
);
const popoverVue = (
        <Popover id="vuePop">
        <Popover.Body>
          Vue - 3+ years
        </Popover.Body>
      </Popover>
);
const popoverReact = (
        <Popover id="reactPop">
        <Popover.Body>
          React - 2+ years
        </Popover.Body>
      </Popover>
);

function About() {

    const [openPopover, setOpenPopover] = useState(null);

    const handleToggle = (popoverName) => {
        setOpenPopover(openPopover === popoverName ? null : popoverName);
    };

    return (
        <section 
        id="about"
        className="container top-pad section"
        >
            <div className="row">
                <div className="col-md-8">
                    <h1>About</h1>
                    <p className="mb-2">I began my career in graphic design, earning a Bachelor's degree from Cabrini University. Over time, I discovered a strong passion for coding and web development, which led me to pursue a Master of Science in Instructional Systems and Technology.</p>
                    <p className="mb-2">Since then, I’ve built my skills in HTML, CSS, and JavaScript, taking on roles that blend design and development. My experience includes working as a Graphic Designer at Verizon, a SPEC Artist/Mobile Web Support at SuperMedia, and a UI/UX Interaction Designer and Front-End Developer at Vanguard. I currently serve as a Front-End Developer at Nutrisystem.</p>
                    <p className="mb-5">Web development continues to be a true passion of mine. I’m driven by the opportunity to create, build, and learn something new every day.</p>

<div className="d-flex gap-3 gap-lg-4">

<OverlayTrigger 
trigger="click"
    show={openPopover === 'figma'}
    placement="bottom"
    overlay={popoverFigma}
    rootClose
    >
    <svg 
    className="figma-logo svg-icon" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    aria-labelledby="figmaTitle"
    onClick={() => setOpenPopover('figma')}
    > 
    <title id="figmaTitle">Figma - 5+ years</title> <path fillRule="evenodd" clipRule="evenodd" d="M8.95483 0.5C7.40497 0.5 6.15179 1.02051 5.28314 1.88525C4.42365 2.74072 4 3.87646 4 5C4 6.12354 4.42365 7.25928 5.28314 8.11475C5.34259 8.17383 5.40381 8.23145 5.4668 8.2876C5.55005 8.36133 5.63641 8.43213 5.72577 8.5C5.64587 8.56055 5.56842 8.62354 5.49341 8.68896C5.42102 8.75244 5.35089 8.81787 5.28314 8.88525C4.42365 9.74072 4 10.8765 4 12C4 13.1235 4.42365 14.2593 5.28314 15.1147C5.41296 15.2441 5.55133 15.3652 5.698 15.4785C5.10254 15.9526 4.63531 16.5708 4.34253 17.2778C4.00195 18.1001 3.91284 19.0049 4.08649 19.8779C4.26013 20.751 4.68866 21.5527 5.31799 22.1821C5.94739 22.8115 6.74921 23.2397 7.62207 23.4136C8.495 23.5874 9.39978 23.498 10.2221 23.1572C11.0444 22.8169 11.7471 22.2402 12.2416 21.5C12.7361 20.7603 13 19.8901 13 19V15.7422C13.715 16.2207 14.575 16.5 15.5 16.5C17.9853 16.5 20 14.4854 20 12C20 10.5742 19.3369 9.30322 18.3021 8.47852C18.4487 8.36523 18.5871 8.24414 18.7169 8.11475C19.5764 7.25928 20 6.12354 20 5C20 3.87646 19.5764 2.74072 18.7169 1.88525C17.8482 1.02051 16.595 0.5 15.0452 0.5H8.95483ZM11 9.5H8.95483C7.8681 9.5 7.14392 9.85449 6.69427 10.3022C6.23547 10.7593 6 11.3735 6 12C6 12.6265 6.23547 13.2407 6.69427 13.6978C7.14392 14.1455 7.86816 14.5 8.95483 14.5H11V9.5ZM7.11957 16.9341C7.52814 16.6611 8.00854 16.5 8.5 16.5C8.5 16.5 8.88167 16.5 8.95483 16.5H11V19C11 19.4912 10.8391 19.9717 10.566 20.3804C10.293 20.7891 9.90491 21.1074 9.45087 21.2954C8.99683 21.4839 8.49725 21.5327 8.01526 21.437C7.53326 21.3413 7.09052 21.1045 6.74298 20.7568C6.39551 20.4097 6.15887 19.9668 6.06299 19.4849C5.9671 19.0029 6.0163 18.5029 6.20441 18.0493C6.39246 17.5952 6.71094 17.207 7.11957 16.9341ZM13 7.5H15.0452C16.1318 7.5 16.8561 7.14551 17.3057 6.69775C17.7645 6.24072 18 5.62646 18 5C18 4.37354 17.7645 3.75928 17.3057 3.30225C16.8561 2.85449 16.1319 2.5 15.0452 2.5H13V7.5ZM11 7.5H8.95483C7.86816 7.5 7.14392 7.14551 6.69427 6.69775C6.23547 6.24072 6 5.62646 6 5C6 4.37354 6.23547 3.75928 6.69427 3.30225C7.14392 2.85449 7.8681 2.5 8.95483 2.5H11V7.5ZM15.5 14.4849C14.1277 14.4849 13.0153 13.3721 13.0153 12C13.0153 10.6279 14.1277 9.51514 15.5 9.51514C16.8723 9.51514 17.9847 10.6279 17.9847 12C17.9847 13.3721 16.8723 14.4849 15.5 14.4849Z" fill="#555"/> </svg>
</OverlayTrigger>

    <OverlayTrigger 
trigger="click"
    show={openPopover === 'html'}
    placement="bottom"
    overlay={popoverHtml}
    rootClose
    >
    <svg className="html-logo svg-icon" fill="#555" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 27.17 27.17" xmlSpace="preserve" aria-labelledby="htmlTitle" onClick={() => setOpenPopover('html')}> <title id="htmlTitle">html - 12+ years</title> <g> <path d="M1.609,0.008c0.013,0.129,0.023,0.248,0.033,0.367c0.103,1.153,0.203,2.307,0.307,3.459 c0.132,1.465,0.265,2.933,0.395,4.397c0.11,1.232,0.219,2.467,0.328,3.7c0.124,1.389,0.249,2.777,0.373,4.167 c0.109,1.231,0.218,2.467,0.328,3.7c0.134,1.502,0.27,3.002,0.398,4.504c0.008,0.097,0.039,0.138,0.135,0.164 c3.177,0.896,6.352,1.793,9.525,2.687c0.08,0.022,0.176,0.021,0.256,0c3.187-0.894,6.373-1.789,9.56-2.682 c0.109-0.031,0.143-0.078,0.15-0.185c0.068-0.837,0.146-1.673,0.219-2.509c0.082-0.922,0.166-1.846,0.248-2.77 c0.074-0.826,0.146-1.65,0.221-2.477c0.084-0.924,0.166-1.848,0.248-2.771c0.072-0.825,0.146-1.649,0.221-2.476 c0.082-0.92,0.164-1.84,0.246-2.76c0.074-0.828,0.146-1.656,0.223-2.486c0.082-0.92,0.164-1.84,0.246-2.76 c0.074-0.838,0.148-1.678,0.227-2.517C25.517,0.51,25.538,0.258,25.562,0C17.571,0.008,9.6,0.008,1.609,0.008z M20.831,7.965 c-3.82,0-7.638,0-11.47,0c0.09,1.033,0.179,2.056,0.267,3.082c3.649,0,7.287,0,10.938,0c-0.027,0.217-0.061,0.422-0.08,0.629 c-0.051,0.521-0.1,1.043-0.146,1.562c-0.084,0.943-0.166,1.892-0.248,2.835c-0.072,0.848-0.145,1.691-0.221,2.539 c-0.047,0.535-0.1,1.07-0.145,1.604c-0.008,0.084-0.062,0.086-0.111,0.101c-1.293,0.356-2.584,0.713-3.877,1.067 c-0.709,0.197-1.417,0.396-2.127,0.591c-0.032,0.01-0.076,0.004-0.11-0.007c-2.006-0.551-4.011-1.104-6.015-1.653 c-0.092-0.023-0.094-0.08-0.1-0.146c-0.051-0.644-0.102-1.283-0.15-1.927c-0.067-0.864-0.135-1.729-0.203-2.594 c-0.002-0.022-0.002-0.049-0.004-0.08c0.99,0,1.978,0,2.971,0c0.025,0.281,0.052,0.562,0.076,0.838 c0.044,0.49,0.088,0.979,0.13,1.472c0.004,0.056,0.021,0.078,0.075,0.094c1.076,0.287,2.15,0.578,3.228,0.867 c0.038,0.011,0.084,0.006,0.123-0.004c1.062-0.285,2.123-0.574,3.187-0.856c0.064-0.019,0.092-0.048,0.098-0.113 c0.117-1.254,0.236-2.51,0.357-3.763c0-0.004-0.002-0.009-0.004-0.023c-3.463,0-6.928,0-10.401,0C6.596,11.049,6.326,8.029,6.055,5 c5.025,0,10.028,0,15.057,0C21.021,5.988,20.925,6.971,20.831,7.965z"/> </g> </svg>
    </OverlayTrigger>
    
    <OverlayTrigger 
  trigger="click"
    show={openPopover === 'css'}
    placement="bottom"
    overlay={popoverCss}
    rootClose
    >
     <svg className="css-logo svg-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-labelledby="cssTitle" onClick={() => setOpenPopover('css')}> <title id="cssTitle">CSS3 - 12+ years</title> <path fill="#555" fillRule="evenodd" d="M1.5,1.98975843e-15 L3.09355753,18.0557267 L9.99986611,20 L16.9059069,18.0557267 L18.5,0 L1.5,0 L1.5,1.98975843e-15 Z M15.0769709,5.85186222 L9.99370717,8.12461495 L9.9813893,8.12993559 L9.99370717,8.12993559 L14.8975585,8.12993559 L14.3352209,14.891627 L10.0014728,16.2147858 L9.99370717,16.2122655 L9.99370717,16.2147858 L5.63639442,14.8672641 L5.35522564,11.4620554 L5.36272348,11.4620554 L7.5103174,11.4620554 L7.51808301,11.4620554 L7.6586674,13.2259871 L9.97389147,13.8373005 L9.99370717,13.8314198 L9.99370717,13.8342201 L12.3908719,13.1282554 L12.5550209,10.2864744 L9.99370717,10.2783534 L5.21464125,10.2615514 L5.05076002,8.13021563 L9.99370717,5.97731728 L10.2818382,5.85214226 L9.99370717,5.85214226 L4.86331417,5.85214226 L4.60544223,3.67124055 L9.99370717,3.67124055 L15.2879814,3.67124055 L15.0769709,5.85186222 L15.0769709,5.85186222 Z"/> </svg>
    </OverlayTrigger>

<OverlayTrigger 
trigger="click"
    show={openPopover === 'js'}
    placement="bottom"
    overlay={popoverJs}
    rootClose
>
    <svg className="js-logo svg-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="jsTitle" onClick={() => setOpenPopover('js')}> <title id="jsTitle">javaScript - 12+ years</title> <path fillRule="evenodd" clipRule="evenodd" d="M0 0H24V24H0V0ZM18.3467 20.1196C17.2343 20.1196 16.6053 19.5394 16.1219 18.7501L14.2891 19.8149C14.9512 21.123 16.3044 22.1211 18.3989 22.1211C20.5409 22.1211 22.136 21.0088 22.136 18.9783C22.136 17.0949 21.0541 16.2571 19.1379 15.4354L18.5741 15.1939C17.6065 14.7749 17.1874 14.501 17.1874 13.8244C17.1874 13.277 17.6061 12.8579 18.2667 12.8579C18.9143 12.8579 19.3314 13.131 19.7181 13.8244L21.4743 12.6968C20.7314 11.3901 19.7006 10.891 18.2667 10.891C16.2526 10.891 14.9638 12.1787 14.9638 13.8701C14.9638 15.7063 16.0449 16.5749 17.6724 17.2682L18.2362 17.5101C19.2648 17.96 19.8781 18.2339 19.8781 19.0072C19.8781 19.6526 19.2811 20.1196 18.3467 20.1196ZM9.60647 20.1055C8.83161 20.1055 8.50933 19.5741 8.15504 18.9455L6.31923 20.057C6.85104 21.1825 7.89676 22.117 9.70247 22.117C11.7009 22.117 13.0701 21.0541 13.0701 18.7189V11.0198H10.8149V18.6884C10.8149 19.8156 10.3474 20.1055 9.60647 20.1055Z" fill="#555"/> </svg>
  </OverlayTrigger>

<OverlayTrigger 
trigger="click"
    show={openPopover === 'bs'}
    placement="bottom"
    overlay={popoverBs}
    rootClose
>
    <svg className="bootstrap-logo svg-icon" fill="#555" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-labelledby="bootstrapTitle" onClick={() => setOpenPopover('bs')}> <title id="bootstrapTitle">Bootstrap - 10+ years</title> <path d="M26.667 0h-21.333c-2.943 0.010-5.323 2.391-5.333 5.333v21.333c0 2.932 2.401 5.333 5.333 5.333h21.333c2.932 0 5.333-2.401 5.333-5.333v-21.333c0-2.932-2.401-5.333-5.333-5.333zM23.75 22.474c-0.266 0.641-0.688 1.208-1.229 1.646-0.563 0.453-1.271 0.828-2.146 1.094-0.87 0.271-1.906 0.406-3.109 0.406h-8.573v-18.667h9.068c1.677 0 3.021 0.375 4.026 1.146 1.016 0.771 1.516 1.927 1.516 3.479 0 0.943-0.229 1.745-0.688 2.411s-1.12 1.182-1.974 1.542v0.063c1.141 0.24 2.021 0.781 2.599 1.62s0.88 1.901 0.88 3.182c0 0.719-0.141 1.401-0.401 2.036l0.031 0.036zM20.047 17.875c-0.542-0.5-1.313-0.745-2.302-0.745h-5.766v5.823h5.781c0.984 0 1.76-0.255 2.307-0.771s0.823-1.25 0.823-2.188c-0.010-0.922-0.276-1.635-0.823-2.12h-0.026zM19.25 14.109c0.526-0.448 0.786-1.089 0.786-1.927 0-0.938-0.234-1.604-0.708-1.984-0.469-0.38-1.146-0.578-2.036-0.578h-5.333v5.151h5.333c0.776 0 1.443-0.229 1.953-0.661z"/> </svg>
    </OverlayTrigger>

<OverlayTrigger 
trigger="click"
    show={openPopover === 'vue'}
    placement="bottom"
    overlay={popoverVue}
    rootClose
>
    <svg className="vue-logo svg-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="vueTitle" onClick={() => setOpenPopover('vue')}> <title id="vueTitle">Vue - 3+ years</title> <path fillRule="nonzero" clipRule="nonzero" d="M11.7527 1.00003H10.4167C10.1615 1.00003 9.92378 1.1298 9.78578 1.34446L8 4.12235L6.21422 1.34446C6.07622 1.1298 5.83853 1.00003 5.58333 1.00003H0.75C0.481089 1.00003 0.232759 1.144 0.0991399 1.37737C-0.0344791 1.61073 -0.0329346 1.89777 0.103188 2.12968L7.35319 14.4815C7.48785 14.711 7.73397 14.8519 8 14.8519C8.26603 14.8519 8.51215 14.711 8.64681 14.4815L15.8968 2.12968C16.0329 1.89777 16.0345 1.61073 15.9009 1.37737C15.7672 1.144 15.5189 1.00003 15.25 1.00003H11.7668C11.7621 0.999989 11.7574 0.999989 11.7527 1.00003ZM3.80997 2.50003L8.00001 9.68295L12.19 2.50003H13.9401L8 12.6203L2.05987 2.50003H3.80997Z" fill="#555"/> </svg>
    </OverlayTrigger>

<OverlayTrigger 
trigger="click"
    show={openPopover === 'react'}
    placement="bottom"
    overlay={popoverReact}
    rootClose
>
    <svg className="react-logo svg-icon" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="reactTitle" onClick={() => setOpenPopover('react')}> <title id="reactTitle">React - 2+ years</title> <circle cx="0" cy="0" r="2" fill="#555"></circle> <g stroke="#555" strokeWidth="1" fill="none"> <ellipse rx="10" ry="4.5"></ellipse> <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse> <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
    </OverlayTrigger>
</div>

                </div>
            </div>
        </section>
    );
}

export default About