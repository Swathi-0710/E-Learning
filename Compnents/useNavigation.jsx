import { useState } from 'react';

function useNavigation() {
  const [currentPage, setCurrentPage] = useState('/');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    navigateTo
  };
}

export default useNavigation;
