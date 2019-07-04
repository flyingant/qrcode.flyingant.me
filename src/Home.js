import React, {PropTypes} from 'react';
import {Base64} from 'js-base64';
import Header from './components/Header';
import QRCode from './components/QRCode';

require('./stylesheets/main.css');

export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      content: '',
      permanentLink: ''
    };
  }

  componentDidMount() {
    let hash = window.location.hash;
    if (hash) {
      this.setState({
        content: `${Base64.decode(hash.slice(1, hash.length))}`,
        permanentLink: `${window.location.href}`
      });
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <div className='main'>
          <textarea onChange={(event) => {
            let hash = Base64.encode(event.target.value);
            this.setState({
              content: event.target.value,
              permanentLink: `${window.location.origin}#${hash}`
            });
            window.location.hash = hash;
          }}
                    value={this.state.content}
          />
          <QRCode value={this.state.content} size={300}/>
        </div>
        <div className='link'>
          <label>Permanent Link:</label>
          <textarea disabled value={this.state.permanentLink}/>
        </div>
      </div>
    );
  }

}
