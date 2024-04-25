from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    height = float(request.form['height'])
    weight = float(request.form['weight'])
    bmi = calculate_bmi(height, weight)
    return render_template('result.html', bmi=bmi)

def calculate_bmi(height, weight):
    height_meters = height / 100  # Convert height from cm to meters
    bmi = weight / (height_meters ** 2)
    return round(bmi, 2)

if __name__ == '__main__':
    app.run(debug=True)
