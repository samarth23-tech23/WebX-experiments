import datetime
from flask import Flask, render_template, request, redirect, url_for
from pymongo import MongoClient, DESCENDING

app = Flask(__name__)
client = MongoClient('mongodb://localhost:27017/')
db = client['blog']
posts = db['posts']

@app.route('/')
def index():
    all_posts = posts.find().sort('date', DESCENDING)
    return render_template('index.html', posts=all_posts)

@app.route('/post/<post_id>')
def post(post_id):
    post = posts.find_one_or_404({'_id': post_id})
    return render_template('post.html', post=post)

@app.route('/create', methods=['GET', 'POST'])
def create():
    if request.method == 'POST':
        post_data = {
            'title': request.form['title'],
            'content': request.form['content'],
            'date': datetime.datetime.now()
        }
        result = posts.insert_one(post_data)
        return redirect(url_for('post', post_id=result.inserted_id))
    return render_template('create.html')

@app.route('/edit/<post_id>', methods=['GET', 'POST'])
def edit(post_id):
    post = posts.find_one_or_404({'_id': post_id})
    if request.method == 'POST':
        posts.update_one({'_id': post_id}, {'$set': {'title': request.form['title'], 'content': request.form['content']}})
        return redirect(url_for('post', post_id=post_id))
    return render_template('edit.html', post=post)

@app.route('/delete/<post_id>')
def delete(post_id):
    posts.delete_one({'_id': post_id})
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
