import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { VehicleAllManufacturers } from '../redux/actions';

function GetAllManufacturers({ getVehiclesData }) {
  useEffect(() => {
    getVehiclesData();
  }, []);

  return (
    <div className="HomePage">
      <Link to="../">Home</Link>
    </div>
  );
}

const mapDispatchToProps = (dipatch) => (
  { getVehiclesData: () => dipatch(VehicleAllManufacturers()) });

export default connect(null, mapDispatchToProps)(GetAllManufacturers);
