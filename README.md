# Product List Application

This project is a simple React application that displays a list of products. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses TypeScript for type safety.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/product-list.git
   ```

2. Navigate to the project directory:

    ```sh
   npm install 
    ```

3. Install the dependencies
    ```sh
    npm install
    ```

    or

    ```sh
    yarn install
    ```

### Running the Mock Server

To run the mock server, follow these steps:

1. Install `json-server` globally if you haven't already:
   ```sh
   npm install -g json-server
   ```

2. Start the mock server:
    ```sh
    json-server --watch db.json --port 3001
    ```

This will start a mock server at http://localhost:3001 that serves the data from db.json.

### Running the Application

After starting the mock server, you can run the application:

1. Install the dependencies:
```sh
npm install
```

2. Start the application:
```sh
npm start
```

This will start the application at http://localhost:3000.

### Project Structure

```
product-list/
├── node_modules/
├── public/
├── src/
├── components/
├── ProductList.tsx  
│ ├── ProductDetail.tsx 
│ ├── ProductList.css
│ ├── ProductDetail.css
│   ├── App.tsx
│   ├── index.tsx
│   ├── logo.svg
│   ├── custom.d.ts
│   ├── App.css
│   ├── index.css
│   └── ...
├── .gitignore
├── package.json
├── tsconfig.json
├── db.json 
├── README.md
└── ...
```

### Technologies Used

React
TypeScript
Create React App
CSS

### Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### License
Distributed under the MIT License. See LICENSE for more information.