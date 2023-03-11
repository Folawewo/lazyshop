# Lazyshop

Lazyshop API supports e-commerce functionality such as adding products to a cart, viewing order history, and checking out. MongoDB is used to store products and orders, and Express is used to build the API.

## Getting Started

To get started, you'll need to have the following software installed on your machine:

* Node.js
* MongoDB

Once you have these installed, clone this repository and install the dependencies:
```bash
git clone https://github.com/Folawewo/lazyshop.git
cd lazyshop
npm install
```

Next, start the server:
```bash
npm start
```

The API will be running at `http://localhost:8000`.

## API Endpoints

The API has the following endpoints:

### GET /cart

This endpoint returns a list of all the products.