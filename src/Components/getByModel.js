import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { VehicleByModel } from '../redux/actions';

function GetByModel({ getVehiclesData }) {
  useEffect(() => {
    getVehiclesData();
  }, []);

  return (
    <div className="HomePage">
      <Link to="../">Home</Link>
    </div>
  );
}

const mapDispatchToProps = (dipatch) => ({ getVehiclesData: () => dipatch(VehicleByModel()) });

export default connect(null, mapDispatchToProps)(GetByModel);
