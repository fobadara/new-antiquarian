import { Link } from 'react-router-dom';
import person from '../images/person.png';

const Header = () => {
  const nav = {
    color: 'black',
    marginRight: '1em',
  };

  return (
    <header className="section container flex">
      <div className="container-2 cont-header flex">
        <div>
          <Link className="company-logo" style={{ color: '#0290ff' }} to="/"><h1>Antiquarian</h1></Link>
        </div>
        <nav className="flex" style={{ margin: '2.3em 1.3em' }}>
          <Link className="company-logo" style={{ fontSize: '0.8em', color: 'rgba(0, 0, 0, 0.8)' }} to="/">Books</Link>
          <Link className="company-logo" style={{ fontSize: '0.8em', marginLeft: '1em', color: 'rgba(0, 0, 0, 0.2)' }} to="categories">Categories</Link>
        </nav>
      </div>
      <img className="icon" src={person} alt="user-icon" />
    </header>
  );
};

export default Header;
