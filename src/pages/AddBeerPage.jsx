import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; //its a hook

const API = 'https://ih-beers-api2.herokuapp.com/beers';

function AddBeerPage() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirstBrewed] = useState('');
  const [brewers_tips, setBrewersTips] = useState('');
  const [attenuation_level, setAttenuationLevel] = useState(undefined);
  const [contributed_by, setContributedBy] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      const requestBody = {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      };
      await axios.post(`${API}/new`, requestBody); //to post info to the API, on the link and what we want to send to it

      navigate('/beers'); //to redirect the user to the /projects page
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='CreateBeer'>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='name'> Name:</label>
        <textarea
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <label htmlFor='tagline'>Tagline:</label>
        <textarea
          name='tagline'
          id='tagline'
          type='text'
          value={tagline}
          onChange={e => setTagline(e.target.value)}
        />
        <label htmlFor='description'>Description:</label>
        <textarea
          name='description'
          id='description'
          type='text'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <label htmlFor='first_brewed'>First Brewed:</label>
        <textarea
          name='first_brewed'
          id='first_brewed'
          type='text'
          value={first_brewed}
          onChange={e => setFirstBrewed(e.target.value)}
        />
        <label htmlFor='brewers_tips'>Brewer's Tips:</label>
        <textarea
          name='brewers_tips'
          id='brewers_tips'
          type='text'
          value={brewers_tips}
          onChange={e => setBrewersTips(e.target.value)}
        />
        <label htmlFor='attenuation_level'>Attenuation Level:</label>
        <textarea
          name='attenuation_level'
          id='attenuation_level'
          type='number'
          value={attenuation_level}
          onChange={e => setAttenuationLevel(e.target.value)}
        />
        <label htmlFor='contributed_by'>Contributed By:</label>
        <textarea
          name='contributed_by'
          id='contributed_by'
          type='text'
          value={contributed_by}
          onChange={e => setContributedBy(e.target.value)}
        />
        <button type='submit'>Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
