import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/Home";
import Posts from "../pages/Posts";
import PostDetail from "../pages/PostDetail";
import Agenda from "../pages/Agenda";
import About from "../pages/About";

import Dashboard from "../pages/admin/Dashboard";
import PostList from "../pages/admin/PostList";
import NewPost from "../pages/admin/NewPost";
import EditPost from "../pages/admin/EditPost";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:slug" element={<PostDetail />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="posts" element={<PostList />} />
          <Route path="posts/new" element={<NewPost />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
