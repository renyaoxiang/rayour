import * as express from 'express';
import * as bodyParser from 'body-parser';
import { loginService, menuService } from './service';

const app = express();
app.use(bodyParser.json());

app.route('/api/login').all(loginService);
app.route('/api/menu').all(menuService);

const server = app.listen(4300, () => {
  console.log(server.address().port);
});
