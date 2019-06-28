import React from "react";
import SummaryOption from "./SummaryOption";
import Total from "./Total";

class Summary extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map(feature => (
      <SummaryOption
        key={feature}
        feature={feature}
        name={this.props.selected[feature].name}
        cost={this.props.selected[feature].cost}
      />
    ));

    

    return (
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        {summary}
        <Total selected={this.props.selected}/>
        
      </section>
    );
  }
}

export default Summary;
