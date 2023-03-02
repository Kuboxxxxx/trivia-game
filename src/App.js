import { Jumbotron } from "./components/Jumbotron";
import { Form } from "./components/Form";
import { Game } from "./components/Game";
import { Results } from "./components/Results";

export const App = () => {
  return (
    <main>
      <Jumbotron />
      <Form />
      <Game />
      <Results />
    </main>
  );
};
