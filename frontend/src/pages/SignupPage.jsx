import SignupForm from '../Components/SignupForm';
import RedirectIf from '../Components/Redirect';
import { checkIsLoggedIn } from '../utils/checkIsLoggedIn';

function Signuppage() {
  const isLoggedIn = checkIsLoggedIn();
  return (
    <div>
      <RedirectIf
        isLoggedIn={isLoggedIn}
        to='/'
      />

      <SignupForm />
    </div>
  );
}

export default Signuppage;
