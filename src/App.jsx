import { ListCharacters } from './components/ListCharacters'
import { GlobalStyle, LayoutContent } from './styles/global';

import { InputProvider } from "./hooks/useFilterInput";

function App() {
  return (
    <div className="App">
      <LayoutContent>
        <InputProvider>
          <ListCharacters />
        </ InputProvider>
      </LayoutContent>
      <GlobalStyle />
    </div>
  );
}

export default App;
