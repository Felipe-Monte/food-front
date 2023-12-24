import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';

import { DishDetails } from '../pages/DishDetails';
import { AddDish } from '../pages/AddDish';
import { EditDish } from '../pages/EditDish';
import { NotFound } from '../pages/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path='/details/:id' element={<DishDetails />} />
      <Route path='/edit/:id' element={<EditDish />} />
      <Route path='/add' element={<AddDish />} />
      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}