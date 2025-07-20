# Promptify: AI Prompt Management System

[![Vercel Deployment](https://vercelbadge.vercel.app/api/CodeWithAyush2710/promptify)](https://promptify-kohl.vercel.app/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repo-blue?style=flat&logo=github)](https://github.com/CodeWithAyush2710/promptify)

## Live Demo

Experience Promptify in action: https://promptify-kohl.vercel.app/

## Introduction

Promptify is a comprehensive, open-source AI prompt management system designed to streamline the creation, versioning, and deployment of AI prompts across multiple environments. It empowers developers and teams to manage their generative AI prompts with full version control, real-time updates, and advanced analytics, ensuring consistency and efficiency in AI-driven applications.

This platform addresses the common challenges of managing AI prompts, offering a centralized dashboard, one-click rollbacks, and seamless API integration to accelerate development cycles and optimize prompt performance.

## Key Features

* **Real-time Prompt Updates:** Deploy changes to your prompts instantly without requiring code deployments, enabling rapid iteration and experimentation.

* **Full Version Control & Rollbacks:** Maintain a complete history of all prompt versions, with the ability to revert to any previous state with a single click. Add version notes to track changes and updates effectively.

* **Multi-Environment Support:** Manage prompts independently across various environments (e.g., development, staging, production), ensuring tailored behavior and testing before deployment.

* **Advanced Analytics & Performance Tracking:** (Coming Soon: Built-in A/B testing and comparison of prompt performance across different versions and environments.) Track prompt usage and impact to optimize effectiveness.

* **Centralized Prompt Dashboard:** A single, intuitive dashboard to manage all your prompts. Organize them with custom tags and metadata, view statuses, version history, and environment-specific settings at a glance. Powerful search and filter capabilities help you quickly find what you need.

* **API-Driven Flexibility:** Seamless API integration for programmatic prompt management, allowing automation of deployments and full control over your prompt library.

* **Template Creation:** Transform existing prompts into reusable templates with a single click. Create custom templates tailored to specific needs or leverage a library of pre-built system templates for various use cases.

* **User Authentication:** Secure user authentication for a personalized experience.

* **Responsive UI & Theming:** Enjoy a customizable user interface with light and dark themes, designed for optimal viewing and usability on all devices.

## Technologies Used

Promptify is built with a modern and robust tech stack to deliver a scalable and efficient user experience:

* **Framework:** [Next.js](https://nextjs.org/) (React Framework for Production)

* **Styling:** [Tailwind CSS](https://tailwindcss.com/)

* **Database:** [MongoDB](https://www.mongodb.com/)

* **Authentication:** [NextAuth.js](https://next-auth.js.org/)

* **Deployment:** [Vercel](https://vercel.com/)

## Getting Started

Follow these steps to set up and run Promptify locally on your machine.

### Prerequisites

* Node.js (v18 or higher recommended)

* npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/CodeWithAyush2710/promptify.git](https://github.com/CodeWithAyush2710/promptify.git)
    cd promptify
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root directory and add your environment variables. You will need to configure your MongoDB connection string and NextAuth.js credentials.

    ```
    MONGODB_URI=your_mongodb_connection_string
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_nextauth_secret_key
    # Add any other necessary environment variables for your project (e.g., Google OAuth client ID/secret if using)
    ```

    * For `NEXTAUTH_SECRET`, you can generate a strong secret using `openssl rand -base64 32`.

### Running the Development Server

Once the dependencies are installed and environment variables are configured, you can run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Usage

After launching the application, you can::

* **Register/Sign In:** Create an account or log in to access the prompt management features.
* **Create Prompts:** Add new AI prompts and define their content.
* **Manage Versions**: Track changes, add notes, and rollback to previous versions.
* **Organize**: Use tags and categories to keep your prompts organized.
* **Deploy**: Manage prompt deployments across different environments.

## Learn More

To learn more about Next.js and the technologies used, refer to these resources:
* [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
* [Tailwind CSS Documentation](https://tailwindcss.com/docs)
* [MongoDB Documentation](https://docs.mongodb.com/)
* [NextAuth.js Documentation](https://www.google.com/search?q=https://next-auth.js.org/docs)


## Contributing

We welcome contributions to Synaptics AI! If you have ideas for new features, improvements, or bug fixes, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). 

## Contact

For any questions or feedback, feel free to reach out:

* **Ayush Srivastava** - [GitHub Profile](https://github.com/CodeWithAyush2710)
* **Project Link:** <https://github.com/CodeWithAyush2710/Synaptics-AI>

