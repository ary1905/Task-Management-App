# Task Management App

![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![Redux](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) 
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)

## Overview

The Task Management App is a full-stack application designed to help users manage their tasks efficiently. It features a React frontend, a Django backend, and utilizes PostgreSQL for data storage. The application allows users to create, update, and delete tasks, providing a user-friendly interface for managing their to-do lists.

## Features

- ✔️ User authentication and authorization
- ✔️ Task creation, editing, and deletion
- ✔️ Task listing with filtering and sorting options
- ✔️ Responsive design

## Technologies Used

- **Frontend**: React, Bootstrap
- **Backend**: Django, Djoser
- **Database**: PostgreSQL
- **Deployment**: Render

## Screenshots

![Homepage](https://i.postimg.cc/vBJNRL9N/Screenshot-2024-08-02-142309.png)
*Homepage View*

![Dashboard](https://i.postimg.cc/3N2b34FJ/Screenshot-2024-08-02-141904.png)
*Dashboard View*

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- Python 3.x
- PostgreSQL

### Frontend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/ary1905/Task-Management-App.git
    ```

2. Navigate to the frontend directory:

    ```bash
    cd Task-Management-App/frontend
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

### Backend Setup

1. Navigate to the backend directory:

    ```bash
    cd Task-Management-App/backend
    ```

2. Create a virtual environment and activate it:

    ```bash
    python -m venv env
    source env/bin/activate  # On Windows use `env\Scripts\activate`
    ```

3. Install the dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Apply database migrations:

    ```bash
    python manage.py migrate
    ```

5. Start the Django development server:

    ```bash
    python manage.py runserver
    ```

## Deployment

The application is hosted on Render. You can access it at [https://task-app-32zs.onrender.com](https://task-app-32zs.onrender.com).

## Usage

1. Visit the deployed application URL.
2. Register a new account or log in with your existing credentials.
3. Use the interface to create, view, update, and delete tasks.

## Contributing

Feel free to open issues or submit pull requests if you have any suggestions or improvements. Please follow the existing code style and write meaningful commit messages.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Django](https://www.djangoproject.com/)
- [Djoser](https://djoser.readthedocs.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Bootstrap](https://getbootstrap.com/)
