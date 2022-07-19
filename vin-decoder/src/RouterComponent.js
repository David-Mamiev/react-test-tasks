import { Routes, Route } from "react-router-dom";

import { NotFoundPage } from "./pages/NotFoundPage";
import { VariableIdPage } from "./pages/VariableIdPage";
import { HomePage } from "./pages/HomePage";
import { VariablePage } from "./pages/VariablePage";

import { Header } from "./components/HomePage/Header/Header";

export default function RouterComponent() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="variables" element={<VariablePage />} />
            <Route path="variables/:variableId" element={<VariableIdPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

