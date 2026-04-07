export default function sitemap() {
    const baseUrl = "https://www.laymadev.com";
    const now = new Date();
  
    return [
      // 🏠 HOME (PAGE PRINCIPALE SEO)
      {
        url: `${baseUrl}/styleA/home`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 1.0,
      },
  
      // 🧩 SERVICES
      {
        url: `${baseUrl}/styleA/services/creation-site`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/styleA/services/dev-web`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.9,
      },
  
      // 🚀 PROJETS
      {
        url: `${baseUrl}/styleA/projects/smart-hotel`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/styleA/projects/teoola`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      },
  
      // 📄 PAGES
      {
        url: `${baseUrl}/styleA/about`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/styleA/contact`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.7,
      },
  
      // ⚖️ LEGAL (faible priorité)
      {
        url: `${baseUrl}/styleA/legal/mentions-legales`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.3,
      },
      {
        url: `${baseUrl}/styleA/legal/confidentialite`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.3,
      },
      {
        url: `${baseUrl}/styleA/legal/cgu`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.3,
      },
    ];
  }