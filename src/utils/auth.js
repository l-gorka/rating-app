const config = {
  tokenEndpoint: 'https://rating-app.auth.eu-central-1.amazoncognito.com/oauth2/token',
  clientId: 'cn7l1jgeea6q2lofc5or6pm99',
  clientIdSecret: '1jpla8tn0feeoo6vhbtmhdndr7cig1h15tbihcpogt9p33kmkve9',
  redirectUri: 'http://localhost:5173/login',
};

export async function getTokens(refresh) {
  const grantType = refresh ? 'refresh_token' : 'authorization_code';
  const body = {
    grant_type: grantType,
    code: localStorage.getItem('auth_code'),
    redirect_uri: config.redirectUri,
    client_id: config.clientId,
  };

  if (refresh) {
    body.refresh_token = localStorage.getItem('refresh_token');
  }

  const parsedBody = Object.entries(body)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  try {
    const data = await fetch(config.tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${config.clientId}:${config.clientIdSecret}`)}`, //TODO hide secret key
      },
      body: parsedBody,
    });
    const resp = await data.json();

    localStorage.setItem('id_token', resp.id_token);
    if (refresh) {
      return;
    }
    
    localStorage.setItem('refresh_token', resp.refresh_token);
  } catch (err) {
    console.log(err);
  }
}
