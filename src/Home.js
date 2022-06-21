import { Link } from 'react-router-dom';

const Home = () => (
  <div className="HomePage">
    <Link to="./GetAllManufacturers">AllManufacturers</Link>
    <Link to="./GetByModel">Models</Link>
    <Link to="./GetByModelForMakel">Get by Model For Make Id</Link>
    <Link to="./GetByName">Display By Names</Link>
    <Link to="./GetByNameAndYear">Show by Name and year</Link>
    <Link to="./GetByTypesForMake">Get by types for Make</Link>
    <Link to="./GetByYear">Get by year</Link>
    <Link to="./GetCanadians">Canadian Vehicles</Link>
    <Link to="./GetMakesByName">Makes and Names</Link>
    <Link to="./GetVariablesList">Variables List</Link>
    <Link to="./GetVariablesValues">variables Values</Link>
    <Link to="./GetVehicleByParts">Vehicle by parts</Link>
    <Link to="./GetModelByMakeId">Model by Makeid</Link>
    <Link to="./GetTypeByName">Types by name</Link>
  </div>
);

export default Home;
