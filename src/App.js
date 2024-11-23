import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DriverDashboardPage from "./pages/DriverDashboardPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import CarSelectionPage from "./pages/CarSelectionPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import AuthPage from "./pages/AuthPage";
import ScrollToTop from "./hooks/ScrollToTop";
import RoundTripSelection from "./pages/RoundTripSelection";
import GoodsSelectionPage from "./pages/GoodsSelectionPage";
import GoodsBookingConfirmation from "./pages/GoodsBookingConfirmationPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" index={true} element={<LandingPage />} />
          <Route path="/driver-dashboard" element={<DriverDashboardPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
          <Route path="/car-selection" element={<CarSelectionPage />} />
          <Route
            path="/booking-confirmation"
            element={<BookingConfirmationPage />}
          />
          <Route path="/auth/signup" element={<AuthPage />} />
          <Route path="/goods-selection" element={<GoodsSelectionPage />} />
          <Route path="/goods-confirm-page" element={<GoodsBookingConfirmation />} />
          <Route
            path="/round-trip-selection"
            element={<RoundTripSelection />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
