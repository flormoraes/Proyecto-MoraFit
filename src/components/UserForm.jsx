// acá voy a hacer todo lo relacionado al form del usuario 


import React, { useState } from 'react';
import "../components-styles/finalUserForm.css"

const UserForm = ({ name, setName, phone, setPhone, email, setEmail }) => {
  const [confirmEmail, setConfirmEmail] = useState("");

  // verificamos si el mail coincide :)
  const isEmailMatch = email === confirmEmail;

  return (
    <form className= "UserForm">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Repetir correo electrónico"
        value={confirmEmail}
        onChange={(e) => setConfirmEmail(e.target.value)}
        required
      />
      {!isEmailMatch && confirmEmail && (
        <p style={{ color: 'red' }}>Los correos electrónicos no coinciden, por favor, intentar nuevamente</p>
      )}
    </form>
  );
};

export default UserForm;
