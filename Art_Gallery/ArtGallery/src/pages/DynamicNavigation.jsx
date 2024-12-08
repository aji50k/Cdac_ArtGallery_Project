// components/DynamicNavigation.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../constaints/RouteConstants';  // Import ROUTES
import DefaultNavigation from './DefaultNavigation';
import GalleryNavigation from './GalleryNavigation';

export function DynamicNavigation (){
  const location = useLocation();

  // Define the routes where Gallery-specific navigation should appear
  const galleryRoutes = [
    ROUTES.ABSTRACT,
    ROUTES.PAINTINGS,
    ROUTES.PORTRAITS,
    ROUTES.SCULPTURE,
    ROUTES.TRADITIONAL
  ];

  // Determine if the current route is part of the gallery
  //const isGalleryRoute = galleryRoutes.some((route) => location.pathname.startsWith(route));
  const isGalleryRoute = galleryRoutes.includes(location.pathname);
  console.log("Current path:", location.pathname);
console.log("Gallery routes:", galleryRoutes);
  return isGalleryRoute ? <GalleryNavigation /> : <DefaultNavigation />;
};

//export default DynamicNavigation;
