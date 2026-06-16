import { Route, Routes } from 'react-router-dom';

import Cidade from '../views/Cidade/index';
import Pessoa from '../views/Pessoa/index';
import Home from '../views/Home/index';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Pessoa" element={<Pessoa />} />
            <Route path="/Cidade" element={<Cidade />} />
        </Routes>
    );
}