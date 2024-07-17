import { NextUIProvider } from "@nextui-org/react";
import Trending from "./Components/Page/Trending";
import Content from "./Components/Home/Content";

function App() {
  return (
    <NextUIProvider>
      <Content />
    </NextUIProvider>
  );
}

export default App;
