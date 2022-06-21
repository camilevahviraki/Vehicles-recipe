import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { VehicleByNameAndYear } from '../redux/actions';

function GetByNameAndYear({ getVehiclesData }) {
  useEffect(() => {
    getVehiclesData();
  }, []);

  return (
    <div>getByNameAndYear</div>
  );
}

const mapDispatchToProps = (dipatch) => ({ getVehiclesData: () => dipatch(VehicleByNameAndYear()) });

export default connect(null, mapDispatchToProps)(GetByNameAndYear);
