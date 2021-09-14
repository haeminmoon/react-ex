import { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';

import { login } from '../../utils/auth';

function Login() {
  const history = useHistory();

  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");

  const onEmailHandler = (event: any) => {
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event: any) => {
    setPassword(event.currentTarget.value);
  }

  const onSubmitHandler = async (event: any) => {
    event.preventDefault();
    
    /**
     * 로그인 시도
     */
    const isLoggedin = await login(Email, Password);
    if (isLoggedin) {
      history.push('/loggedin');
    }
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
    }}>
  
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="text" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler}/>
        <br />
        <button>Login</button>
      </form>
  
    </div>
  )
}

export default withRouter(Login);
