let routes = [
  {
    path: '/*',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Page.vue') }
    ]
  }
]

// GENERATE LINKS (BUT DON'T, USE _REDIRECTS FILE INSTEAD!!!)

// async function getLinks() {
//   const query = await fetch(
//     'https://api.storyblok.com/v1/cdn/links?token=BQbCs8YukzGveNbBLlyoSgtt'
//   )
//   const data = await query.json()
//   const links = data.links
//   for (var key in links) {
//     if (links.hasOwnProperty(key)) {
//       this.$router.push({
//         path: links[key].real_path,
//         component: () => import('layouts/MyLayout.vue'),
//         children: [
//           { path: '', component: () => import('pages/Page.vue') }
//         ]
//       })
//     }
//   }
// }

export default routes
