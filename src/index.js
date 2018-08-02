import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import { browserHistory } from 'react-router';
import Routes from './routes';

ReactDOM.render(<Routes history={browserHistory} />,
                document.getElementById('root'));
registerServiceWorker();