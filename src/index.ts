import Koa from 'koa';
import Router from 'koa-router';
import * as BRCore from 'blockrpg-core';
import MapBlockController from './Module/MapBlock/Controller';

const app = new BRCore.Koa.App('Map', (app) => {
  return app.use(MapBlockController);
}, true);

app.Listen();
