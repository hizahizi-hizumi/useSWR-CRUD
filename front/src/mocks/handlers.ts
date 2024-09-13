import { http, HttpResponse } from 'msw';

const get = http.get('/hello', () => {
  return HttpResponse.json('Hello, world!');
})

export const handlers = [get];