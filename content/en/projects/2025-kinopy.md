---
date: "2025-08-08"
title: "KinoPy"
github: "https://github.com/andjar/KinoPy"
tags: ["python", "video", "research", "productivity", "software"]
summary: "Annotate instructional videos with python."
status: "ongoing"
categories: ["projects"]
---

Creating polished instructional videos is often slow and brittle when done by hand in timeline editors. KinoPy makes that process fast, repeatable, and scriptable by offering a declarative Python API and a simple CLI on top of MoviePy. You can define a video as data—title cards, trimmed clips, fades, freeze frames, and overlays like text and arrows—then render it consistently every time. Text and graphics are drawn with Pillow (no ImageMagick headaches), and imageio-ffmpeg typically supplies an ffmpeg binary automatically. The result is a lightweight toolkit that turns video editing into maintainable code: easy to version, review, and iterate.

It’s most useful when you need clear, annotated walkthroughs at speed—product tours, tutorials, onboarding snippets, UX study highlights, or bug repros—where precision and consistency matter. With letterboxed resizing, overlays stay aligned across mixed-aspect clips; and you render once at the end. Use the CLI for quick one-offs (add a title, trim a section, freeze a frame, overlay guidance) or the programmatic API to integrate into docs pipelines and CI, ensuring your team can update and re-render the same video reliably without manual rework.