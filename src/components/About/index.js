import React from 'react';
import './index.css';
import devpic from "../../assets/about/emichonpic.jpg"

function About() {
  return (
    <section className="about">
      <h1 id="about"></h1>
      <img src={devpic} className="my-2" alt="picture of a blonde woman with her hair back smiling at the camera" />
      <div className="my-2">
        <p>I was in the field of Loss Prevention 2007 through 2013. I enjoyed the puzzles that linger behind increasing profits and preventing losses, including internal investigations and operational opportunities. Coaching, teaching and training is the most vital part of prevention and awareness is the key to being proactive. I have had experience working with soft-line retailers, hard-line retailers, grocery retailers, restaurants and within a warehouse setting. I plan to continue to gain valuable professional experience and expand my knowledge in this field through everyday obstacles and new situations.</p> 
        <p>I expanded my operational background in 2013 and am involved with inventory management within the automotive industry. I strive to help emphasize and better develop consistency and communication within the group that I oversee and continue to develop efficient ways to reduce cost and manage inventory levels with the use of industrial data management.</p>
        <p>As I learned more about data, I found myself diving into web development. I am currently working on learning the languages and fundamentals of a full stack developer and building out my personal project portfolio. </p>
      </div>
    </section>
  );
}

export default About;