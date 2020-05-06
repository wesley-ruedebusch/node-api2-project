const express = require('express');
const postsRouter = require('./postsRouter.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.json({
        query: req.query,
        params: req.params,
        headers: req.headers
    })
});

server.use('/api/posts', postsRouter);


server.listen(6000, () => {
    console.log('\n*** Server Running on http://localhost:6000 ***\n');
});