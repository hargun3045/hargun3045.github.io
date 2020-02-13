---

layout: archive
permalink: /travels/
title: "Travel Diaries"
header:
    image: "/images/shika.jpg"

---


 {% include group-by-array collection = site.posts field="tags" %}

{% for tag in group_names %}
    {% assign posts = group_items[forloop.index0] %}
    <h2 id="{{ tag | slugify}}" class = "archive_subtitle"> {{tag}} </h2>>
    {% for post in posts  %}
        {% include archive-single.html %}
    {% endfor %}
{%endfor%}