export default {
  async fetch(request, env, ctx) {
    return new Response("Olá! Meu Worker está funcionando.");
  },
};