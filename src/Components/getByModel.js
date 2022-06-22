import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { VehicleByModel } from '../redux/actions';

function GetByModel({ getVehiclesData }) {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
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

  const dropvalue = (e) => {
    setSearch(e.target.value);

    console.log(search);
  };

  return (
    <div className="child-page">
      <Link to="../">Home</Link>
      <div className="line" />
      <input type="search" onChange={dropvalue} />
      <section className="container-cards">
        {vehicles.slice((page * 20), ((page + 1) * 20)).map((vehicle) => (
          <article key={vehicles.indexOf(vehicle)} className="card">
            <FontAwesomeIcon icon={faCarSide} />
            <h3>{vehicle.Make_Name}</h3>
            <p>{vehicle.Model_Name}</p>
            <p>{vehicle.Model_ID}</p>
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

const mapDispatchToProps = (dipatch) => ({ getVehiclesData: () => dipatch(VehicleByModel()) });

export default connect(null, mapDispatchToProps)(GetByModel);
