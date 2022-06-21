import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { VehicleVariablesValues } from '../redux/actions';

function GetVariablesValues({ getVehiclesData }) {
  useEffect(() => {
    getVehiclesData();
  }, []);

  return (
    <div>getVariablesValues</div>
  );
}

const mapDispatchToProps = (dipatch) => (
  { getVehiclesData: () => dipatch(VehicleVariablesValues()) });

export default connect(null, mapDispatchToProps)(GetVariablesValues);
