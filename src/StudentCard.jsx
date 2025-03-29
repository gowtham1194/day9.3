import React from 'react';


const StudentCard = ({ name, grade, subject,  }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Grade: {grade}</p>
        <p className="card-text">Subject: {subject}</p>
        <button className="btn btn-primary">View Profile</button>
      </div>
    </div>
  );
};

export default StudentCard;