import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  BlogPage,
  GamesPage,
  HomePage,
  NavBar,
  ProjectsPage,
  RecipesPage,
} from "./index.ts";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
