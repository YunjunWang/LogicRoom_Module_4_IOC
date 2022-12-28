import { repository } from "./Repository";

class Presenter {
  load = () => {
    return { message: repository.load() };
  };
}

export const presenter = new Presenter();
