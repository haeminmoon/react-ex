import type { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';

const axiosClient = axios.create();

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (err: AxiosError) => {
    return new Promise((resolve, reject) => {
      if (err.response?.status === 401 && err.config) {
        // 권한 에러 시, 처리코드
      }
      throw err;
    });
  }
);

export default axiosClient;