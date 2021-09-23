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
                    "614bd470a307186fe3a60be8",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-tyupf4cd",
                  apiId: "47b7470e-c2a2-45ca-8f37-25d120529e26",
                },
                {
                  buildHookId: "614bd4707db188aaa09102e6",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-e2mttofb",
                  apiId: "95fc1ec8-0cff-4097-8650-963ec902e3ce",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/apptekgroup/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-e2mttofb.netlify.app",
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
