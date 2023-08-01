import React from "react";
import { Link } from "react-router-dom";
import Plan from "../Images/task.png";
import Compu from "../Images/illustration.png";
import Engi from "../Images/engineering.png";
import Fund from "../Images/funding.png";

const WePlan = () => {
  return (
    <>
      <div className="we-plan">
        <div className="container1">
          <div className="we-plan-main">
            <div className="we-plan-main-grid">
              <div className="we-plan-grid-1">
                <img src={Plan} alt="" />
                <h5>We plan & strategies</h5>
                <p>
                  On the surface, email marketing seems to be an easy task -
                  crafting an attractive mailer and sending them out to as many
                  contacts as possible. But when there are a variety of
                  companies across a variety of industries doing the same,
                  content becomes,
                  <span>
                    <Link path="/"> Read More..</Link>
                  </span>
                </p>
              </div>
              <div className="we-plan-grid-1">
                <img src={Compu} alt="" />
                <h5>We don’t just deliver, we design</h5>
                <p>
                  Good email campaigning begins with exceptional email design at
                  Bud email marketing company in India. Our team of skilled
                  designers crafts captivating and immersive email templates. So
                  you can effortlessly captivate attention and fuel,
                  <span>
                    <Link path="/"> Read More..</Link>
                  </span>
                </p>
              </div>
              <div className="we-plan-grid-1">
                <img src={Engi} alt="" />
                <h5>We are abreast of automation</h5>
                <p>
                  To optimize the potency of your email campaigns, we harness
                  the power of cutting-edge marketing automation tools. These
                  tools empower us to streamline many facets of your email
                  marketing journey. This includes audience segmentation,
                  <span>
                    <Link path="/"> Read More..</Link>
                  </span>
                </p>
              </div>
              <div className="we-plan-grid-1">
                <img src={Fund} alt="" />
                <h5>We stay light on your pocket</h5>
                <p>
                  Being India's best email marketing company, we know the
                  significance of cost-effectiveness. We provide flexible
                  pricing choices tailored to businesses of all scales. We
                  guarantee optimal value for your investment. Our dedicated
                  team can deliver top-notch,
                  <span>
                    <Link path="/"> Read More..</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="we-plan-heading">
            <h3>
              WE BELIEVE THAT PERSONALIZATION IS NOT ABOUT FIRST/LAST NAMES.
              IT’S ABOUT RELEVANT CONTENT
            </h3>
            <p>
              On the surface, email marketing seems to be an easy task -
              crafting an attractive mailer and sending them out to as many
              contacts as possible. But when there are a variety of companies
              across a variety of industries doing the same, content becomes
              critical. Content represents all forms of media including graphics
              and verbal communication. It needs to be relevant, fresh, and
              consistent, to do so, market research is necessary. It is
              important to understand fundamental questions like ‘What fits?’ ,
              ‘Where?’ etc. That’s where the proficiency of Bud, the top email
              marketing company in India comes into play. We can deliver
              exceptional results to drive your business forward.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WePlan;
