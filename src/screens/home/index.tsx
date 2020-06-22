import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { modalCreators } from '../../store/state';

const Home = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const closeModal = useCallback(() => {
    dispatch(modalCreators.modalClose('SimpleModal'));
  }, [dispatch]);

  return <div style={{ display: 'none', flexDirection: 'column' }} />;
};

export default Home;
