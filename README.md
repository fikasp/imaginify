# Imaginify

## Introduction

Imaginify is an AI SaaS platform built on Next.js 14, specializing in advanced image processing capabilities. With secure payment integration via Stripe and robust image transformation features, Imaginify offers a comprehensive solution for image restoration, recoloring, object removal, and more. Enhance your portfolio and learn through our detailed tutorial available on YouTube.

You can try it out here: **[https://imaginify-fikasp.vercel.app](https://imaginify-fikasp.vercel.app)**

## Technologies

- **[Node.js](https://nodejs.org/en/docs/)** - JavaScript runtime environment for executing server-side code.
- **[Next.js](https://nextjs.org/docs)** - React framework for building efficient and scalable web applications.
- **[TypeScript](https://www.typescriptlang.org/docs/)** - Typed superset of JavaScript for building maintainable applications.
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Utility-first CSS framework for building custom designs with ease.
- **[Shadcn/UI](https://ui.shadcn.com/docs)** - Comprehensive components library for building modern user interfaces.
- **[MongoDB](https://docs.mongodb.com/)** - NoSQL database for flexible and scalable data storage solutions.
- **[Clerk](https://clerk.com/docs)** - User authentication service for seamless and secure authentication.
- **[Cloudinary](https://cloudinary.com/documentation)** - Cloud-based image and video management solution.
- **[Stripe](https://stripe.com/docs)** - Payment processing platform for managing transactions.

## Features

- **Authentication (CRUD) with Clerk:** Secure user management with registration, login, and route protection.
- **Community Image Showcase:** Explore user transformations with easy navigation and pagination.
- **Advanced Image Search:** Find images by content or objects quickly and accurately.
- **Image Restoration:** Effortlessly revive old or damaged images.
- **Image Recoloring:** Customize images by changing object colors easily.
- **Image Generative Fill:** Seamlessly fill missing areas of images.
- **Object Removal:** Precisely remove unwanted objects from images.
- **Background Removal:** Extract objects from backgrounds with ease.
- **Download Transformed Images:** Save and share AI-transformed images conveniently.
- **Transformed Image Details:** View detailed information on image transformations.
- **Transformation Management:** Manage deletion and updates of image transformations.
- **Credits System:** Earn or purchase credits for image transformations.
- **Profile Page:** Access personal transformed images and credit information.
- **Credits Purchase:** Securely buy credits via Stripe for uninterrupted use.
- **Responsive UI/UX:** Enjoy a seamless experience across devices with a user-friendly interface.

## Structure

- `/app` - Application routing
  - `(auth)` - Routes for authentication
  - `(root)` - Routes for core application
  - `/api` - API routes
  - `favicon.ico` - Icon displayed in the browser
  - `globals.css` - Global CSS and Tailwind styles
  - `layout.tsx` - Root application layout
- `/public` - Static files
  - `/assets` - Images, fonts, etc.
- `/src` - Source files of the application
  - `/actions` - Server actions
  - `/components` - UI components
  - `/constants` - Constant values
  - `/database` - Database-related files
  - `/types` - TypeScript type definitions
  - `/utils` - Utility functions
- `/` - Configuration files in the root directory
  - `.gitignore` - List of files to ignore by git
  - `components.json` - Shadcn components configuration
  - `middleware.ts` - Authentication middleware for Clerk
  - `next.config.js` - Configuration file for Next.js
  - `tailwind.config.js` - Tailwind CSS configuration
  - `tsconfig.json` - TypeScript configuration
  - `package.json` - Lists project metadata and dependencies
  - `README.md` - Documentation of the project

## Setup

Follow these steps to set up the project locally.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the repository**

```bash
git clone https://github.com/fikasp/imaginify.git
cd imaginify
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Setup Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# MONGODB
MONGODB_URI=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

# CLERK
WEBHOOK_SECRET=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# STRIPE
NEXT_PUBLIC_SERVER_URL=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_SECRET_KEY=
```

Fill in the environmental variable values with your actual credentials.
You can obtain these credentials by signing up on the [MongoDB](https://www.mongodb.com/), [Uploadthing](https://uploadthing.com) and [Clerk](https://clerk.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## More

For more information please contact [fikasp@gmail.com](mailto:fikasp@gmail.com).
