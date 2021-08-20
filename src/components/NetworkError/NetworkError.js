import React, { Component } from 'react';
import { connect } from 'react-redux';

import networkActions from '../../redux/network/network-actions';

import styles from './NetworkError.module.css';




class NetworkError extends Component {
  componentWillUnmount() {
    this.props.hideError();
  }
    
    render() {
      return (
        <div className={styles.errorBox}><br/><br/>
          <img src="https://cdn.iconscout.com/icon/free/png-512/dizzy-face-cross-error-emoji-37675.png" width="70" className={styles.center} alt="error-prew"/>
          <h2>Oh No</h2>
          <h3>Something Went Wrong</h3>
          <h3>
            <a href='https://infinite-escarpment-83664.herokuapp.com/' className={styles.link}>Go to home</a>
          </h3>
          </div>
      )
    }
}

const mapDispatchToProps = dispatch => ({
  hideError: () => dispatch(networkActions.hideNetworkErrorComponent()),
});


export default connect(null, mapDispatchToProps)(NetworkError);