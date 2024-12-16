import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Catalog } from './components/Catalog';
import { Inventory } from './components/Inventory';
import { ApplicationPaths } from './components/Constants';

import './App.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={ApplicationPaths.CatalogPath} element={<Catalog />} />
          <Route path={ApplicationPaths.InventoryPath} element={<Inventory />} />
        </Routes>
      </Layout>
    );
  }
}
