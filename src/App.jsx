import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navabar";
import PriceCard from "./components/PriceCard";
import WalletCard from "./components/WalletCard";
import MarketCard from "./components/MarketCard";
import PortfolioCard from "./components/PortfolioCard";
import { Routes, Route } from "react-router-dom";
import CreateVault from "./pages/CreateVault";
import EnterVault from "./pages/EnterVault";
import Dashboard from "./pages/Dashboard";
import Exchange from "./pages/Exchange";
import Portfolio from "./pages/Portfolio";
import AssetDetails from "./pages/AssetDetails";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import VerifyIdentity from "./pages/VerifyIdentity";
import VaultSecurity from "./pages/VaultSecurity";
import Transactions from "./pages/Transactions";
import TransactionDetails from "./pages/TransactionDetails";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import KYC from "./pages/KYC";
import Language from"./pages/Language";
import Currency from"./pages/Currency";
import Privacy from "./pages/Privacy";
import TrustedDevices from "./pages/TrustedDevices"
import About from "./pages/About"

function App() {
  const [theme, setTheme] = useState("light");
const toggleTheme = () => {
  console.log("Button clicked");

  setTheme((prev) => {
    console.log("Current theme:", prev);
    return prev === "dark" ? "light" : "dark";
  });
};
 
  return (
    <div className={`app ${theme}`}>

    
    <Routes>
      <Route
        path="/"
        element={
          <div>
           <Navbar 
           theme={theme}
           toggleTheme={toggleTheme}
           />
            <Hero />        
          </div>
        }
      />
     
      <Route
        path="/create-vault"
        element={<CreateVault />}
      />
      <Route
        path="/enter-vault"
        element={<EnterVault />}
      />
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
      <Route
      path="/exchange"
      element={<Exchange/>}
      />
      <Route 
      path="/portfolio"
      element={<Portfolio/>}
      />
      <Route
      path="/portfolio/asset-details"
      element={<AssetDetails/>}
      />
      <Route
      path="/deposit"
      element={<Deposit/>}
      />
      <Route
      path="/security"
      element={<VaultSecurity />}
      />
      <Route
      path="/withdraw"
      element={<Withdraw />}
      />
       <Route
       path="/verify-identity"
       element={<VerifyIdentity />}
       />     
       <Route
       path="/transactions"
       element={<Transactions />}
       />
       <Route
       path="/transaction-details"
       element={<TransactionDetails />}
       />
       <Route
       path="/notifications"
       element={<Notifications />}
       />
       <Route
       path="/settings"
       element={<Settings
        theme={theme}
        toggleTheme={toggleTheme}
       />
       }
       />
       <Route
       path="/profile"
       element={<Profile />}
       />
        <Route
        path="/search"
        element={<Search/>}
        />
        <Route 
        path="/kyc"
        element={<KYC />}
        />
        <Route
        path="/language"
        element={<Language />}
        />
        <Route
        path="/currency"
        element={<Currency />}
        />
       <Route
       path="/privacy"
       element={<Privacy />}
       />
        <Route
       path="/trusted-devices"
       element={<TrustedDevices />}
       />
       <Route
       path="/about"
       element={<About />}
       />

        </Routes>
        </div>
  );
}

export default App;