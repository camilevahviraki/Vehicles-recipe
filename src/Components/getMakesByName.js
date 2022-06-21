import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { VehicleMakesByName } from '../redux/actions';

function GetMakesByName({ getVehiclesData }) {
  useEffect(() => {
    getVehiclesData();
  }, []);

  return (
    <div>getMakesByName</div>
  );
}

const mapDispatchToProps = (dipatch) => ({ getVehiclesData: () => dipatch(VehicleMakesByName()) });

export default connect(null, mapDispatchToProps)(GetMakesByName);
