import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { VehicleByName } from '../redux/actions';

function GetByName({ getVehiclesData }) {
  useEffect(() => {
    getVehiclesData();
  }, []);

  return (
    <div>getByName</div>
  );
}

const mapDispatchToProps = (dipatch) => ({ getVehiclesData: () => dipatch(VehicleByName()) });

export default connect(null, mapDispatchToProps)(GetByName);
