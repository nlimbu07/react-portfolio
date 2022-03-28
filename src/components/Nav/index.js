import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <div>
      <h1>Niraj Limbu</h1>

      <nav>
        {pages.map((Page) => (
          <li className={`text-center ${currentPage.name === Page.name && 'active'}`}>
            <span onClick={() => setCurrentPage(Page)}>
              {capitalizeFirstLetter(Page.name)}
            </span>
          </li>
        ))}
      </nav>
    </div>
  );
}

export default Nav;
