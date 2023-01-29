import { AfterAll, BeforeAll } from '@cucumber/cucumber';
import { BootstrapApp } from '../../src/bootstrap';

let application: BootstrapApp;


BeforeAll(async () => {
  application = new BootstrapApp();
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});


export { application };