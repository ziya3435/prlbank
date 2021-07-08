import Header from "./components/shared/Header";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoansPage from "./pages/LoansPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import Register from "./components/SignInUp/Register";
import Signin from "./components/SignInUp/SignIn";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/signin" component={Signin} />
        <Route path="/loans" component={LoansPage} />
        <Route path="/about" component={AboutUsPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/" component={HomePage} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
