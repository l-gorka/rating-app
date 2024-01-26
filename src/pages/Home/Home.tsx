import { Button } from '@nextui-org/react';
import RouteTransition from '../../components/transition/RouteTransition';

import { loginUri } from 'src/consts';

import axiosInstance from 'src/api';

export default function Categories() {
  const getData = async () => {
    const resp = axiosInstance.get('https://soxcn79a59.execute-api.eu-central-1.amazonaws.com/items');

    console.log(resp);
  }

  return (
    <RouteTransition compKey="1">
      <a href={loginUri}>Login</a>

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
