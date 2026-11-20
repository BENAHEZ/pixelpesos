// Manda a pixeltlan.com a quien entre por pixeltlan.pages.dev, pixelpesos.pages.dev o www (redirección 301).
// Cloudflare Pages ejecuta este archivo (Pages Functions) antes de servir cada página.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname !== 'pixeltlan.com') {
    url.hostname = 'pixeltlan.com';
    url.protocol = 'https:';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
