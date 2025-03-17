from flask import Flask, jsonify, request, send_file
import json
import os

app = Flask(__name__)

# Set the base directory for your application
BASE_DIR = "G:\\buildhackathon\\contact-app\\frontend"

# Load existing contacts
CONTACTS_FILE = os.path.join(BASE_DIR, "contacts.json")

def read_contacts():
    try:
        with open(CONTACTS_FILE, "r") as file:
            return json.load(file)
    except FileNotFoundError:
        # Create the file if it doesn't exist
        write_contacts([])
        return []

def write_contacts(data):
    with open(CONTACTS_FILE, "w") as file:
        json.dump(data, file, indent=4)

# Root route to serve the HTML file
@app.route("/", methods=["GET"])
def index():
    return send_file(os.path.join(BASE_DIR, "index.html"))

# API routes
@app.route("/api/contacts", methods=["GET"])
def get_contacts():
    return jsonify(read_contacts())

@app.route("/api/contacts", methods=["POST"])
def add_contact():
    data = request.json
    contacts = read_contacts()
    contacts.append(data)
    write_contacts(contacts)
    return jsonify({"message": "Contact added successfully!"}), 201

# Serve static files (JavaScript and CSS)
@app.route("/<path:filename>")
def serve_static(filename):
    return send_file(os.path.join(BASE_DIR, filename))

if __name__ == "__main__":
    app.run(debug=True)