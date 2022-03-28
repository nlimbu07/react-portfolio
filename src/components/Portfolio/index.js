import React, { useState } from 'react';
import Project from '../Project';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
  const [pages] = useState([
    {
      name: 'portfolio',
    },
  ]);
  const [currentPage] = useState(pages[0]);
  const [projects] = useState([
    {
      name: 'budget-tracker',
      description:
        "The user will be able to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the total should be updated when they're brought back online.",
      link: 'https://budget-tracker1982.herokuapp.com/',
      repo: 'https://github.com/nlimbu07/budget-tracker',
    },
    
    {
      name: 'food-festival',
      description: 'For food lover',
      link: 'https://nlimbu07.github.io/food-festival/',
      repo: 'https://github.com/nlimbu07/food-festival',
    },
    {
      name: 'project2',
      description:
        'Simple Lead Manager is an interactive website providing a simple, intuitive design allowing you to add, edit and manage your clients and contacts. Once you’re signed up, you have access to all the website’s features.',
      link: 'https://nlimbu07.github.io/project-2/',
      repo: 'https://github.com/nlimbu07/project-2',
    },
    {
      name: 'project1',
      description:
        'Move-Info is app that search all movies by name including international movies and TV shows.',
      link: 'https://nlimbu07.github.io/project-1/',
      repo: 'https://github.com/nlimbu07/project-1',
    },
    {
      name: 'git-it-done',
      description: 'Search for a GitHub user to see a list of repositories and how many open issues they have',
      link: 'https://nlimbu07.github.io/git-it-done/',
      repo: 'https://github.com/nlimbu07/git-it-done',
    },
    
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: 'https://nlimbu07.github.io/run-buddy/',
      repo: 'https://github.com/nlimbu07/run-buddy',
    },
  ]);

  return (
    <section className='page-section'>
      <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
      <hr className='' />
      <div className=''>
        {projects.map((project, idx) => (
          <Project project={project} key={'project' + idx} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
