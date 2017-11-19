import React from 'react';
import styles from './index.css';
// const styles = require("css-loader!./index.css");

export default class B extends React.Component {
    render() {
        console.log(styles.tap);
        return(
            <div className={styles.tap}>C123456</div>
        )
    }
}