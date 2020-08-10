import React from 'react';
import { FeatureOption } from './Feature-Option/FeatureOption';
import { FeatureSection } from './Feature-Section/FeatureSection';
import slugify from 'slugify';

export class Features extends React.Component{
  render(){
      const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
          return(

            <FeatureOption  
              selected={this.props.selected}
              itemHash={itemHash}
              feature={feature}
              item={item}
              key={item.name}
              updateFeature={this.props.updateFeature}
              />
          );
        });
        return(              
          <FeatureSection
            key={idx}
            feature={feature}
            options={options}
            featureHash={featureHash}/>
            );
        });
        return(
          <form className="main__form">
          <h2>Customize your laptop</h2>
            {features}
          </form>
        )
      }
    }
