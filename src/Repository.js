import { container } from "./Container";

export default class AppRepository {
  load() {
    return container.get("getway").message();
  }
}

export const repository = new AppRepository();
