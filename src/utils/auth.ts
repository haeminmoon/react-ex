import jwtDecode from 'jwt-decode';
import { getStorageItem, setStorageItem ,STORAGE_ITEMS } from './localStorage';

import axiosClient from '../libs/axiosClient';

export async function login(email: string, password: string) {
  const response = await axiosClient.get('/api/login', {
    data: {
      email: email,
      password: password
    }
  });

  /**
   * 로그인 성공시, accessToken이 발급되며 이를 분기한다.
   */
  if (!!response.data.accessToken) {
    setStorageItem(STORAGE_ITEMS.TOKEN, response.data.accessToken);
    // axiosClient.defaults.headers.common.Authorization = `Bearer ${access_token}`;

    return true;
  } else {
    setStorageItem(STORAGE_ITEMS.TOKEN, null);
    // delete axiosClient.defaults.headers.common.Authorization;

    if (!!response.data.error.email) {
      alert(response.data.error.email);
    } else {
      alert(response.data.error.password);
    }

    return false;
  }
}

export function logout() {
  setStorageItem(STORAGE_ITEMS.TOKEN, null);
};

export function isAuthTokenValid(access_token: string) {
  if (!access_token) {
    return false;
  }
  const decoded: any = jwtDecode(access_token);
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    console.warn('Access token expired');
    return false;
  }

  return true;
}

export function getAccessToken() {
  return getStorageItem(STORAGE_ITEMS.TOKEN);
};

export function authHeader() {
  const token = getStorageItem(STORAGE_ITEMS.TOKEN);

  return token ? `Bearer ${token}` : '';
}
