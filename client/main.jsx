'use strict';

import 'styles/main.scss';


import React from 'react';
import { render } from 'react-dom';

class App extends React.Component  {
    render() {
        return <div><h1>It works</h1><p>This is your simple but scalable app.</p></div>;
    }
}

render(<App />, document.getElementById('js-main'));
