import { Button } from '@nextui-org/react';
import RouteTransition from '../../components/transition/RouteTransition';

import axiosInstance from 'src/api';

export default function Categories() {
  const getData = async () => {
    const resp = axiosInstance.get('https://soxcn79a59.execute-api.eu-central-1.amazonaws.com/items');

    console.log(resp);
  }

  return (
    <RouteTransition compKey="1">
      <a href="https://rating-app.auth.eu-central-1.amazoncognito.com/login?client_id=4fgv00rc3j02rjckqahe1797k9&response_type=token&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Flogin">Login</a>

      <Button onClick={getData}>fetch items</Button>
      <p className="text-7xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis fugiat consectetur cum cumque hic
        voluptate itaque, placeat recusandae aliquid facilis perspiciatis quasi blanditiis, nulla reiciendis porro
        corrupti! Quis, ab in nihil ea modi blanditiis suscipit rem ipsa possimus mollitia odit porro iusto sint cumque,
        recusandae quo sapiente nisi quia.
      </p>
    </RouteTransition>
  );
}
