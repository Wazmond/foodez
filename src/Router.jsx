import { createBrowserRouter,
    createRoutesFromElements
 } from "react-router-dom";
import { Route } from "react-router-dom";

import Root from './Root'
import Dashboard from './Sites/Dashboard'
import Recipe from './Sites/Recipe'
import Macros from './Sites/Macros'
import Fitness from './Sites/Fitness'

 const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} >
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Recipe" element={<Recipe />} />
          <Route path="Macros" element={<Macros />} />
          <Route path="Fitness" element={<Fitness />} />
        </Route>
    )
 );
 export default router;