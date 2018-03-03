import { TodoComponent } from "../components/TodoComponent";
import TodoDetailsComponent from "../components/TodoDetailsComponent";

const initialRoute = "Home";

const routes = {
  Home: {
    screen: TodoComponent
  },
  Details: {
    screen: TodoDetailsComponent
  }
};

export { initialRoute, routes };
