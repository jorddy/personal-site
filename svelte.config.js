import Static from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: Static({
      fallback: '500.html'
    }),
    target: '#svelte'
  }
};

export default config;
