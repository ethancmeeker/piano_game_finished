import json 
from flask import request
from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

"""    
@app.route('/testing', methods=['GET', 'POST'])
def test():
    if request.method == "POST":
        output = request.get_json()
        print(output)
        print('si')
    #print(output)
    return 'hi'
    #print(output)
    #print(type(output))
    #result = json.loads(output)
    #print(result)
    #print(type(result))
    #return result
    """

if __name__ == "__main__":
    app.run(debug=True)
