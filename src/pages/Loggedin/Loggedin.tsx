import Attachment from '~/components/Attachment';

import { useHistory, withRouter } from 'react-router-dom';
import { logout } from '../../utils/auth';

function Loggedin() {
  const history = useHistory();

  const onLogoutHandler = () => {
    logout();
    history.push('/login')
  }

  return (
    <div>
      <button onClick={onLogoutHandler}>
        로그아웃
      </button>

      <br /><br /><br />
      
      <Attachment />
    </div>

  );
}

export default withRouter(Loggedin);
