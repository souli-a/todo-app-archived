import { useEffect } from 'react';

const useTitlePage = ({ title }) => {
  useEffect(() => {
    if (!title) {
      window.document.title = 'Listify';
    } else {
      window.document.title = `${title} - Listify`;
    }
  }, [title]);
};

export default useTitlePage;
