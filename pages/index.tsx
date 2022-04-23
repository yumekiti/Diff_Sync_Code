import type { NextPage } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';

const Token: NextPage = () => {
  const token = Math.random().toString(32).substring(2);
  useEffect(() => {
    history.replaceState(null, '', null);
    window.addEventListener('popstate', (e) => {
      history.go(-1)
    });

    Router.push({
      pathname: '/' + token,
    });
  }, []);

  return null;
};

export default Token;
