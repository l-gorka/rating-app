import { useSearchParams } from 'react-router-dom';

export default function Login() {
  const hash = new URLSearchParams(window.location.hash.slice(1)).get('id_token');
  localStorage.setItem('id_token', hash as string);

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}