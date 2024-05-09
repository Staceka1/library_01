import SigninForm from '../Components/SigninForm';
import RedirectIf from '../Components/Redirect';
import { checkIsLoggedIn } from '../utils/checkIsLoggedIn';

function Signinpage() {
  const isLoggedIn = checkIsLoggedIn();

  return (
    <div>
      <RedirectIf
        isLoggedIn={isLoggedIn}
        to='/'
      />

      <SigninForm />
    </div>
  );
}

export default Signinpage;
