import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers: any, middlewares: any): any => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? // eslint-disable-next-line no-console
        compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};
