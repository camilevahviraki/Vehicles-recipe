import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { VehicleByParts } from '../redux/actions';

function getVehicleByParts({ getVehiclesData }) {
  useEffect(() => {
    getVehiclesData();
  }, []);

  return (
    <div>getVehicleByParts</div>
  );
}

const mapDispatchToProps = (dipatch) => ({ getVehiclesData: () => dipatch(VehicleByParts()) });

export default connect(null, mapDispatchToProps)(getVehicleByParts);
