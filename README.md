
# Vite React Image Gallery

This is a web application for showcasing a gallery of images with drag-and-drop functionality and user authentication. Users can interact with the images, rearrange their order, and view them in a lightbox.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [Gallery](#gallery)
  - [Search Functionality](#search-functionality)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before running the project, ensure you have the following dependencies installed:

- Node.js
- npm

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/vite-react-image-gallery.git
```

2. Navigate to the project directory:

```bash
cd vite-react-image-gallery
```

3. Install the required dependencies:

```bash
npm install
```

4. Run:

```bash
npm run dev
```

## Usage

### Authentication

email: <user@example.com>
password: 1Password

```

### Gallery

The image gallery allows users to:

- View images in a grid layout.
- Drag and drop images to rearrange their order.
- Click on images to open them in a lightbox view.
- View image tags displayed on top of each image.

### Search Functionality

The search bar allows users to filter images based on their tags. To use the search functionality:

1. Type a tag into the search input field.
2. Press Enter or click the search icon.
3. Only images with matching tags will be displayed.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Firebase (for user authentication)

## Project Structure

```

src/
├── components/
│   ├── ImageGallery.jsx
│   ├── ImageItem.jsx
│   ├── LightBox.jsx
│   ├── Login.jsx
│   ├── SearchBar.jsx
│   └── ...
├── firebase.js
├── imageData.js
├── ...
└── ...

```

- `components/`: Contains React components used in the application.
- `firebase.js`: Firebase configuration and authentication setup.
- `imageData.js`: Mock data for images.
- ...

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Create a pull request with a clear title and description.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
