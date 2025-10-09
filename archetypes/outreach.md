---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true

# Outreach metadata
# type can be "Talk", "Poster", "Keynote", etc.
type: "Talk" 
event: "Conference on Interesting Topics"
# Optional: Enter the YouTube video ID
youtube: "" 

# Location Data
# Find lat/lon by right-clicking on a location in Google Maps
location:
  name: "Venue Name, City, Country"
  lat: 48.8584 # Latitude
  lon: 2.2945  # Longitude

# Standard Hugo params
summary: "A brief summary of the talk or poster for the list page."
---

This is the main description of your talk or poster. You can write about the presentation, the conference experience, and link to the slides.