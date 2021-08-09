import React, { Component } from 'react';

const styles = {
  homeStyles: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
  },
};

class HomeView extends Component {
  render() {
    return (
      <div style={styles.homeStyles}>
        <h1 style={styles.title}>Home page</h1>
      </div>
    );
  }
}

export default HomeView;
