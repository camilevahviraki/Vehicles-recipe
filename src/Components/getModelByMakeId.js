import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { VehicleModelByMakeId } from '../redux/actions';

function GetModelByMakeId({ getVehiclesData }) {
  useEffect(() => {
    getVehiclesData();
  }, []);

  return (
    <div>getModelByMakeId</div>
  );
}

const mapDispatchToProps = (dipatch) => ({ getVehiclesData: () => dipatch(VehicleModelByMakeId()) });

export default connect(null, mapDispatchToProps)(GetModelByMakeId);
