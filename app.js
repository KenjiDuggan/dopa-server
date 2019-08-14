import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.options('*', cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Page under construction.');
  });

mongoose.set('localhost:8080', true);
mongoose.connect(config.database, { useNewUrlParser: true });

app.listen(8081, () => {
    console.log('Server is listening on: ' + 8081);
  });