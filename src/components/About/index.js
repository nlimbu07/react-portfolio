import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

import Hero from '../Hero';

function About() {
  const [pages] = useState([
    {
      name: '',
    },
  ]);

  const [currentPage] = useState(pages[0]);

  return (
    <div>
      <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
      <Hero currentPage={currentPage}></Hero>
      <section className='page-section'>
        <h2>About Me</h2>
        <div>
          <p>
            I’m a beginner Full Stack Web Developer. My objective is simply to
            be the best web developer that I can be and to contribute to the
            technology industry all that I know and can do. I am a detail
            oriented professional with a passion for problem solving. I
            continually search for ways to expand and improve my skill set.
            Recently, I started my journey to be a coder in OSU Boot Camp and
            this is my First Webpage using with HTML/CSS.
          </p>

          <p>
            <em>Thank You for visiting my WebPage!!</em>
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
