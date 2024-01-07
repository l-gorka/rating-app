import { http, HttpResponse } from 'msw';

import { categoriesList } from './data';

const addLatency = async () => new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 1000)));

const getCategories = () => (localStorage.getItem('categories') ? JSON.parse(localStorage.getItem('categories')!) : []);

const addCategory = (category: any) => {
  const categories = getCategories();
  const nameAlreadyExists = categories?.find((c: any) => c.name === category.name);

  if (nameAlreadyExists) {
    throw new Error('Category already exists');
  }

  categories.push({...category, items: [], id: Math.floor(Math.random() * 1000000000)});
  localStorage.setItem('categories', JSON.stringify(categories));
};

export const handlers = [
  http.get('http://127.0.0.1:3000/api/categories', async (req) => {
    await addLatency();
    return HttpResponse.json(getCategories());
  }),

  http.get('http://127.0.0.1:3000/api/category/:id', async ({ params }) => {
    await addLatency();
    try {
      const category = categoriesList.find(({ id }) => id === parseInt(params.id as string));
      return HttpResponse.json(category);
    } catch (error) {
      return HttpResponse.json({ error });
    }
  }),
  http.post('http://127.0.0.1:3000/api/add-category', async ({ request }) => {
    await addLatency();
    const data = await request.json();

    try {
      addCategory(data);
      return HttpResponse.json(data);
    } catch (error) {
      return HttpResponse.json({ error: (error as Error).message }, { status: 400 });
    }
  }),
];
