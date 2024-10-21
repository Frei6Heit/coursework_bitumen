import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Dashboard from './components/Dashboard'; // Импортируйте компонент личного кабинета

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* Другие маршруты можно добавить здесь */}
            </Routes>
        </Router>
    );
};

export default App;
