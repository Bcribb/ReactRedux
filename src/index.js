import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import store from './Store/Store';

import AlbumList from './Components/AlbumList';

ReactDOM.render(
    <Provider store={store}> 
      <AlbumList />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
