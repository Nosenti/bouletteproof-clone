## Bouletteproof Dashboard Clone

A dashboard clone of Bouletteproof's application, built with Next.js and Tailwind CSS. The application provides detailed analytics and insights on website visits, leads and campaigns.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

**Side Note:** For quick access, you can check it out [hosted here](https://bouletteproof-clone.vercel.app/dashboard)

### Prerequisites

- **Node.js**: Version 14 or above is recommended.
- **npm**: Comes with Node.js. Alternatively, you can use **yarn**.

### Installation

1. **Clone the Repository**

   ```
    git clone https://github.com/Nosenti/bouletteproof-clone.git
   cd bouletteproof-clone
   ```

2. **Install Dependencies**

   Using npm:

   ```
   npm install
   ```

### Running the Application

**Development Mode**

```
npm run dev
```

This will start the application in development mode at `http://localhost:3000`.

## Technologies Used

- **Next.js**: React framework for server-rendered applications.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript for type safety.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Recharts**: Charting library built on React components.
- **React Table**: Extend the table's functionalities.
- **Lucide Icons**: Icon library for React applications.
- **ESLint & Prettier**: Code linting and formatting tools.

## Areas of Improvement

While the web page looks as expected, below are the improvements in terms of code refactoring where necessary to adhere to DRY principles and improve user experience:

- **Responsiveness:** The current state of UI is only tailored for laptops and it could be improved to be responsive to smaller screens like a tablet and phone. 
- **Dark Mode:** For better user experience, dark mode could be implemented to match the users' preferences. 
- **Improving code re-usability:** Some components could be broken down even into smaller components