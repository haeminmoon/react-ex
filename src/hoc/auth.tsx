import { LoadableComponent } from '@loadable/component';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, logout, isAuthTokenValid, getAccessToken } from '../utils/auth';

export default function(SpecComponent: LoadableComponent<{}>, option: boolean | null) {
  function AuthCheck(props: {
    component: LoadableComponent<{}>,
    option: boolean | null
  }) {
    const history = useHistory();

    useEffect(() => {
      if (!isAuthTokenValid(getAccessToken())) {
        logout();
        history.push('/login');
      }

      auth()
        .then(response => {
          if (!response.user) {
            // 로그인 하지 않은 상태
            if (option) {
              history.push('/login');
            }
          } else {
            // 로그인 한 상태
            if (option === false) {
              history.push('/loggedin');
            }
          }
        })
        .catch(error => {
          console.log(error)
        })
    }, [])

    return (
      <SpecComponent />
    )
  }
  
  return AuthCheck
} 