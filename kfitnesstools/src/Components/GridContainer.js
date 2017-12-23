import React from 'react';
import TabsContainer from './TabsContainer'

class GridContainer extends React.Component {
    render() {
        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--12--col">
                    <TabsContainer />
                </div>
            </div>
        );
    }
}

export default GridContainer;