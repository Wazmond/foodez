import { createBrowserRouter,
    createRoutesFromElements
 } from "react-router-dom";
import { Route } from "react-router";

import Root from './Root'
import Dashboard from './Sites/Dashboard'
import Recipe from './Sites/Recipe'
import Macros from './Sites/Macros'
import Fitness from './Sites/Fitness'

 const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="recipe" element={<Recipe />} />
          <Route path="macros" element={<Macros />} />
          <Route path="fitness" element={<Fitness />} />
        </Route>
    )
 );
 export default router;