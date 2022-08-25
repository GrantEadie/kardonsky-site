import React from "react";
import Testimonials from "../testimonials/Testimonials";
import "./about.css";

const About = () => {
  return (
    <div id="about-me">
      <div id="about-me-body">
        <div id="about-me-col">
          <img
            id="about-me-headshot"
            src="https://firebasestorage.googleapis.com/v0/b/kardonsky-site.appspot.com/o/headshots%2Fval-headshot-vector_3.png?alt=media&token=22952274-7077-45e1-8d9b-59b464215dcf"
            alt="valerie kardonsky"
          />
          <h3>Valerie Kardonsky</h3>
          <h4>Methow Valley Real Estate Broker</h4>
        </div>
        <div id="about-me-col">
          <h5>As a client, your needs and goals come first, always!</h5>
          <p>
            Looking for a new home is more than a property search and I
            understand this. It's about your life! Whether you're searching for
            or selling your home or property, I'm committed to being your
            partner. I'll make the process as enjoyable, uncomplicated and easy
            as life in the Methow Valley.
          </p>
          <p>
            A long time lover of the valley, I've been a regular, all seasons
            visitor for over twenty years. My husband and I purchased property
            in Twisp many years ago and over time designed and built our dream
            house. We gave up city life and moved here full time in 2014. I'm an
            active member of our community, a regular volunteer for local
            non-profits and a past volunteer Board Member of Confluence Gallery
            & Art Center. When I'm not working you'll likely find me out hiking,
            biking, skiing the trails or cooking up something special in my
            kitchen overlooking the Twisp River.
          </p>
          <p>
            My professional experience in retail store development, design,
            construction and event planning provides a solid background in
            understanding the unique styles and requests of a broad range of
            clients. With this knowledge I am able to organize multiple tasks,
            communicate clearly and truly hear the details and needs of my
            clients. Before entering the corporate arena, I studied dance and
            received a BFA from Cornish College of the Arts in Seattle.
          </p>
        </div>
      </div>
      {/* <button>Learn more about the Methow Community</button> */}
      <Testimonials />
    </div>
  );
};

export default About;
