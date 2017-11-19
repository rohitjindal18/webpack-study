import React from 'react';
import ReactDOM from 'react-dom';
import B from './B';
import C from './C';

class D extends React.Component {
    render() {
        return(
            <div>
                <B/>
                <C/>
            </div>
        );
    }
}
ReactDOM.render(<D/>, document.getElementById('root'));