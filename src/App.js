import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Restaurants from './components/restaurants/Restaurants';
import RestaurantDetails from './components/restaurants/RestaurantDetails';
import RestaurantNewForm from './components/restaurants/RestaurantNewForm';
import RestaurantUpdateForm from './components/restaurants/RestaurantUpdateForm';
import Reservations from './components/reservations/Reservations'
import ReservationDetails from './components/reservations/ReservationDetails'
import ReservationNewForm from './components/reservations/ReservationNewForm'

function App() {
  return (
    <div className="App">
      Welcome to OpenRez

      <Router>
        <Routes>
          <Route path="/" element={null} />
          {/* Restaurants */}
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route path="/restaurants/new" element={<RestaurantNewForm />} />
          <Route path="/restaurant/:id/edit" element={<RestaurantUpdateForm />} />
          {/* Reservations */}
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reservations/:id" element={<ReservationDetails />} />
          <Route path="/reservations/new" element={<ReservationNewForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
