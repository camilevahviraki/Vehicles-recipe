import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { VehicleTypeByName } from '../redux/actions';

function GetTypeByName({ getVehiclesData }) {
  useEffect(() => {
    getVehiclesData();
  }, []);

  return (
    <div>getTypeByName</div>
  );
}

const mapDispatchToProps = (dipatch) => ({ getVehiclesData: () => dipatch(VehicleTypeByName()) });

export default connect(null, mapDispatchToProps)(GetTypeByName);
