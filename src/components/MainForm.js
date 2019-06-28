import React from 'react';

import Option from './Option';

class MainForm extends React.Component {

  render() {
    const features = Object.keys(this.props.features).map(feature => {
      const options = this.props.features[feature].map((item, index) => {
        const selectedClass = item.name === this.props.selected[feature].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return <Option
          key={index}
          index={index}
          feature={feature}
          item={item}
          featureClass={featureClass}
          updateFeature={this.props.updateFeature}
          />
      });

      return <div className="feature" key={feature}>
        <div className="feature__name">{feature}</div>
        <ul className="feature__list">
          { options }
        </ul>
      </div>
    });  
    
    return <>
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        { features }
      </section>
    </>
  }
}

export default MainForm;