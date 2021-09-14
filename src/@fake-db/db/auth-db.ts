import jwt from 'jsonwebtoken';
import mock from '../mock';
import { AxiosRequestConfig } from 'axios';

const jwtConfig = {
	secret: 'some-secret-code-goes-here',
	expiresIn: '120 second' // A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc)
};

const authDB = {
	users: [
		{
			uuid: 'XgbuVEXBU5gtSKdbQRP1Zbbby1i1',
      from: 'custom-db',
      email: 'admin1',
			password: 'admin1',
			role: 'admin',
		},
		{
			uuid: 'XgbuVEXBU6gtSKdbTYR1Zbbby1i3',
      from: 'custom-db',
      email: "user1",
			password: 'user1',
      role: 'user',
    }
	]
};

mock.onGet('/api/login').reply((config: AxiosRequestConfig) => {  
	const data = JSON.parse(config.data);
	const { email, password } = data;

  const user = authDB.users.find(_user => _user.email === email);
	const error = {
		email: user ? null : 'Check your username/email',
		password: user && user.password === password ? null : 'Check your password'
  };
  
	if (!error.email && !error.password) {
		const accessToken = jwt.sign({ id: user?.uuid }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

		const response = {
			user,
			accessToken
		};

		return [200, response];
  }
  
	return [200, { error }];
});

mock.onGet('/api/auth').reply((config: AxiosRequestConfig) => {
  const data = JSON.parse(config.data);
  const { accessToken } = data;

  if (!!accessToken) {
    const { id }: any = jwt.verify(accessToken, jwtConfig.secret);
    const user = authDB.users.find(_user => _user.uuid === id);

    // 토큰 리프레시 기준
    // const updatedAccessToken = jwt.sign({ id: user?.uuid }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

    const response = {
      user,
      // accessToken: updatedAccessToken
    };

    return [200, response];
  } else {
    return [200, {}]
  }
  
});