import { http, HttpResponse } from 'msw'

import { categoriesList } from './data'

const addLatency = async () => new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 5000)))

export const handlers = [
    http.get('http://127.0.0.1:3000/api/categories', async(req) => {
      await addLatency()
      return HttpResponse.json(categoriesList.map(({id, title, image}) => ({id, title, image})))
    }),

    http.get('http://127.0.0.1:3000/api/category/:id', async({params}) => {
      await addLatency()
      try {
        const category = categoriesList.find(({id}) => id === parseInt(params.id as string))
        return HttpResponse.json(category)
      } catch (error) {
        return HttpResponse.json({error})
      }
    }),
]