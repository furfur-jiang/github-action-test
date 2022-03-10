import React from 'react';
import ReactDOM from 'react-dom';

let ele = <h1 className='title' style={{ color: 'blue' }}><span>hello</span></h1>
console.log(JSON.stringify(ele))
ReactDOM.render(ele, document.getElementById('root'));


