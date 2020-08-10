import React from 'react';
import { SummaryOption } from './SummaryOption';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
export class Summary extends React.Component{
    render(){
        return(
          Object.keys(this.props.selected).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const selectedOption = this.props.selected[feature];
        
        return (
          <SummaryOption 
          feature={feature}
          features={featureHash}
          selected={selectedOption}
          idx={idx}
          money={USCurrencyFormat}/>

        )
          })
        )
    }
}