import React from 'react';
import { tabConstants } from './NavigationHeader'

class TabsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: tabConstants[0]
        };
    }

    tabClick(tab) {
        this.setState({
            activeTab: tab
        }, () => {
            this.props.onChange(this.state.activeTab);
        });
    }

    render() {
        return (
            <ul className="navbar-nav nav nav-tabs">
                {tabConstants.map((tab, index) => {
                    return <li key={tab.id} className='nav-item'>
                    <a value={this.state.activeTab.id} className={this.state.activeTab.id === tab.id ? 'nav-link active' : 'nav-link'} onClick={this.tabClick.bind(this, tab)}>{tab.title}</a>
                    </li>;
                })}
            </ul>
        );
    }
}

export default TabsContainer;
