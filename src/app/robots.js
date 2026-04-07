export default function robots() {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/styleB/", "/styleC/"],
        },
      ],
      sitemap: "https://www.laymadev.com/sitemap.xml",
    };
  }