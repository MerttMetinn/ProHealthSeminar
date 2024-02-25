import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ldap from 'ldapjs';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  
  const handleLogin = async () => {
    const client = ldap.createClient({
      url: 'ldap://your-ldap-server',
    });

    const dn = `uid=${username},ou=users,dc=example,dc=com`;

    client.bind(dn, password, (err) => {
      if (err) {
        console.error('LDAP Bağlantı Hatası:', err);
        return;
      }

      console.log('LDAP Bağlantısı Başarılı');
      history.push('/header');
    });
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Kullanıcı Adı:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Şifre:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Giriş Yap
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
