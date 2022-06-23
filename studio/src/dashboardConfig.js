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
                    "62b4aa8b4996b40f3fe1bd7f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-2-studio-4smbnd64",
                  apiId: "0ba4426c-d178-4f44-9c1d-5283fdf308f3",
                },
                {
                  buildHookId: "62b4aa8bc357030a59e36d82",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-2-web-7wsibp4c",
                  apiId: "4c7feb14-41c5-45c0-852d-6d1ddd0f3024",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jonassvartberg/sanity-gatsby-blog-2",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-2-web-7wsibp4c.netlify.app",
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
