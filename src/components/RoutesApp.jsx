import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import { Results } from './Results';

export const RoutesApp = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" >
          <Route path="/" element={<Navigate replace to="/search" />} />
        </Route>
        {["/search", "/images", "/news", "/videos"].map(path => (
          <Route
            key={<Results />} // optional: avoid full re-renders on route changes
            path={path}
            element={<Results />}
          />
        ))}
      </Routes>
    </div>
  )
}
