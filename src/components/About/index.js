import React from 'react';
import './style.css';
import devpic from "../../assets/about/emichonpic.jpg"

function About() {
  return (
    <section className="about">
      <h1 id="about">About</h1>
      <img src={devpic} className="my-2" alt="a blonde woman with her hair back smiling at the camera" />
      <div className="my-2">
        <p>Give me a challenge!! I am process driven and determined. I like to identify any issues that are resulting in a loss and drive identification/resolution and overall efficiency.</p>
        <p>I definitely have a unique history - I was in the field of Loss Prevention 2007 through 2013. I enjoyed the puzzles that linger behind increasing profits and preventing losses, including internal investigations and operational opportunities. Coaching, teaching and training is the most vital part of prevention and awareness is the key to being proactive. I have had experience working with soft-line retailers, hard-line retailers, grocery retailers, restaurants and within a warehouse setting. </p>
        <p>I expanded my operational background in 2013 and am involved with inventory and data management via third party within Ford Motor Company. I strive to help emphasize and better develop consistency and communication within the group that I oversee and continue to develop efficient ways to reduce cost and manage inventory levels with the use of industrial data management.</p>
        <p>As I learned more about data, I found myself diving into web development. I received my certificate of completion in a Full-Stack Web Development Bootcamp through Michigan State University in March 2022. I am continually working on the playing around with the fundamentals of a full stack developer and building out my personal project portfolio. Stay tuned!</p> 
      </div>
    </section>
  );
}

export default About;