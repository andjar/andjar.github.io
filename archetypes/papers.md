---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true

# Paper metadata
co_authors:
{{- range .Params.co_authors }}
  - "{{ . }}"
{{- end }}
co_authors_list:
  - "Co-Author One"
  - "Co-Author Two"
journal: "Journal of Scholarly Things"
doi: "10.1234/journal.12345"
# Optional: Enter the YouTube video ID, not the full URL
# Example: for "https://www.youtube.com/watch?v=dQw4w9WgXcQ", use "dQw4w9WgXcQ"
youtube: "" 

# Standard hugo params
summary: "A brief summary of the paper for the list page."
---

This is the main description of your paper. You can write a few paragraphs here explaining the work, its significance, and your contribution. You can use **Markdown** freely.