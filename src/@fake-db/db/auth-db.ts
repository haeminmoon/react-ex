import jwt from 'jsonwebtoken';
import mock from '../mock';
import { AxiosRequestConfig } from 'axios';

const jwtConfig = {
	secret: 'some-secret-code-goes-here',
	expiresIn: '2 minute' // A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc)
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

// mock.onGet('/api/auth/access-token').reply(config => {
// 	const data = JSON.parse(config.data);
// 	const { access_token } = data;

// 	try {
// 		const { id } = jwt.verify(access_token, jwtConfig.secret);

// 		const user = _.cloneDeep(authDB.users.find(_user => _user.uuid === id));
// 		delete user.password;

// 		const updatedAccessToken = jwt.sign({ id: user.uuid }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

// 		const response = {
// 			user,
// 			access_token: updatedAccessToken
// 		};

// 		return [200, response];
// 	} catch (e) {
// 		const error = 'Invalid access token detected';
// 		return [401, { error }];
// 	}
// });