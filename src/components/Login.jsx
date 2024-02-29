import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append('username', 'baum.cc');
    formData.append('pass', 'ChangeMe@1');
    formData.append('username', username);
    formData.append('pass', password);

    try {
      const response = await axios.post('http://192.168.2.16:8181/login_ldap', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      if (username === 'baum.cc' && password === 'ChangeMe@1') {
        console.log('Giriş başarılı!');
      } else {
        console.log('Giriş başarısız!');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
