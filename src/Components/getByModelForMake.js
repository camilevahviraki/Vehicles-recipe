import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { VehicleByModelForMake } from '../redux/actions';

function GetByModelForMake({ getVehiclesData }) {
  useEffect(() => {
    getVehiclesData();
  }, []);

  return (
    <div>getByModelForMake</div>
  );
}

const mapDispatchToProps = (dipatch) => ({ getVehiclesData: () => dipatch(VehicleByModelForMake()) });

export default connect(null, mapDispatchToProps)(GetByModelForMake);
