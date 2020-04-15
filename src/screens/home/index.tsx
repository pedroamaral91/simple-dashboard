import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { modalCreators } from '../../store/state';

const Home = () => {
  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    dispatch(modalCreators.modalClose('SimpleModal'));
  }, [dispatch]);

  const onClick = useCallback(() => {
    dispatch(modalCreators.modalOpen('SimpleModal', { closeModal }));
  }, [dispatch, closeModal]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Home</h1>
      <button type="button" onClick={onClick}>
        teste
      </button>
    </div>
  );
};

export default Home;
