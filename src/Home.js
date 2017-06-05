import React, { PropTypes } from 'react';
import Header from './components/Header';
import QRCode from 'qrcode.react';

require('./stylesheets/main.css');

export default class Home extends React.Component  {
  
    constructor(props, context) {
        super(props, context);
        this.state = {
            content: 'Hi'
        };
    }

  render() {
    return (
      <div>
          <Header/>
          <div className='main'>
                <textarea onChange={(event) => this.setState({content: event.target.value})}>{this.state.content}</textarea>
                <QRCode value={this.state.content} size={300}/>
          </div>
      </div>
    );
  }

}
