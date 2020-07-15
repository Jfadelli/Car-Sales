import React from 'react';
import { connect } from 'react-redux'
import { updateFeatures } from '../actions/carActions'

const AdditionalFeature = props => {
  return (
    <div>
      <li>
        {/*Add an onClick that will let you add a feature to your car*/}
        <button onClick={props.add(props.feature)} className="button" > Add</button>
        {props.feature.name} (+{props.feature.price})
    </li>
    </div>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    features: state.car.features
  }
}

export default connect(() =>
  mapStateToProps,
  { updateFeatures }
)(AdditionalFeature);

