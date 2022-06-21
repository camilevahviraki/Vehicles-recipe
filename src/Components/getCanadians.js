import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { VehicleCanadians } from '../redux/actions';

function GetCanadians({ getVehiclesData }) {
  useEffect(() => {
    getVehiclesData();
  }, []);

  return (
    <div>getCanadians</div>
  );
}

const mapDispatchToProps = (dipatch) => ({ getVehiclesData: () => dipatch(VehicleCanadians()) });

export default connect(null, mapDispatchToProps)(GetCanadians);
