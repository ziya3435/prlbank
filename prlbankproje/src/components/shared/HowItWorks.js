import React from "react";

const HowItWorks = () => {
  const HowItWorksData = [
    {
      icon: "assets/img/work/01.png",
      title: "Know About",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      icon: "assets/img/work/02.png",
      title: "Create Account",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      icon: "assets/img/work/03.png",
      title: "Start Invest",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      icon: "assets/img/work/04.png",
      title: "Get Profit",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
  ];

  return (
    <>
      <div className="work-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-title section-title-2">
                <h6 className="subtitle subtitle-thumb">Best Services</h6>
                <h2 className="title">How It Works</h2>
                <p>
                  Bankdipscing elitr, sed diam nonumy eirmod et accusam et justo
                  duo dolores et ea rebum. tet clita kasd gubergren, no sea
                  takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {HowItWorksData.map((item) => {
              const { icon, title, description } = item;
              return (
                <div className="col-lg-3 col-md-6">
                  <div className="single-work mt-0 text-center">
                    <div className="work-icon">
                      <img className="" src={icon} alt="icon" />
                    </div>
                    <h5>
                      <a href="#">{title}</a>
                    </h5>
                    <p>{description}</p>
                    <a className="angle-btn" href="#">
                      <img
                        src="assets/img/icon/angle-left-round.png"
                        alt="icon"
                      />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;

// import React from "react";

// const HowItWorks = () => {
//   return (
//     <>
//       {/* <!--work-area start--> */}
//       <div className="work-area">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8 text-center">
//               <div className="section-title section-title-2">
//                 <h6 className="subtitle subtitle-thumb">Best Services</h6>
//                 <h2 className="title">How It Work</h2>
//                 <p>
//                   Bankdipscing elitr, sed diam nonumy eirmod et accusam et justo
//                   duo dolores et ea rebum. tet clita kasd gubergren, no sea
//                   takimata sanctus est Lorem ipsum dolor sit amet.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="row justify-content-center">
//             <div className="col-lg-3 col-md-6">
//               <div className="single-work mt-0 text-center">
//                 <div className="work-icon">
//                   <img className="" src="assets/img/work/01.png" alt="icon" />
//                 </div>
//                 <h5>
//                   <a href="#">Know About</a>
//                 </h5>
//                 <p>Lorem ipsum dolor sit amet, consectetur</p>
//                 <a className="angle-btn" href="#">
//                   <img src="assets/img/icon/angle-left-round.png" alt="icon" />
//                 </a>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <div className="single-work mt-md-0 text-center">
//                 <div className="work-icon">
//                   <img className="" src="assets/img/work/02.png" alt="icon" />
//                 </div>
//                 <h5>
//                   <a href="#">Create Account</a>
//                 </h5>
//                 <p>Lorem ipsum dolor sit amet, consectetur</p>
//                 <a className="angle-btn" href="#">
//                   <img src="assets/img/icon/angle-left-round.png" alt="icon" />
//                 </a>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <div className="single-work text-center">
//                 <div className="work-icon">
//                   <img className="" src="assets/img/work/03.png" alt="icon" />
//                 </div>
//                 <h5>
//                   <a href="#">Start Invest</a>
//                 </h5>
//                 <p>Lorem ipsum dolor sit amet, consectetur</p>
//                 <a className="angle-btn" href="#">
//                   <img src="assets/img/icon/angle-left-round.png" alt="icon" />
//                 </a>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <div className="single-work text-center">
//                 <div className="work-icon">
//                   <img className="" src="assets/img/work/04.png" alt="icon" />
//                 </div>
//                 <h5>
//                   <a href="#">Get Profit</a>
//                 </h5>
//                 <p>Lorem ipsum dolor sit amet, consectetur</p>
//                 <a className="angle-btn" href="#">
//                   <img src="assets/img/icon/angle-left-round.png" alt="icon" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <!--work-area end--> */}
//     </>
//   );
// };

// export default HowItWorks;
