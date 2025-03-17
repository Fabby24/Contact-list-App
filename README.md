📞 Contact List App

A simple Contact List App built using Flask (Python) for the backend and HTML, CSS, and JavaScript for the frontend. This project allows users to add contacts and view them dynamically.

📌 Features

✅ Fetch and display contacts from a Flask API.

✅ Add new contacts dynamically.

✅ Simple and responsive user interface.

✅ Data stored in a JSON file.

🛠️ Tech Stack

Frontend:

HTML

CSS

JavaScript (Fetch API)

Backend:

Python

Flask

JSON (as a database)

🚀 Project Setup

1️⃣ Clone the Repository

git clone https://github.com/Fabby24/Contact-list-App
cd contact-list-app

2️⃣ Set Up the Backend

Navigate to the backend folder and install Flask:

cd backend
pip install flask

3️⃣ Run the Flask API

python app.py

The server will start at http://127.0.0.1:5000.

4️⃣ Open the Frontend

Open frontend/index.html in a browser.

📂 Project Structure

contact_app/
│── backend/
│   ├── app.py         # Flask API Backend
│   ├── contacts.json  # JSON File to Store Contacts
│── frontend/
│   ├── index.html     # Main HTML Page
│   ├── style.css      # Styling File
│   ├── script.js      # JavaScript (Handles API Requests)
│── README.md          # Project Documentation

📌 API Endpoints

1️⃣ Get All Contacts

Endpoint: GET /contacts

Response:

[
  { "name": "John Doe", "phone": "123-456-7890" },
  { "name": "Jane Doe", "phone": "987-654-3210" }
]

2️⃣ Add a Contact

Endpoint: POST /contacts

Request Body:

{
  "name": "Alice Brown",
  "phone": "555-1234"
}

Response:

{ "message": "Contact added successfully!" }

🖥️ Usage

Start the Flask server (python app.py).

Open index.html in a browser.

Add a contact using the input fields.

View contacts dynamically fetched from the backend.

🏗️ Future Improvements

🔹 Add a delete contact feature.
🔹 Store contacts in SQLite or MongoDB instead of JSON.
🔹 Improve UI with Bootstrap or Tailwind CSS.

🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

📜 License

This project is licensed under the MIT License.

📬 Contact

Developer: Fabian Musau GitHub: Fabby24 Email: musaufabian7@gmail.com

