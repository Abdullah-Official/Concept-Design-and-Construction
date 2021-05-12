import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import ReactFullpage from "@fullpage/react-fullpage";
import AOS from "aos";
import { useEffect } from "react";
import Section1 from "../components/section1";

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
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div  className={`section ${styles.s1}`}>
                  <Section1 />
                </div>
                <div className={`section ${styles.s2}`}>
                  <h1 className={`${styles.heading}`}>Section 2 </h1>
                </div>
                <div className={`section ${styles.s3}`}>
                  <h1 className={`${styles.heading}`}>Section 3 </h1>
                </div>
                <div className={`section ${styles.s4}`}>
                  <h1 className={`${styles.heading}`}>Section 4 </h1>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </>
  );
}
