import express from 'express';

const router = express.Router();

const users = [
    { login: 'ddd', username: 'Dasha' },
    { login: 'vvv', username: 'Petya' },
    { login: 'lala', username: 'Vasya' },
];

router.get('/user', (req, res) => {
  setTimeout(() => res.send({
    name: 'Michael',
    email: 'mk@elbrusboot.camp'
  }), 1000);
});

router.post('/true', (req, res) => {
    let response = req.body;
    for (let i = 0; i < users.length; i++) {
        if(users[i].login === response.login) {
            let name = users[i].username;
            return res.send(200, name);
        }
    }
    return res.send(401);

});


export default router;
