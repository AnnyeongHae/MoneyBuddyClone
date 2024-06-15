const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // db.json 파일 경로
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(9000, () => {
    console.log('JSON Server is running');
});
