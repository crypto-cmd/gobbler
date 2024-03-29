import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {

  return {
    title: 'Hello world!',
    content: 'Welcome to game with id: ' + params.id
  }
}) satisfies PageLoad;
