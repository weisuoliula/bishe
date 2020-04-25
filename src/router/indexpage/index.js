export default {
  path: "/index",
  component: _ => import("@pages/indexlist"),
  name: "index",
  meta: {
    flag: true,
    requiredAuth: false
  },
  children: [{
      path: "shouye",
      component: _ => import("@components/shouye"),
      name: "shouye",
      meta: {
        flag: true,
        requireAuth: false
      }
    },
    {
      path: "booklist",
      component: _ => import("@components/booklist"),
      name: "booklist",
      meta: {
        flag: true,
        requireAuth: false
      }
    },
    {
      path: "addbooks",
      component: _ => import("@components/addbooks"),
      name: "addbooks",
      meta: {
        flag: true,
        requireAuth: false
      }
    },
    {
      path: "publishAticle",
      component: _ => import("@components/publishAticle"),
      name: "publishAticle",
      meta: {
        flag: true,
        requireAuth: false
      }
    },
    {
      path: "Aticlelist",
      component: _ => import("@components/articlelist"),
      name: "Aticlelist",
      meta: {
        flag: true,
        requireAuth: false
      },
      children: [{
        path: "articlecontent",
        component: _ => import("@components/articlelist"),
        name: "articlecontent",
        meta: {
          flag: true,
          requireAuth: false
        }
      }]
    },

  ]
}