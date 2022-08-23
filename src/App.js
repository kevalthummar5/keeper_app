import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/header";
import Main from "./main/Main";
import Footer from "./footer/footer";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

export default App;
