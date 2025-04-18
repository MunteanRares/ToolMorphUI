import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../Components/Pages/HomePage/HomePage";
import PaletteExtractorPage from "../Components/Pages/PaletteExtractorPage/PaletteExtractorPage";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route
                path="/palette-extractor"
                element={<PaletteExtractorPage />}
            />
        </Routes>
    );
};

export default AnimatedRoutes;
