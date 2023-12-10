import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API = 'https://ih-beers-api2.herokuapp.com/beers';

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);

  const getAllBeers = async () => {
    try {
      const response = await axios.get(`${API}/`);
      setAllBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterBeers = async query => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
      );
      setAllBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  return (
    <div>
      <div>
        <h2>Search</h2>
        <input
          type='text'
          onChange={e => filterBeers(e.target.value)}
          placeholder='Type'
        />
      </div>

      <br />

      {allBeers.map(beer => {
        return (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`} className='beers'>
              <img src={beer.image_url} alt='beer_image' className='beer-img' />
              <div className='details'>
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </Link>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
