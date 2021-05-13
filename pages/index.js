import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import ReactFullpage from "@fullpage/react-fullpage";
import AOS from "aos";
import { useEffect } from "react";
import Section1 from "../components/section1";
import Section2 from "../components/section2";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Home</title>
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
          navigationTooltips={["Home", "About us", "Services", "Contact"]}
          slidesNavigation = {false}
          controlArrows={false}
          afterLoad= { function (destination) {
            var g_interval;
            clearInterval(g_interval);
            
            // 1000 milliseconds lapse
            const lapse = 5000;
            
            if(destination.item.querySelectorAll('.fp-slides').length){
              g_interval = setInterval(function () {
                fullpage_api.moveSlideRight();
              }, lapse);
            }}}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className={`section`}>
                  {/* <Section1 /> */}
                  <div className={`slide ${styles.s1}`}> 
                  <Section1 />
                   </div>
                   <div className={`slide ${styles.s2}`}> 
                  <Section1 />
                   </div>
                   <div className={`slide ${styles.s3}`}> 
                  <Section1 />
                   </div>
                </div>
                <div className={`section`} style={{backgroundColor:'black', height:'100vh'}}> 
                  <Section2 />
                   </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </>
  );
}
