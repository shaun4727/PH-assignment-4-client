import MainLayout from "./components/layout/MainLayout";
import "./assets/root.css";
import { FooterObserverProvider } from "./components/layout/FooterObserverContext";
function App() {
  return (
    <>
      <FooterObserverProvider>
        <MainLayout />
      </FooterObserverProvider>
    </>
  );
}

export default App;
