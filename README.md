# Spotify Search Mini-Project — Facilitator Guide

## Purpose & Overview  
This mini-project is designed to teach students how to build a simple web app using HTML, CSS, JavaScript, and the Spotify Web API. During the workshop, students will:

- Build a search interface for Spotify tracks  
- Retrieve and process data from the Spotify Web API  
- Dynamically render track cards (including artwork, track title, artist, and a link)  
- Use Bootstrap for responsive, clean UI  
- Practice event handling, DOM manipulation, and control flow  

By the end, students will have built a mini "Spotify search engine" that feels like a real, usable app.

---

## Facilitator Learning Goals  

When guiding students, your focus should be on helping them:

1. Understand how to read from input forms and use that input in JavaScript  
2. Interact with a REST API (Spotify), handle asynchronous requests, and parse JSON  
3. Dynamically build user interfaces by manipulating the DOM  
4. Apply Bootstrap classes to structure and style a UI   
5. Implement conditional UI changes (e.g., hiding a placeholder, showing results)  
6. Reflect on possible improvements and bonus enhancements  

---

## Workshop Structure & Activities  

Here’s a suggested breakdown for the session :

| Activity                  | Facilitator Support                                                                                                                                                        |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Introduction & Setup**  | Introduce the project, explain high-level goals, and share how to access the starter template. Confirm everyone can run the base setup.                                    |
| **Quest 1–3**             | Students add the heading, style the button with Bootstrap, duplicate the card markup. Walk around to check their HTML structure, confirm ID naming.                        |
| **Quest 4**               | Demonstrate reading from an input field and logging the query. Encourage students to test capturing the search text.                                                       |
| **Quest 5 **              | Help students hide the placeholder on search                                                                                                                               |
| **Quest 6**               | Guide students through making the API call, iterating through the response, and populating each result card. Help with debugging if IDs don’t match or data is unexpected. |
| **Quest 7 **              | reveal the results section once it’s ready. Explain the logic behind showing/hiding elements.                                                                              |
| **Demo & Reflection**<br> | Invite students to demonstrate their working mini-apps. Facilitate a short discussion: what was hard, what worked, and what would they build next (bonus ideas).<br>       |

---

## Common Pitfalls & How to Support  

Here are typical issues students may encounter, and how you can help:

- **Mismatching IDs between HTML and JS**  
  - If cards don’t populate, ask students to double-check their HTML IDs vs what their JS is trying to update.  
  - Use console logging inside their loops to confirm they are iterating correctly and receiving valid track data.  

- **Undefined album images**  
  - Sometimes, image data may not be available. Prompt students to handle missing images safely (e.g., via checks or fallback behavior).  

- **Empty search submission**  
  - If students try to search with an empty string, guide them to add a validation check, e.g., show an alert or warning message.

---

## Tips for Facilitators  

- Encourage students to check what they have made with each change to ensure it works as they intended.
- Introduce **extension ideas**: Once students have the basics working, suggest bonus challenges like: a loading spinner, no-results message, animations, more complex UI, etc.
- Add loops for incrementing the 6 songs instead of being hard coded.
- Add error handling
- Use **pair programming**: Pair up students who finish early with those who are stuck to encourage collaboration.  

---

## Reflection & Assessment  

At the end of the workshop, you can:

1. Ask students to **demo** their working apps.  
2. Run a short **code review**: choose a few examples and highlight clean structure, naming, or logic; suggest improvements.  
3. Facilitate a **retrospective discussion**:  
   - What parts were easy or enjoyable?  
   - What was most challenging?  
   - What would they like to build next if they had more time?  

---
