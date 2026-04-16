export const dynamic = "force-dynamic";
import {   serviceLocations } from "@/Data";
import { products } from "@/Data/data";

const res = await fetch(`${baseUrl}/api/blog`, {
  cache: "no-store", // ensures fresh data
});

const blogs = await res.json();

export async function GET() {
  const baseUrl = "https://barbendingmachineimporter.com";

  // Fetch blogs
  // const blogs = await getAllBlogs();



  // Static pages (About, Contact, Blog Listing)
  const staticPages = [
    { loc: `${baseUrl}/about-us`, priority: 0.8, changefreq: "yearly" },
    { loc: `${baseUrl}/contact-us`, priority: 0.8, changefreq: "yearly" },
    { loc: `${baseUrl}/products`, priority: 0.8, changefreq: "yearly" },
    { loc: `${baseUrl}/articles`, priority: 0.9, changefreq: "weekly" },
  ]
    .map(
      (page) => `
      <url>
        <loc>${page.loc}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>
    `
    )
    .join("");

  // Homepage
  const homepage = `
    <url>
      <loc>${baseUrl}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
  `;

  // Products
  const productUrls = products.map((product) => `
      <url>
        <loc>${baseUrl}/products/${product.id}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
    `
  )
    .join("");

  const blogUrls = blogs
    .map((blog) => {
      if (!blog.slug) return "";

      return `
      <url>
        <loc>${baseUrl}/blog/${blog.slug}</loc>
        <lastmod>${blog.date
          ? new Date(blog.date).toISOString()
          : new Date().toISOString()
        }</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
      </url>
    `;
    })
    .join("");




  const locationUrls = serviceLocations
    .map(
      (loc) => `
      <url>
        <loc>${baseUrl}${loc.href}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>
    `
    )
    .join("");


  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${homepage}
      ${staticPages}
    ${productUrls}
    ${locationUrls}
   ${blogUrls}

  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
