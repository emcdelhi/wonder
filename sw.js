/* WONDER Mobile: no offline copy of data – every request goes to the shop server */
self.addEventListener('install',e=>self.skipWaiting());self.addEventListener('activate',e=>self.clients.claim());self.addEventListener('fetch',()=>{});
