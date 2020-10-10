import React from 'react';
import axios from 'axios';
import '../../res/css/forms.css';

export const LoginPage: React.FC = () => {
	const [message, setMessage] = React.useState('');
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');

	const tryLogin = () =>
	{
		axios.post('http://127.0.0.1:9000/user/login', {
				user: {
					username: username,
					password: password,
				}
			})
			.then((result) => {		
				console.log(result);
				console.log(result.data.isSuccess)	
				if (result.data.isSuccess)
				{
					console.log('Connected to server successfully.');
					//find a way to set cache for session id
					setMessage("Login Successful.")
				}
				else
				{
					setMessage("Invalid username/password combination.")
				}
			})
			.catch((err) => {
				setMessage("Something unexpected happened on the server.")
				console.log(err.toString());
			});
	}

	return (
	<div className="form-div">
		
			<div>
				<h2>Login</h2>
				<label htmlFor="email">Email</label>
				<br />
				<input 
					type="email"
					size={50}
					name="email"
					value={username}
					onChange={e => setUsername(e.target.value)}
					required
				/>
			</div>

			<br />

			<div>
				<label htmlFor="Password">Password</label>
				<br />
				<input 
					type="password"
					size={50}
					name="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
			</div>

			<br />

			<button onClick={() => tryLogin()}>
				Login
			</button>

			{message != '' &&
				<label>{message}</label>
			}
		
	</div>
	);
};
