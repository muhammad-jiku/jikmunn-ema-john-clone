import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

function Shipment() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [error, setError] = useState('');

  const [user] = useAuthState(auth);

  const handleDisplayNameBlur = (e) => {
    setDisplayName(e.target.value);
  };

  const handleAddressBlur = (e) => {
    setAddress(e.target.value);
  };

  const handleContactNumberBlur = (e) => {
    setContactNumber(e.target.value);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();

    const shipping = { displayName, email, address, contactNumber };
    console.log(shipping);
    // setEmail('');
    setAddress('');
    setContactNumber('');
  };

  return (
    <div className="formContainer">
      <div>
        <h1 className="formTitle">Shippment Details</h1>
        <form onSubmit={handleCreateUser}>
          <div className="inputGroup">
            <label htmlFor="displayName">Name</label>
            <input
              type="text"
              name="displayName"
              id="displayName"
              onBlur={handleDisplayNameBlur}
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={user?.email}
              readOnly
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              onBlur={handleAddressBlur}
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              id="contactNumber"
              onBlur={handleContactNumberBlur}
              required
            />
          </div>
          <input className="formSubmit" type="submit" value="Add Shipping" />
        </form>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
    </div>
  );
}

export default Shipment;
