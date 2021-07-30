import React from 'react';

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

const HomeView = () => {
  return (
    <div style={styles.homeStyles}>
      <h1 style={styles.title}>Home page</h1>

      {/* <button onClick={handleButtonClick}>GitHub Btn</button> */}
    </div>
  );
};

export default HomeView;
