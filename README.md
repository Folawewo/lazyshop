# Lazyshop

Lazyshop API supports e-commerce functionality such as adding products to a cart, viewing order history, and checking out. MongoDB is used to store products and orders, and Express is used to build the API.

## Getting Started

To get started, you'll need to have the following software installed on your machine:

- Node.js
- MongoDB

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

### POST /cart/add/:productId

This endpoint returns the contents of the user's cart.

Parameters
| **Name** | **Type** | **Description** |
| :-------- | :------- | :-------------------------------- |
| **`productId`** | `string` | The ID of the product. |

Response

```json
{
  "success": true,
  "message": "Product added to cart"
}
```

### GET /cart

This endpoint returns the contents of the user's cart.

Response

```json
[
  {
    "id": "1",
    "name": "Jordan Sneakers",
    "price": 89.99
  },
  {
    "id": "2",
    "name": "Bag",
    "price": 12.99
  }
]
```

### POST /checkout

This endpoint checks out the user's cart and creates an order.

Response

```json
{
  "success": true,
  "message": "Order placed"
}
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
