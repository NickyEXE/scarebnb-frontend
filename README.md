# Let's Build ScareBNB, the first app for subdividing and listing apartments in your Haunted House

For our sample project, we'll be building ScareBNB, where both B's stand for "Boo!"

Our final models will be:

User:
- Name

House:
- Name
- Address
- City
- State
- Haunting
- Image
- user_id

Apartment:
- Unit
- Bedrooms - integer
- Bathrooms - integer
- Rent - integer
- Image
- hazards
- house_id - id

Monday 9/20: Beginning of break-week
Monday: 9/27: Beginning of React
Friday 10/8: Project due

Here's the CSS I used:

The index should be wrapped in a div classed `house-container` and be made up of cards called `house-card`

The show page should be wrapped in a div classed `show`.

Your html should include this to load the font Creepster:
```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet">
```

```css
:root {
  --bg-color: black;
  --main-color: #ffa500;
  --main-color-transparent: rgba(255, 166, 0, 0.459);
  --header-font-family: 'Creepster', cursive;
}

body {
  background-color: var(--bg-color);
  color: var(--main-color);
  text-align: center;
}

#house-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.house-card {
  border: 3px solid var(--main-color);
  border-radius: 1em;
}

.house-card img {
  width: 350px;
  height: 250px;
  object-fit: cover;
  cursor: pointer;
}

.house-card .title {
  font-size: 1.25em;
  font-family: var(--header-font-family);
  color: red;
  cursor: pointer;
  text-decoration: underline;
}

.show img {
  width: 100%;
  height: 40vh;
  object-fit: cover;
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: var(--main-color-transparent); /* Fallback color */
}

/* Modal Content/Box */
.modal-content {
  background-color: black;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid black;
  border-radius: 1em;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: red;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
```
