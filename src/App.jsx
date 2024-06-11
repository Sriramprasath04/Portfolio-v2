import Header from "./components/Header";
import Body from "./components/Body";
import ContactPage from "./components/ContactPage";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Top from "./components/Top";
import Theme from "./components/Theme";


const App = () =>{
  return (
    <div className="">
      <Header/>
      <div className="w-full px-10 flex flex-col items-center">
        <Body/>
        <About/>
        <Portfolio/>
          <ContactPage/>
          <Theme/>
          <Top/>
      </div>
    </div>
  );
}

export default App;