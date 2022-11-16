module.exports = {
  title: "Summer's Blog",
  description: "先相信你自己，然后别人才会相信你",
  base: "/note-blog/",
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ["link", { rel: "icon", href: "/assets/logo.jpg" }],
  ],
  theme: "reco",
  themeConfig: {
    type: "blog",
    logo: "/assets/logo.jpg",
    authorAvatar: "/assets/logo.jpg",
  },
};
