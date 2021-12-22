const fs = require("fs/promises");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

(async () => {
  const feed = new RSS({
    title: "Miguel Martinez - Desarrollo y Formación JavaScript",
    description:
      "Tutoriales de Programación y desarrollo web con JavaScript, React, Node.js y más",
    site_url: "https://yotsuya.vercel.app",
    feed_url: "https://yotsuya.vercel.app/rss.xml",
    webMaster: "Miguel Martinez",
    copyright: `2011-${new Date().getFullYear} Miguel `,
    language: "es",
  });

  const posts = await fs.readdir(path.join(__dirname, "..", "data", "posts"));

  await Promise.all(
    posts.map(async (file) => {
      const content = await fs.readFile(
        path.join(__dirname, "..", "data", "posts", file)
      );
      const frontmatter = matter(content);
      const item = {
        title: frontmatter.data.title,
        url: `https://yotsuya.vercel.app/${file.replace(/\.mdx?/, "")}`,
        date: frontmatter.data.date,
      };
      if (frontmatter.data?.summary) {
        item.description = frontmatter.data.summary;
      }
      if (frontmatter.data?.tags) {
        item.categories = frontmatter.data.tags;
      }

      feed.item(item);
    })
  );

  await fs.writeFile("./public/rss.xml", feed.xml({ indent: true }));
  console.log(`🚀 RSS Genearated for ${posts.length} posts`);
})();