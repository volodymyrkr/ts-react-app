import { Container} from "inversify";
import { DataService} from "./store/data.service";

const container = new Container();
container.bind<DataService>('DataService').to(DataService);

export { container };