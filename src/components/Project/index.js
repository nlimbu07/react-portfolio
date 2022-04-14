import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Project({ project }) {
  const { name, repo, link, description } = project;

  return (
    <div className='container bg-secondary'>
      <div className='text-center image' key={name}>
        <img
          src={require(`../../images/Project/${name}.jpg`)}
          alt={(name)}
          className='img-fluid' width={500}
        />
        <div className='fst-italic'>
          <div>
            <a href={repo} target='_blank' rel='noreferrer'>
              <i className='fab fa-github'></i>
            </a>
            <br />
            <a href={link} target='_blank' rel='noreferrer'>
              {name}
            </a>{' '}
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
