import Header from "./components/shared/Header";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoansPage from "./pages/LoansPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import RegisterPage from "./pages/RegisterPage";
import SigninPage from "./pages/SigninPage";
import UserInfoPage from "./pages/UserInfoPage";
import LoginPage from "./pages/LoginPage";
import RegisterPasswordPage from "./pages/ResetPasswordPage";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route path="/registerpassword" component={RegisterPasswordPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/userinfo" component={UserInfoPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/signin" component={SigninPage} />
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
