import React from 'react';

function Project({ project }) {
  const { name, repo, link, description } = project;

  return (
    <div>
      <div key={name}>
        <img
          src={require(`../../images/Project/${name}.jpg`)}
          alt={(name)}
          className='img-fluid'
        />
        <div className='portfolio-box-caption'>
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
