import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const gambi: any = reactotronSaga;
  const tron: any = Reactotron.configure()
    .use(reactotronRedux())
    .use(gambi())
    .connect();
    
    tron.clear();
    
    console.tron = tron;
}
