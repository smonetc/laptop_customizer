import React from 'react';

export class SummaryOption extends React.Component{
    render(){
  
        return (
          <div className="summary__option" features={this.props.featureHash}>
            <div className="summary__option__label">{this.props.feature} </div>
            <div className="summary__option__value">{this.props.selected.name}</div>
            <div className="summary__option__cost">
           {this.props.money.format(this.props.selected.cost)}
            </div>
          </div>
        );
    }
}