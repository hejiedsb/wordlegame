from flask import Flask, request, jsonify, abort
from datetime import datetime

app = Flask(__name__)

# 模拟数据库
wordle_data = {
  "date": "2024-10-01",
  "solution": "ought"
}

def validate_date(date_str):
    """验证日期格式 yyyy-MM-dd"""
    try:
        datetime.strptime(date_str, "%Y-%m-%d")
        return True
    except ValueError:
        return False


# GET /api/wordle/{yyyy-MM-dd}
@app.route("/api/wordle/<date>", methods=["GET"])
def get_wordle(date):
    if not validate_date(date):
        abort(400, description="Invalid date format")
    if date not in wordle_data:
        abort(404, description="Date not found")
    return jsonify({"date": date, "solution": wordle_data[date]})


# POST /api/wordle
@app.route("/api/wordle", methods=["POST"])
def add_wordle():
    data = request.get_json()
    date = data.get("date")
    solution = data.get("solution")

    if not date or not solution:
        abort(400, description="Missing date or solution")

    if not validate_date(date):
        abort(400, description="Invalid date format")

    if date in wordle_data:
        abort(409, description="Date already exists")

    wordle_data[date] = solution
    return jsonify({"date": date, "solution": solution}), 201


# PUT /api/wordle/{yyyy-MM-dd}
@app.route("/api/wordle/<date>", methods=["PUT"])
def update_wordle(date):
    if not validate_date(date):
        abort(400, description="Invalid date format")
    if date not in wordle_data:
        abort(404, description="Date not found")

    data = request.get_json()
    solution = data.get("solution")
    if not solution:
        abort(400, description="Missing solution")

    wordle_data[date] = solution
    return jsonify({"date": date, "solution": solution})


# DELETE /api/wordle/{yyyy-MM-dd}
@app.route("/api/wordle/<date>", methods=["DELETE"])
def delete_wordle(date):
    if not validate_date(date):
        abort(400, description="Invalid date format")
    if date not in wordle_data:
        abort(404, description="Date not found")

    del wordle_data[date]
    return "", 204


# GET /api/wordle
@app.route("/api/wordle", methods=["GET"])
def get_all_wordles():
    return jsonify([
        {"date": date, "solution": solution}
        for date, solution in wordle_data.items()
    ])


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)

