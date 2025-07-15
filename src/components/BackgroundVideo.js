// // import bannerVideo from "../assets/video/banner_bg_opti2.mp4";

// // const BackgroundVideo = () => {
// //   return (
// //     <div className="video-background">
// //       <video autoPlay loop muted playsInline >
// //         <source src={bannerVideo} type="video/mp4" />
// //       </video>
// //     </div>
// //   );
// // };

// // export default BackgroundVideo;

// //************ */ Optimizacion de codigo **************///

// import { useState, useEffect, useRef } from "react";
// import bannerVideo from "../assets/video/banner_bg_opti2.mp4";

// const BackgroundVideo = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const videoRef = useRef(null);

//   useEffect(() => {
//   const observer = new IntersectionObserver(
//     ([entry]) => {
//       if (entry.isIntersecting && videoRef.current) {
//         setIsVisible(true);
//         videoRef.current.play().catch((e) => console.log("Autoplay error:", e));
//         observer.disconnect();
//       }
//     },
//     { threshold: 0.1 }
//   );

//   if (videoRef.current) {
//     observer.observe(videoRef.current);
//   }

//   return () => observer.disconnect();
// }, []);

//   return (
//     <div className="video-background">
//       <video 
//         ref={videoRef} 
//         autoPlay={isVisible} 
//         loop 
//         muted 
//         playsInline 
//         preload="none"
//       >
//         <source src={bannerVideo} type="video/mp4" />
//       </video>
//     </div>
//   );
// };

// export default BackgroundVideo;
import React, { useEffect, useRef } from 'react';
import bannerVideo from "../assets/video/banner_bg_opti2.mp4";

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch((e) =>
            console.warn('Autoplay prevented:', e)
          );
          observer.disconnect(); // Se detiene después de cargar
        }
      },
      { threshold: 0.1 } // Más sensible al scroll
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="video-background">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
      >
        <source src={bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;