import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const API = 'https://ih-beers-api2.herokuapp.com/beers';

function RandomBeerPage() {
  const [beer, setBeer] = useState([]);

  const getBeer = async () => {
    try {
      const response = await axios.get(`${API}/random`);
      setBeer(response.data);
      //   console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <>
      {!beer && 'Loading...'}

      {beer && (
        <div>
          <img src={beer.image_url} alt='beer_image' className='beer-img' />
          <div className='details'>
            <h3>{beer.name}</h3>
            <h4>{beer.tagline}</h4>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default RandomBeerPage;
