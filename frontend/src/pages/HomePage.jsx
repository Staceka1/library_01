import { Nav } from '../Navigate'; // Ensure this import path is correct
import RedirectIf from '../Components/Redirect';
import { checkIsLoggedIn } from '../utils/checkIsLoggedIn';

function Homepage() {
  const isLoggedIn = checkIsLoggedIn();

  return (
    <>
      <RedirectIf
        isLoggedIn={!isLoggedIn}
        to='/signin'
      />
      <Nav />
      <div>Homepage</div>
    </>
  );
}

export default Homepage;
