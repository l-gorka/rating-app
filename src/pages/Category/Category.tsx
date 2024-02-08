import { useParams } from 'react-router-dom';

import RouteTransition from '../../components/transition/RouteTransition';
import CardsView from 'src/components/ui/CardsView';

import client from 'src/api'
import { listItems } from 'src/graphql/queries';
import { useEffect, useState } from 'react';

export default function Category() {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await client.graphql({
        query: listItems,
        variables: {
          filter: {
            categoryItemsId: {eq: params.id}
          }
        }
      });
      console.log(res)
      setData(res.data.listItems.items);
    }

    getData();
  }, [])
  return (
    <RouteTransition compKey="1">
      <CardsView isLoading={false} items={data} />
    </RouteTransition>
  );
}
