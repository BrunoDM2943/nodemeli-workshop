const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const posts = [
    { id: 1, date: new Date(), description: 'post test1', author: 'author1', title: 'test'},
    { id: 2, date: new Date(), description: 'post test2', author: 'author2', title: 'test2'}
];


app.use(bodyParser.json());
app.use(express.static('public'));
app.listen(3000, () => {
    console.log('Server is listening');

    // app.get('/', (req, res) => {
    //     res.send('Hello Word');
    // });
    app.get('/posts', (req,res) => {
        res.send({ posts:posts});
    });

    app.post('/posts', (req,res) => {
        console.log('Add the new post to the array with date and id', req.body);
        const newPost = Object.assign(req.body, { id: posts.length + 1, date: Date.now()})
        posts.push(newPost);
        res.send(posts);
    });

    app.post('/create', (req, res) => {
        console.log(req.body.message)
        res.send(req.body)
    });
})