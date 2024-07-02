---
permalink: /posts/
title: "Blog Posts"
---

<div class="posts-grid">
  {% for post in site.posts %}
  <div class="post-tile">
    <a href="{{ post.url | relative_url }}">
      <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
      <h2>{{ post.title }}</h2>
    </a>
  </div>
  {% endfor %}
</div>


