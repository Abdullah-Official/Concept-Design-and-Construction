import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Section3 from "../components/section3";
import Section4 from "../components/section4";
import { useEffect } from "react";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      duration: 1000,
      // once: true,
      // offset: 50,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Concept Design & Constructors</title>
        <script>
          {function () {
            $("#fullpage").fullpage({
              navigation: true,
            });
          }}
        </script>
      </Head>
      <div>
        <Navbar />
      </div>
      <div>
        <ReactFullpage
          licenseKey={"YOUR_KEY_HERE"}
          scrollingSpeed={1000}
          navigation={true}
          navigationTooltips={["Home", "About us", "Services", "News and Insights"]}
          slidesNavigation={false}
          controlArrows={false}
          responsiveWidth={900}
          afterLoad={function (destination) {
            var g_interval;
            clearInterval(g_interval);

            // 1000 milliseconds lapse
            const lapse = 13000;

            if (destination.item.querySelectorAll(".fp-slides").length) {
              g_interval = setInterval(function () {
                fullpage_api.moveSlideRight();
              }, lapse);
            }
          }}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className={`section`}>
                  {/* <Section1 /> */}
                  <div className={`slide   ${styles.s1}`}>
                    <Section1 />
                  </div>
                  <div className={`slide ${styles.s2}`}>
                    <Section1 />
                  </div>
                  <div className={`slide ${styles.s3}`}>
                    <Section1 />
                  </div>
                </div>
                <div className={`section jarallax ${styles.section2}`}>
                  <Section2 />
                </div>
                <div className={`section jarallax ${styles.section3}`}>
                  <Section3 />
                </div>
                <div className={`section jarallax ${styles.section4}`}>
                  <Section4 />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </>
  );
}
