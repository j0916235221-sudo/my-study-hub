function createArticleCardHTML(article) {
  const categoryName = CATEGORY_MAP[article.category] || article.category;
  const tagsHTML = (article.tags || [])
    .map(tag => `<span class="tag-pill">#${escapeHTML(tag)}</span>`)
    .join("");

  return `
    <article class="glass-card hover-lift article-card">
      <div>
        <div class="article-meta-top">
          <span class="badge badge-category">${escapeHTML(categoryName)}</span>
          ${article.isDemo ? '<span class="badge badge-demo">示範文章</span>' : ""}
          <span class="article-date">${escapeHTML(article.date)}</span>
        </div>
        <h3 class="article-title">
          <a href="article.html?id=${encodeURIComponent(article.id)}">${escapeHTML(article.title)}</a>
        </h3>
        <p class="article-summary">${escapeHTML(article.summary)}</p>
      </div>
      <div class="article-footer">
        <div class="article-tags">${tagsHTML}</div>
        <a class="read-more-link" href="article.html?id=${encodeURIComponent(article.id)}">
          閱讀完整文章 →
        </a>
      </div>
    </article>
  `;
}

function renderDynamicStats(articles, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const totalCount = articles.length;
  const counts = {
    "course": 0,
    "ai-tools": 0,
    "growth": 0,
    "future-goals": 0
  };

  articles.forEach(art => {
    if (Object.prototype.hasOwnProperty.call(counts, art.category)) {
      counts[art.category] += 1;
    }
  });

  const statsItems = [
    { label: "文章總數", value: totalCount },
    { label: CATEGORY_MAP["course"], value: counts["course"] },
    { label: CATEGORY_MAP["ai-tools"], value: counts["ai-tools"] },
    { label: CATEGORY_MAP["growth"], value: counts["growth"] },
    { label: CATEGORY_MAP["future-goals"], value: counts["future-goals"] }
  ];

  container.innerHTML = statsItems.map(item => `
    <div class="glass-card hover-lift stat-card">
      <div class="stat-label">${escapeHTML(item.label)}</div>
      <div class="stat-value">${item.value}</div>
    </div>
  `).join("");
}