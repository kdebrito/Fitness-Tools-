import React from 'react';
import TabsContainer from './TabsContainer'
import BmrComponent from './BmrComponent'

export const tabConstants = [
    {
        id: 0, //BMR
        title: "BMR",
        html: <BmrComponent />
    },
    {
        id: 1, //TDEE
        title: "TDEE",
        html: <div> TDEE </div>
    },
    {
        id: 2, //Macros
        title: "Macros",
        html: <div> Macros </div>
    }
];



class NavigationHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: tabConstants[0]
        };

        this.tabChange = this.tabChange.bind(this);
    }

    tabChange(tab) {
        this.setState({
            activeTab: tab
        }, () => {
            console.log("Nav value: " + this.state.activeTab.title);
        });

    }
    render() {
        return (
            <div className="navigation-header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Fitness Tools</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <TabsContainer onChange={this.tabChange} />
                        </div>
                    </div>
                </nav>
                <div className="tab-content">
                    {tabConstants.map((tab, index) => {
                        return <div key={tab.id} className={this.state.activeTab.id === tab.id ? 'tab-pane active' : 'tab-pane'} role="tabpanel">
                            <div className="card"><div className="card-body">{tab.html}</div></div>
                        </div>;
                    })}
                </div>
            </div >
        );
    }
}

export default NavigationHeader;
