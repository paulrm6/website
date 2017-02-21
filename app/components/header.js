import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Picture src="images/android.png" />
        <h1><span className="first">Paul</span> MacDonald</h1>
      </header>
    )
  }
}

class Picture extends React.Component {
  render() {
    return <img src={this.props.src} />
  }
}

export default Header;
