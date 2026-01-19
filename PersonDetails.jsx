import React from "react";
import { personsData } from "./data";

// Function to calculate age
const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Check if birthday has occurred this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

const PersonDetails = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Person Details</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {personsData.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.dateOfBirth}</td>
              <td>{calculateAge(person.dateOfBirth)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonDetails;
