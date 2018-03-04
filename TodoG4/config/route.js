import { TodoListComponent } from "../components/TodoListComponent";
import TodoDetailsComponent from "../components/TodoDetailsComponent";
import { TodoLabelsComponent } from '../components/TodoLabelsComponent';

const initialRoute = "Home";

const routes = {
  Home: {
    screen: TodoListComponent
  },
  Details: {
    screen: TodoDetailsComponent
  },
  Labels: {
    screen: TodoLabelsComponent
  }
};

export { initialRoute, routes };
