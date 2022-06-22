import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee, faCar, faCarBattery, faCarAlt, faCarSide,
} from '@fortawesome/free-solid-svg-icons';
import { VehicleAllManufacturers } from '../redux/actions';
import '../styles/childPages.css';

function GetAllManufacturers({ getVehiclesData }) {
  const [page, setPage] = useState(0);
  let numPages = 0;
  useEffect(() => {
    getVehiclesData();
  }, []);
  const vehicles = useSelector((state) => state.vehiclesReducer);
  const numOfpages = Math.floor(vehicles.length / 20);
  if (vehicles.length % 20 === 0) {
    numPages = numOfpages;
  } else {
    numPages = numOfpages + 1;
  }

  return (
    <div className="child-page">
      <Link to="../">Home</Link>
      <div className="line" />
      <section className="container-cards">
        {vehicles.slice((page * 20), ((page + 1) * 20)).map((vehicle) => (
          <article key={vehicle.Mfr_ID} className="card">
            <FontAwesomeIcon icon={faCar} />
            <h3>{vehicle.Mfr_CommonName}</h3>
            <p>{vehicle.Country}</p>
            <p>{vehicle.Mfr_Name}</p>
          </article>
        ))}
      </section>
      <div className="buttons">
        <h4>
          {page + 1}
          {' '}
          of
          {' '}
          {numPages}
        </h4>
        <button
          className="previous"
          type="button"
          onClick={() => {
            page <= 0 ? setPage(numOfpages) : setPage(page - 1);
          }}
        >
          previous
        </button>
        <button
          className="next"
          type="button"
          onClick={() => {
            page >= numOfpages ? setPage(0) : setPage(page + 1);
          }}
        >
          next page
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dipatch) => (
  { getVehiclesData: () => dipatch(VehicleAllManufacturers()) });

export default connect(null, mapDispatchToProps)(GetAllManufacturers);
