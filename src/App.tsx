import { Provider } from "react-redux";
import { store } from "./store";
import { MainLayout } from "./Layouts";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </>
  );
};
