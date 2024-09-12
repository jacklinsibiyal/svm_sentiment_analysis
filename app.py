from flask import Flask, render_template, request
import pickle

with open('model.pkl', 'rb') as model_file:
    pipeline = pickle.load(model_file)

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        user_input = request.form['text']
        
        # Make prediction
        prediction = pipeline.predict([user_input])
        sentiment_map = {0: "negative", 4: "positive"}
        predicted_sentiment = sentiment_map.get(prediction[0], "unknown")
        
        return render_template('index.html', prediction=predicted_sentiment)

if __name__ == '__main__':
    app.run(debug=True)
