import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"
const AddPartai = React.lazy(() => import("./pages/AddPartai"));
const ListPartai = React.lazy(() => import("./pages/ListPartai"));
const AddPaslon = React.lazy(() => import("./pages/AddPaslon"));
const ListPaslon = React.lazy(() => import("./pages/ListPaslon"));
const Admin = React.lazy(() => import("./pages/Admin"));
const Vote = React.lazy(() => import("./pages/Vote"));
const DetailPageAfterLogin = React.lazy(
  () => import("./pages/DetailPageAfterLogin"),
);
const DetailPage = React.lazy(() => import("./pages/DetailPage"));
const VoteOne = React.lazy(() => import("./pages/VoteOne"));
const LandingPageAfterLogin = React.lazy(
  () => import("./pages/LandingPageAfterLogin"),
);
const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const ModalVote = React.lazy(() => import("./pages/ModalVote"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/modalvote" element={<ModalVote />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route
            path="/landingpageafterlogin"
            element={<LandingPageAfterLogin />}
          />
          <Route path="/voteone" element={<VoteOne />} />
          <Route path="/detailpage" element={<DetailPage />} />
          <Route
            path="/detailpageafterlogin"
            element={<DetailPageAfterLogin />}
          />
          <Route path="/vote" element={<Vote />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/listpaslon" element={<ListPaslon />} />
          <Route path="/addpaslon" element={<AddPaslon />} />
          <Route path="/listpartai" element={<ListPartai />} />
          <Route path="/addpartai" element={<AddPartai />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
