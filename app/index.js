import React from 'react'
import ReactDom from 'react-dom'
import Root from './root'

require('./styles/main.scss');

ReactDom.render(
    <Root />,
    document.getElementById('root')
);
