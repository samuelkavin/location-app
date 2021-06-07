import React from 'react';
import LocationPage from './components/locations/LocationPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="Container">
        <LocationPage />
        <ToastContainer position="top-left" autoClose={3000} hideProgressBar />
      </div>
    );
  }
}

export default App;
