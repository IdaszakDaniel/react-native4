import { TodoListComponent } from "../components/TodoListComponent";
import TodoDetailsComponent from "../components/TodoDetailsComponent";

const initialRoute = "Home";

const routes = {
  Home: {
    screen: TodoListComponent
  },
  Details: {
    screen: TodoDetailsComponent
  }
};

export { initialRoute, routes };
