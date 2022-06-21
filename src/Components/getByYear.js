import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { VehicleByYear } from '../redux/actions';

function GetByYear({ getVehiclesData }) {
  useEffect(() => {
    getVehiclesData();
  }, []);

  return (
    <div>getByYear</div>
  );
}

const mapDispatchToProps = (dipatch) => ({ getVehiclesData: () => dipatch(VehicleByYear()) });

export default connect(null, mapDispatchToProps)(GetByYear);
