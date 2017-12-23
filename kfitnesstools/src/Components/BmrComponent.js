import React from 'react';

class BmrComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gender: 0,
            measurement: 0,
            age: 0,
            height: 0,
            weight: 0
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <form>
                    <div className="form-inline">
                        <div className="radio mr-sm-2">
                            <label>
                                <input type="radio" name="bmrGenderOptions" id="bmrGenderMale" value="0" checked={this.state.gender === '0'} />
                                Male
                            </label>
                        </div>
                        <div className="radio mr-sm-2">
                            <label>
                                <input type="radio" name="bmrGenderOptions" id="bmrGenderFemale" value="1" checked={this.state.gender === '1'}/>
                                Female
                            </label>
                        </div>

                        <div className="radio mr-sm-2">
                            <label>
                                <input type="radio" name="bmrMeasurementOptions" id="bmrMeasurementImperial" value="0" checked={this.state.measurement === '0'} />
                                Imperial
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="bmrMeasurementOptions" id="bmrMeasurementMetric" value="``option2``" checked={this.state.measurement === '1'} />
                                Metric
                            </label>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="bmrAge" className="bmd-label-floating">Age</label>
                        <input type="number" className="form-control" id="bmrAge" value={this.state.age}/>
                    </div>
                    <div class="form-group">
                        <label for="bmrWeight" className="bmd-label-floating">Weight</label>
                        <input type="number" className="form-control" id="bmrWeight" value={this.state.weight}/>
                    </div>
                    <div class="form-group">
                        <label for="bmrHeight" className="bmd-label-floating">Height</label>
                        <input type="number" className="form-control" id="bmrHeight" value={this.state.height}/>
                    </div>

                    <button type="button" className="btn btn-primary btn-raised">Calculate</button>
                </form>
            </div>
        );
    }
}

export default BmrComponent;
