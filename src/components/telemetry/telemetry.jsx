// import { useState } from 'react';

// const ValuesComponent = () => {
//   const [values, setValues] = useState({});

//   const fetchValues = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/get-values'); // Replace with your API URL
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const data = await response.json();
//       setValues(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleFetchClick = () => {
//     fetchValues();
//   };

//   return (
//     <div>
//       <h2>Values:</h2>
//       <p>Value 1: {values.value1}</p>
//       <p>Value 2: {values.value2}</p>
//       {/* Add more values as needed */}
//       <button onClick={handleFetchClick}>Fetch Values</button>
//     </div>
//   );
// };

// export default ValuesComponent;

import { useState, useEffect } from 'react';

const ValuesComponent = () => {
  const [values, setValues] = useState({});
  let altitude_value= values?.location?.altitude;
  let floatAlt = parseFloat(altitude_value)

  const fetchValues = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/telemetry'); // Replace with your API URL
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data)
      setValues(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch data initially when component mounts
    fetchValues();

    // // Polling interval (every 5 seconds in this example)
    // const interval = setInterval(fetchValues, 5000);

    // // Cleanup function to clear interval when component unmounts
    // return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex'>
      <h2>Values:</h2>
      <p>Battery: {values?.battery}</p>
      <p>Longitude: {
       floatAlt
     
      
      }</p>
      <p>Battery: {values?.location?.latitude}</p>
      <p>Longitude: {values?.location?.longitude}</p>
      {/* Add more values as needed */}
    </div>
  );
};

export default ValuesComponent;
