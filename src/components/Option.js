import React from 'react';

class Option extends React.Component {

  updateFeature = (feature, newValue) => {
    this.props.updateFeature(feature, newValue)
  }

  render() {
    const feature = this.props.feature;
    const item = this.props.item;
    return <>
      <li key={this.props.index} className="feature__item">
        <div className={this.props.featureClass}    
          onClick={e => this.updateFeature(feature, item)}>
            { item.name }
            ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(item.cost) })
        </div>
      </li>
    </>
  }
}

export default Option;