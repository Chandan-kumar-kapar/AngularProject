import yaml
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

# configuration of db
db = yaml.load(open('db.yaml'))
app.config["MYSQL_HOST"] = db['mysql_host']
app.config["MYSQL_USER"] = db['mysql_user']
app.config["MYSQL_PASSWORD"] = db['mysql_password']
app.config["MYSQL_DB"] = db['mysql_db']

mysql = MySQL(app)


@app.route('/', methods=['POST', "GET"])
def logIN():
    if len(request.data) > 28 and request.method == "POST":
        data = request.data
        data = str(data)[3:-2].split(',')
        userID = data[0][9:-1]
        password = data[1][12:-1]
        cur = mysql.connection.cursor()
        result = cur.execute("SELECT * from login_detail")
        if result > 0:
            userDetails = cur.fetchall()
            for user in userDetails:
                if user[1] == userID and user[3] == password:
                    return jsonify(True)
        return jsonify(False)
    else:
        return jsonify(False)


@app.route('/emp')
def userDetail():
    cur = mysql.connection.cursor()
    result = cur.execute("SELECT * from emp")
    if result > 0:
        empDetails = cur.fetchall()
        return jsonify(empDetails)
    else:
        return jsonify()


if __name__ == "__main__":
    app.run(debug=True)
