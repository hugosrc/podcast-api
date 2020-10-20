import { SetupServer } from './server';
import { PORT } from './config';

(async (): Promise<void> => {
  const server = new SetupServer(PORT as number);

  await server.init();

  server.start();
})();
