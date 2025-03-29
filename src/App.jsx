import React from 'react';
import StudentCard from './StudentCard';


const App = () => {
  const students = [
    { name: 'John Doe', grade: 'A', subject: 'Math',  },
    { name: 'Jane Smith', grade: 'B', subject: 'Science',  },
    { name: 'Emily Johnson', grade: 'A+', subject: 'English',  },
    { name: 'Emily Johnson', grade: 'A+', subject: 'English',  },
    { name: 'Emily Johnson', grade: 'A+', subject: 'English',  },
  ];

  return (
    <div className="container">
      <div className="row mt-5">
        {students.map((student, index) => (
          <div className="col-md-4 col-lg-3 mb-2" key={index}>
            <StudentCard
              name={student.name}
              grade={student.grade}
              subject={student.subject}
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App; 