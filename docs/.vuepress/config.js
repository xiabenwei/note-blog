module.exports = {
  title: "VuePress",
  description: "Just playing around",
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
    logo: "/assets/logo.jpg",
  },
};
