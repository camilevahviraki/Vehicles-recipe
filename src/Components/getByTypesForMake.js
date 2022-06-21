import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { VehicleByTypesForMake } from '../redux/actions';

function GetByTypesForMake({ getVehiclesData }) {
  useEffect(() => {
    getVehiclesData();
  }, []);

  return (
    <div>getByTypesForMake</div>
  );
}

const mapDispatchToProps = (dipatch) => ({ getVehiclesData: () => dipatch(VehicleByTypesForMake()) });

export default connect(null, mapDispatchToProps)(GetByTypesForMake);
