import { useContext } from 'react';
import { AuthenticationContext } from '../../../../frontend/src/App';
import { logout } from '../../utils/keycloak';
import * as moment from 'moment';

function Home() {
  const keycloak = useContext(AuthenticationContext);

  const formatDate = (unixTime) => {
    const formattedDate = moment(unixTime * 1000);
    return formattedDate.isValid() ? formattedDate.format('dddd, MMMM Do, YYYY h:mm A') : 'Invalid Date';
  };

  return (
    <>
      {keycloak.authenticated && (
        <>
          <p>{`Id token expires at ` + formatDate(keycloak.idTokenParsed.exp)}</p>
          <p>{`Access token expires at ` + formatDate(keycloak.tokenParsed.exp)}</p>
          <p>{`Refresh token expires at ` + formatDate(keycloak.refreshTokenParsed.exp)}</p>
          <button onClick={() => logout()}>logout</button>
        </>
      )}
    </>
  );
}

export default Home;