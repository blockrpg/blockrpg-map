import Koa from 'koa';
import Router from 'koa-router';
import * as BRCore from 'blockrpg-core';

const app = new BRCore.Koa.App((app) => {
  return app;
}, true);

app.Listen(3001);
