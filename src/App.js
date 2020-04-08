// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';

import { ColumnChart } from '@gooddata/react-components';

const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
const dateAttributeInMonths = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';
const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';

class App extends Component {
    state = { from: "2016-01-01", to: "2016-01-31" };


    handleChange = (event) => {
        let from;
        let to;

        this.setState({
            value: event.target.value
        });

        switch (event.target.value) {
            case "1":

                from = '2016-01-01';
                to = '2016-01-31';

                break;
            case "2":

                from = '2016-02-01';
                to = '2016-02-29';

                break;
            case "3":

                from = '2016-03-01';
                to = '2016-03-31';

                break;
            case "4":

                from = '2016-04-01';
                to = '2016-04-30';

                break;
            case "5":

                from = '2016-05-01';
                to = '2016-05-31';

                break;
            case "6":

                from = '2016-06-01';
                to = '2016-06-30';

                break;
            case "7":
                from = '2016-07-01';
                to = '2016-07-31';

                break;
            case "8":

                from = '2016-08-01';
                to = '2016-08-31';

                break;
            case "9":

                from = '2016-09-01';
                to = '2016-09-30';

                break;
            case "10":

                from = '2016-10-01';
                to = '2016-10-31';

                break;
            case "11":

                from = '2016-11-01';
                to = '2016-11-30';

                break;
            case "12":

                from = '2016-12-01';
                to = '2016-12-31';

                break;
            default:
                from = '2016-01-01';
                to = '2016-01-31';
                break;

        }
        this.setState({
            from: from,
            to: to
        })
    }




    getMonthFilter() {
        return {
            absoluteDateFilter: {
                dataSet: {
                    uri: dateAttribute
                },
                from: this.state.from,
                to: this.state.to
            },

        }
    }

    getMeasures() {
        return [
            {
                measure: {
                    localIdentifier: 'm1',
                    definition: {
                        measureDefinition: {
                            item: {
                                uri: grossProfitMeasure
                            }
                        }
                    },
                    alias: '$ Gross Profit'
                }
            }
        ]
    }

    getViewBy() {
        return {
            visualizationAttribute:
            {
                displayForm: {
                    uri: dateAttributeInMonths
                },
                localIdentifier: 'a1'
            }
        }
    }

    renderDropdown() {
        return (
            <select defaultValue="1" value={this.state.value} onChange={this.handleChange}>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>

        )
    }

    render() {
        const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
        const filters = [this.getMonthFilter()];
        const measures = this.getMeasures();
        const viewBy = this.getViewBy();

        return (
            <div className="App">
                <h1>$ Gross Profit in month {this.renderDropdown()} 2016</h1>
                <div>
                    <ColumnChart
                        measures={measures}
                        filters={filters}
                        projectId={projectId}
                    />
                </div>
                <h1>$ Gross Profit - All months</h1>
                <div>
                    <ColumnChart
                        measures={measures}
                        viewBy={viewBy}
                        projectId={projectId}
                    />
                </div>
            </div>
        );
    }
}

export default App;
