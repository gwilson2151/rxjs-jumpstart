import * as express from 'express';

const server = express();
server.use(express.static(`${__dirname}\\..\\build`));

const port = 5180;
server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
