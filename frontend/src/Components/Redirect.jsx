import { Navigate } from 'react-router-dom';

// Props might include a target route and a condition for redirecting
const RedirectIf = ({ isLoggedIn, to }) => {
  if (isLoggedIn) {
    return (
      <Navigate
        to={to}
        replace={true}
      />
    );
  }

  return null; // Render nothing if no redirect is needed
};

export default RedirectIf;
