import { ROUTES } from "../constaints/RouteConstants";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Abstract from "./Abstract";
import PortfolioCreation from "./PortfolioCreation";
import Gallery from "./Gallery";
import Portraits from "./Potraits"; // Fixed typo
import Sculpture from "./Sculpture";
import Traditional from "./Traditional";
import User1 from "./User1";
import UserProfile from "./UserProfile";
import Paintings from "./Potraits";


export function GalleryRouter() {
    return (
        <div>
            <Navigation/>
            <Routes>
            <Route path={ROUTES.ABSTRACT} element={<Abstract />} />
                <Route path={ROUTES.GALLERY} element={<Gallery />} />
                <Route path={ROUTES.PAINTINGS} element={<Paintings />} />
                <Route path={ROUTES.PORTRAITS} element={<Portraits />} />
                <Route path={ROUTES.SCULPTURE} element={<Sculpture />} />
                <Route path={ROUTES.TRADITIONAL} element={<Traditional />} />
            </Routes>
        </div>
    );
}
