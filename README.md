# Next.js + React Project

This project is built with **Next.js** and **React**. To run it locally, first install the dependencies using `npm install`. Then, start the development server with `npm run dev`, which will launch the app at [http://localhost:3000](http://localhost:3000). For production, use `npm run build` followed by `npm start`.

Before running the project, make sure to configure your environment variables. Create a `.env.local` file at the root of the project and add the following:


Make sure your API endpoints are correctly set up and accessible.

To enable payment functionality, you need to create a Stripe account at [https://stripe.com](https://stripe.com). After signing up, retrieve your **Publishable Key** and **Secret Key** from the Stripe dashboard and add them to your `.env.local` file as shown above. Also ensure your backend is configured to handle Stripe payment intents and webhooks securely.

