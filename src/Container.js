import FakeGateway from "./Dependencies/FakeGateway";
import RealGateway from "./Dependencies/RealGateway";

class Container {
  constructor() {
    this.mode = "unset";
  }

  get() {
    switch (this.mode) {
      case "fake":
        return new FakeGateway();
      case "real":
        return new RealGateway();
      default:
        throw String("Container is not registered.");
    }
  }
}

export const container = new Container();
