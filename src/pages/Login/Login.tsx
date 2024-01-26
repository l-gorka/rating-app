import { useEffect } from 'react';
import { getTokens } from 'src/utils/auth';

import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    async function onLogin() {
      const code = new URLSearchParams(window.location.search).get('code');
      console.log('code', code);
      localStorage.setItem('auth_code', code as string);
      const accessToken = localStorage.getItem('id_token');

      if (!accessToken) {
        await getTokens(false);
        navigate('/');
      }
    }

    onLogin();
  }, []);

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
