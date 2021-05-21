import React from 'react'
import {Tweet } from 'react-twitter-widgets'

const Section4 = () => {
    return (
      <div class="container my-5 p-5 mt-5">
        <section class="dark-grey-text">
          <h2
            class="text-center font-weight-bold mb-3 pb-2"
            style={{ color: "#053a93" }}
          >
            News and Insight Headline{" "}
          </h2>
          <p class="text-center lead font-bold text-primary mx-1 mb-5">
            See the latest news and trends in the industry by following us on
            twitter.
          </p>

          <div class="row">
            <div class="col-md-6 mb-md-0 col-12 col-sm-12 ">
              <Tweet tweetId="1394058036117966849" />
            </div>

            <div class="col-md-6 mb-md-0 col-12 col-sm-12 ">
              <Tweet tweetId="1394055839514759169" />
            </div>
          </div>
        </section>
      </div>
    );
}

export default Section4
