import React from 'react';


function Footer() {
  const icons = [
    {
      name: 'fa fa-github',
      link: 'https://github.com/nlimbu07',
    },
    {
      name: 'fa fa-linkedin-square',
      link: 'https://www.linkedin.com/in/niraj-limbu-9bb365219/',
    },
  ];

  return (
    <section>
      <footer>
        <div className='row'>
          <div className='col-lg-8 mx-auto text-center'>
            {icons.map((icon) => (
              <a
                href={icon.link}
                key={icon.name}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className={icon.name}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
