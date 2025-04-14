from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Dummy data for artwork (this could be stored in a database in a real-world app)
artworks = [
    {'id': '1', 'title': 'Sunset Over the Ocean', 'price': '500 USD', 'imageUrl': 'art1.jpg'},
    {'id': '2', 'title': 'Mountain Landscape', 'price': '750 USD', 'imageUrl': 'art2.jpg'},
    # Add more artworks as needed
]

@app.route('/')
def home():
    return render_template('index.html', artworks=artworks)

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/order', methods=['POST'])
def order():
    buyer_name = request.form.get('name')
    buyer_email = request.form.get('email')
    artwork_title = request.form.get('artwork_title')
    buyer_message = request.form.get('message')

    # Save the order or send an email to you about the order
    # For simplicity, we'll just print it here
    print(f"New Order: {buyer_name}, {buyer_email}, {artwork_title}, {buyer_message}")

    return jsonify({"message": "Your order has been received. I will contact you shortly."})

if __name__ == '__main__':
    app.run(debug=True)
