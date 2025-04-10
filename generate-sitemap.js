const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream, writeFileSync } = require("fs");
const { resolve } = require("path");
const { default: ajaxCall } = require("./src/helpers/ajaxCall");

const BASE_URL = "https://anantsoftcomputing.com/";
const API_BASE_URL = "";

async function generateSitemap() {
  try {
    const sitemap = new SitemapStream({ hostname: BASE_URL });
    const sitemapPath = resolve(__dirname, "public", "sitemap.xml");
    const writeStream = createWriteStream(sitemapPath);

    writeStream.on("error", (err) => {
      console.error("Error writing sitemap file:", err);
    });

    const staticLinks = [
      { url: "/", changefreq: "daily", priority: 1.0 },
      { url: "/about", changefreq: "daily", priority: 0.8 },
      { url: "/services", changefreq: "daily", priority: 0.8 },
      { url: "/services/seo", changefreq: "daily", priority: 0.8 },
      { url: "/services/crm", changefreq: "daily", priority: 0.8 },
      { url: "/services/mobile", changefreq: "daily", priority: 0.8 },
      { url: "/services/custom", changefreq: "daily", priority: 0.8 },
      { url: "/portfolio", changefreq: "daily", priority: 0.8 },
      { url: "/contact", changefreq: "daily", priority: 0.8 },
      { url: "/careers", changefreq: "daily", priority: 0.8 },
      { url: "/blog", changefreq: "daily", priority: 0.9 },
      { url: "/privacy-policy", changefreq: "yearly", priority: 0.5 },
    ];

    staticLinks.forEach((link) => sitemap.write(link));

    const fetchData = async (url) => {
      try {
        const response = await ajaxCall(
          url,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "GET",
          },
          8000
        );
        if (response?.status === 200) {
          return response.data;
        } else {
          console.error("Fetch error:", response);
          return null;
        }
      } catch (error) {
        console.error("Network error:", error);
        return null;
      }
    };

    try {
      console.log("Fetching blog posts...");
      const blogPosts = await fetchData("blogs/posts/");

      if (blogPosts && blogPosts.length > 0) {
        console.log(`Found ${blogPosts.length} blog posts`);

        blogPosts.forEach((post) => {
          sitemap.write({
            url: `/blog/${post.slug}`,
            changefreq: "daily",
            priority: 0.9,
            lastmod: post.updated_at || post.published_at,
          });
        });
      }
    } catch (error) {
      console.error("Error processing blog posts:", error.message);
      console.log("Continuing with sitemap generation without blog posts...");
    }

    sitemap.end();

    const data = await streamToPromise(sitemap);
    writeStream.write(data);
    writeStream.end();

    const robotsTxtContent = `User-agent: *
Disallow:

Sitemap: ${BASE_URL}sitemap.xml
`;

    const robotsTxtPath = resolve(__dirname, "public", "robots.txt");
    writeFileSync(robotsTxtPath, robotsTxtContent);

    console.log("✅ Sitemap and robots.txt generated successfully!");
  } catch (err) {
    console.error("Error generating sitemap:", err);
    process.exit(1);
  }
}

generateSitemap();
