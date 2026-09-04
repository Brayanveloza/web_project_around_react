import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App(): React.JSX.Element {
  return (
    <div className="page__content">
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
