import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { VehicleVariablesList } from '../redux/actions';

function GetVariablesList({ getVehiclesData }) {
  useEffect(() => {
    getVehiclesData();
  }, []);

  return (
    <div>getVariablesList</div>
  );
}

const mapDispatchToProps = (dipatch) => ({ getVehiclesData: () => dipatch(VehicleVariablesList()) });

export default connect(null, mapDispatchToProps)(GetVariablesList);
