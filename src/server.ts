import { app } from './app';

const portServer = process.env.PORT_SERVER;

app.listen(portServer, () => {
  console.log(`🚀 Server started on port ${portServer}!`);
});
