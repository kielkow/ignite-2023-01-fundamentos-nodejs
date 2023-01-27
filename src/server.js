import http from 'node:http';

const users = [];

const server = http.createServer((req, res) => {
    const { method, url, body, params } = req;

    console.log({ method, url, body, params });

    if (method === "GET" && url === "/users") {
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users));
    }

    if (method === "POST" && url === "/users") {
        const user = {
            id: users.length + 1,
            name: body.name,
            email: body.email,
        };

        users.push(user);

        return res.end(user);
    }

    return res.end('server up!');
});


server.listen(3333);
