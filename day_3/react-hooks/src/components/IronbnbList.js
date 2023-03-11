import { useEffect, useState } from 'react';
import axios from 'axios';

const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";

function IronbnbList() {
  const [loading, setLoading] = useState(true);
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(apiURL)
      .then((response) => {
        setApartments(response.data)
      }).then(() => {
        setError('');
      }).catch((error) => {
        setError(error.message);
      }).finally(() => {
        setLoading(false);
      })
  }, [])

  return (
    <div>
      <h3>List of apartments</h3>
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}
      {apartments.map(apt => {
        return (
          <div key={apt._id} className="card">
            <img src={apt.img} alt="apartment" />
            <h3>{apt.title}</h3>
            <p>Price: {apt.pricePerDay}</p>
          </div>
        )
      })}
      
    </div>
  );
}

export default IronbnbList;