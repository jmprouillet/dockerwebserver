var low = require('lowdb');
var fs = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db = low(adapter);

// init the data store
// ----------------------------
db.defaults({ posts: [] }).write();

// add post
// ----------------------------
var posts = db.get('posts');
posts.push({ title: 'cool', id: '1', published: 'false' }).write();

// count posts
// ----------------------------
// YOUR CODE

// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE