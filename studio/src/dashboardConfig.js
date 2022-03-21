export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62385f96736667174e297ad0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-iitv3nuf",
                  apiId: "7036b037-96ee-4c45-8531-ed0a7a5bcc92",
                },
                {
                  buildHookId: "62385f97805f2718d1300820",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-wvjz3pqt",
                  apiId: "c81077f7-4cfc-4fc8-a1e9-f896dfcc7e2d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ThomasGuy/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-wvjz3pqt.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
