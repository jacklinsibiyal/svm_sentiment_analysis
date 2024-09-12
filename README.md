# Sentiment Analysis with SVM

## Overview

This project implements a sentiment analysis model using Support Vector Machine (SVM) to classify text into positive or negative sentiments. The model is trained and tested on a sentiment dataset to determine the sentiment of user input.

## Live Demo

You can try out the live demo of the sentiment analysis model here: [Sentiment Analysis Demo](https://svm-sentiment-analysis.onrender.com/)

## Features

- **Text Classification**: Classifies user input as positive or negative sentiment.
- **User Interface**: Simple web interface to interact with the model.
- **Real-time Analysis**: Provides immediate sentiment analysis results.

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/jacklinsibiyal/svm_sentiment_analysis.git
    cd svm-sentiment-analysis
    ```

2. **Install Dependencies**

    Create a virtual environment and install the required packages:

    ```bash
    pip install -r requirements.txt
    ```

3. **Run the Application**

    ```bash
    python app.py
    ```

    The application will be available at `http://127.0.0.1:5000/` by default.

## Usage

1. Open the web application in your browser.
2. Enter text in the input field.
3. Click the "Predict Sentiment" button to get the sentiment result.

## Model Details

- **Model**: Support Vector Machine (SVM)
- **Preprocessing**: Text is tokenized and vectorized before being fed into the SVM model.
- **Evaluation**: The model's performance was evaluated using metrics such as accuracy and F1 score.

## Requirements

- Python 3.x
- Flask
- Scikit-learn
- NLTK
- Other dependencies listed in `requirements.txt`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Support Vector Machine](https://scikit-learn.org/stable/modules/svm.html)
- [Flask](https://flask.palletsprojects.com/)

---

Feel free to customize this `README.md` further based on your specific implementation details or any additional features you've added!
