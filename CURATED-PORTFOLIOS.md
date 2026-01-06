# Curated Student Portfolios (Teacher Workflow)

This site uses a **teacher-curated JSON file** to publish student portfolios.

## Where the published data lives

- Data file: `data/student-portfolios.json`
- Published pages:
  - `"/portfolio"` = list of classes
  - `"/portfolio/<classSlug>"` = list of students in that class
  - `"/portfolio/<classSlug>/<studentSlug>"` = that student’s portfolio page

## How submissions work

Students submit projects here:

- `submit-portfolio.html` (Formspree)

You receive the submission, then **copy approved items** into `data/student-portfolios.json`.

## Quick edit recipe (copy/paste)

1. Open `data/student-portfolios.json`
2. Find the class by `slug` (example: `"5a"`)
3. Find the student by `slug` (example: `"christian"`)
4. Add a new object in that student’s `"projects"` array

Example project object:

```json
{
  "title": "My Awesome Game",
  "projectType": "scratch",
  "description": "I made a platformer. I learned collisions and variables.",
  "links": [
    { "label": "Play on Scratch", "url": "https://scratch.mit.edu/projects/1234567890/" }
  ],
  "tags": ["scratch", "game"],
  "createdAt": "2026-01-06T00:00:00.000Z",
  "featured": false
}
```

## Notes

- **Student pages embed Scratch automatically** if the first link is a Scratch project URL.
- For local testing of the `/portfolio/...` pages, use Netlify local dev (`netlify dev`) since those pages are rendered by a Netlify Function.

