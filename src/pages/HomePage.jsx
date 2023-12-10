import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <div className='home-page-section'>
        <Link to={'/beers'}>
          <img
            src='src/assets/beers.png'
            alt='All_beers'
            className='home-img'
          />
        </Link>
        <h2>All Beers</h2>
        <p>Click on the image to see all the beers available!</p>
      </div>
      <br />
      <div className='home-page-section'>
        <Link to={'/random-beer'}>
          <img
            src='src/assets/random-beer.png'
            alt='Random-beer'
            className='home-img'
          />
        </Link>
        <h2>Random Beer</h2>
        <p>Click on the image to choose a random beer from the list!</p>
      </div>
      <br />
      <div className='home-page-section'>
        <Link to={'/new-beer'}>
          <img
            src='src/assets/new-beer.png'
            alt='New-beer'
            className='home-img'
          />
        </Link>
        <h2>New Beer</h2>
        <p>Click on the image to insert a new beer on the list.</p>
      </div>
      <br />
    </div>
  );
}

export default HomePage;
