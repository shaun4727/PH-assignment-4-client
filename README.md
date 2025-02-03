# A Book Shop Project Frontend

Create a Book Shop application with user-friendly features, secure authentication, and smooth product management. Ensured the platform is responsive, error-free, and visually appealing.

## instruction to setup the project locally

- clone from git
- move to the project directory
- install dependencies with `npm install`
- set the base api in `src/redux/api/baseApi.ts`
- add cors origin in the server

Now, you are good to go....

- **Deployed Link:** ph-assignment-4-client-book-shop.vercel.app

## Technologies

- TypeScript
- React
- Redux
- Antd

# Create Admin User

- **server github link**: https://github.com/shaun4727/PH-assignment-4-server
- **API**: `http://your-domain/api/auth/register`
- **Method**: `POST`
- **Payload**:

```JavaScript
{
    "name": "user name",
    "email": "user@email.com",
    "password": "your-password",
    "confirmPassword": "your-password",
    "role": "admin"
}

```

# Roles

#### Admin:

- Can Login (can't be registered)
- Can view detail of product.
- Can add product to cart.
- Can Increase quantity of the products added to cart, remove from cart
- Can make order.
- Can see the order history,manage products, deactivate users in Dashboard

#### User:

- Can Register and Login
- Can view detail of product.
- Can add product to cart, , remove from cart
- Can Increase quantity of the products added to cart
- Can make order.
- Can see the order history in Dashboard
