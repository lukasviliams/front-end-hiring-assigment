export default defineNuxtRouteMiddleware((to) => {
  const id = to.params.id
  if (!id || isNaN(Number(id))) {
    return navigateTo('/404');
  }
});