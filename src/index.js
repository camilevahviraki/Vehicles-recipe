import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './redux/Store';
import './index.css';
import GetAllManufacturers from './Components/getAllManufacturers';
import GetByModel from './Components/getByModel';
import GetByModelForMake from './Components/getByModelForMake';
import GetByName from './Components/getByName';
import GetByNameAndYear from './Components/getByNameAndYear';
import GetByTypesForMake from './Components/getByTypesForMake';
import GetByYear from './Components/getByYear';
import GetCanadians from './Components/getCanadians';
import GetMakesByName from './Components/getMakesByName';
import GetModelByMakeId from './Components/getModelByMakeId';
import GetTypeByName from './Components/getTypeByName';
import GetVariablesList from './Components/getVariablesList';
import GetVariablesValues from './Components/getVariablesValues';
import GetVehicleByParts from './Components/getVehicleByParts';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="GetAllManufacturers" element={<GetAllManufacturers />} />
        <Route path="GetByModel" element={<GetByModel />} />
        <Route path="GetByModelForMakel" element={<GetByModelForMake />} />
        <Route path="GetByName" element={<GetByName />} />
        <Route path="GetByNameAndYear" element={<GetByNameAndYear />} />
        <Route path="GetByTypesForMake" element={<GetByTypesForMake />} />
        <Route path="GetByYear" element={<GetByYear />} />
        <Route path="GetCanadians" element={<GetCanadians />} />
        <Route path="GetMakesByName" element={<GetMakesByName />} />
        <Route path="GetVariablesList" element={<GetVariablesList />} />
        <Route path="GetVariablesValues" element={<GetVariablesValues />} />
        <Route path="GetVehicleByParts" element={<GetVehicleByParts />} />
        <Route path="GetModelByMakeId" element={<GetModelByMakeId />} />
        <Route path="GetTypeByName" element={<GetTypeByName />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
