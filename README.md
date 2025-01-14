# DeliverMe
This is a full-stack web application designed for online food ordering, built to demonstrate modern web development techniques. The frontend is built with React, while the backend uses Node.js and Express, offering a complete e-commerce experience.

Global state is managed using the Context API, with separate contexts for the shopping cart and order progress. A reducer is used to efficiently handle actions such as adding, updating, and removing items in the cart.

To simplify server communication, a custom hook is implemented, managing HTTP requests and handling loading and error states. Modals for the cart and checkout are built using React Portals, ensuring a seamless and user-friendly interface.

The backend provides RESTful endpoints for menu and order management, storing data in JSON files. Both client- and server-side validations are in place to ensure the integrity of the data throughout the system.
