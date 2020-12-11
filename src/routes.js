import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import AddNewFormation from "./views/AddNewFormation";
import Formations from "./views/Formations";
import News from "./views/News";
import AddNewNews from "./views/AddNewNews";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/formations" />
  },
  {
    path: "/add-new-formation",
    layout: DefaultLayout,
    component: AddNewFormation
  },
  {
    path: "/formations",
    layout: DefaultLayout,
    component: Formations
  },
  {
    path: "/news",
    layout: DefaultLayout,
    component: News
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-news",
    layout: DefaultLayout,
    component: AddNewNews
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
