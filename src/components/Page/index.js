import React from 'react';
import Portfolio from '../Portfolio';
import About from '../About';
import PageContent from '../PageContent';
import Contact from '../Contact';
import Resume from '../Resume';

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}

export default Page;
