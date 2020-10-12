import { Router } from "express";

import DiciplinaController from "./app/controllers/DiciplinaController";

const routes = new Router();

routes.get("/teste", DiciplinaController.teste);
routes.get("/disciplinas", DiciplinaController.index);
routes.post("/disciplinas", DiciplinaController.store);
routes.put("/disciplinas/:id", DiciplinaController.update);
routes.put("/disciplinas/", DiciplinaController.missing_id);
routes.delete("/disciplinas/:id", DiciplinaController.delete);
routes.delete("/disciplinas/", DiciplinaController.missing_id);


export default routes;
