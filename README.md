Droply - File Sharing Web Application

Droply is a simple, secure, and fast file-sharing web application built with Django. It allows users to upload, share, and manage their files effortlessly. With a sleek design and intuitive interface, Droply makes file management easy.

Features

Secure file uploads and downloads

Simple and responsive UI

Organized file management

Real-time file sharing

Watermarked branding for a professional touch

Technologies Used

Django (Backend)

HTML, CSS, JavaScript (Frontend)

SQLite (Database)

Getting Started

Prerequisites

Make sure you have the following installed:

Python 3.12+

Django 5.1.7+

Installation

Clone this repository:

git clone https://github.com/yourusername/droply.git
cd droply

Create and activate a virtual environment:

python -m venv venv
source venv/bin/activate  # For Windows: venv\Scripts\activate

Install required packages:

pip install -r requirements.txt
pip install djangorestframework

Run database migrations:

python manage.py makemigrations
python manage.py migrate

Run the server:

python manage.py runserver

Access the app at http://localhost:8000

Usage

Visit the homepage to upload and manage your files.

Use the navigation menu to switch between different pages.

Contributing

Contributions are welcome! Please fork this repository, create a new branch, and submit a pull request.

