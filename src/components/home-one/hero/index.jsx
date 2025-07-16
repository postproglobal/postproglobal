// import FadeInRight from "../../animation/FadeInRight";
// import HeroContent from "./HeroContent";
// import HeroThumbs from "./HeroThumbs";

// function HeroSection() {
// 	return (
// 		<div className="aximo-hero-section dark-bg">
// 			<div className="container position-relative">
// 				<div className="row">
// 					<div className="col-lg-8">
// 						<HeroContent />
// 					</div>
// 					<div className="col-lg-4">
// 						<FadeInRight>
// 							<HeroThumbs />
// 						</FadeInRight>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default HeroSection;

// import FadeInRight from "../../animation/FadeInRight";
// import HeroContent from "./HeroContent";
// import HeroThumbs from "./HeroThumbs";

// import bannerVideo from "../../../assets/videos/banners/banner-1.mp4"
// function HeroSection() {
//   return (
//     <div className="aximo-hero-section" style={{ position: 'relative', overflow: 'hidden', background: 'transparent', height: '995px' }}>
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
// 		onError={(e) => console.error("Video failed to load:", e)}

//         style={{
//           position: 'absolute',
//           top: "50%",
//           left: "50%",
//           width: "100%",
//           transform: "translate(-50%, -50%)",
//           objectFit: 'cover',
//           zIndex: -1,
//         }}
//       >
//         <source src={bannerVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="container position-relative">
//         <div className="row">
//           <div className="col-lg-8">
//             <HeroContent />
//           </div>
//           <div className="col-lg-4">
//             <FadeInRight>
//               {/* <HeroThumbs /> */}
//             </FadeInRight>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;

import { useState, useEffect } from "react";
import FadeInRight from "../../animation/FadeInRight.jsx";
import HeroContent from "./HeroContent.jsx";
import HeroThumbs from "./HeroThumbs.jsx";

import bannerVideoDesktop from "../../../assets/videos/banners/banner-01.mov";
import bannerVideoMobile from "../../../assets/videos/banners/banner-02.mov";

function HeroSection() {
  const [videoSource, setVideoSource] = useState(bannerVideoDesktop);

  useEffect(() => {
    // Log video URLs for debugging
    console.log("Desktop video URL:", bannerVideoDesktop);
    console.log("Mobile video URL:", bannerVideoMobile);

    // Function to update video source based on screen width
    const updateVideoSource = () => {
      const isMobile = window.innerWidth <= 768; // Mobile breakpoint
      setVideoSource(isMobile ? bannerVideoMobile : bannerVideoDesktop);
    };

    // Initial check
    updateVideoSource();

    // Add resize event listener
    window.addEventListener("resize", updateVideoSource);

    // Cleanup
    return () => window.removeEventListener("resize", updateVideoSource);
  }, []);

  return (
    <div
      className="aximo-hero-section"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "transparent",
        // minHeight: "100vh", 
        marginTop: "85px"
      }}
    >
      <video
        key={videoSource} // Force video reload when source changes
        autoPlay
        loop
        muted
        playsInline
        onError={(e) =>
          console.error("Video load error:", {
            message: e.target.error?.message,
            code: e.target.error?.code,
            src: e.target.currentSrc,
          })
        }
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "auto", // Use natural height
          // transform: "translate(-50%, -50%)", // Center video
          zIndex: -1,
        }}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8 col-12">
            <HeroContent />
          </div>
          <div className="col-lg-4 col-12">
            <FadeInRight>
              {/* <HeroThumbs /> */} {/* Uncomment if needed */}
            </FadeInRight>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;