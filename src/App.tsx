import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Auth from "./container/Auth/Auth";
import './App.scss';
import Header from "./component/Header/Header";
import Home from "./container/Home/Home";
import CalorieTracker from "./container/CalorieTracker/CalorieTracker";
import FoodDetail from "./container/FoodDetail/FoodDetail";
import Queries from "./container/Queries/Queries";
import OtherProfile from "./container/Profile/OtherProfile/OtherProfile";
import CurrentProfile from "./container/Profile/CurrentProfile/CurrentProfile";
import PostDetail from "./component/Post/PostDetail/PostDetail";
import Blog from "./container/Blog/Blog";
import BlogDetail from "./container/Blog/BlogDetail/BlogDetail";
function App() {
  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route path={'/home'} element={
                      <React.Fragment>
                          <Header />
                          <Home />
                      </React.Fragment>
                  } />
                  {/*-------------------post Detail-------------------*/}
                  <Route path={'/post-detail'} element={
                      <React.Fragment>
                          <Header />
                          <PostDetail />
                      </React.Fragment>
                  } />

                  <Route path={'/blog'} element={
                      <React.Fragment>
                          <Header />
                          <Blog />
                      </React.Fragment>
                  } />

                  <Route path={'/blog-detail'} element={
                      <React.Fragment>
                          <Header />
                          <BlogDetail />
                      </React.Fragment>
                  } />
                  {/*-------------------post Detail-------------------*/}

                  <Route path={'/calorie-tracker'} element={
                      <React.Fragment>
                          <Header />
                          <CalorieTracker />
                      </React.Fragment>
                  } />
                  <Route path={'/food-detail'} element={
                      <React.Fragment>
                          <Header />
                          <FoodDetail />
                      </React.Fragment>
                  } />
                  <Route path={'/queries'} element={
                      <React.Fragment>
                          <Header />
                          <Queries />
                      </React.Fragment>
                  } />
                  <Route path={'/other-profile'} element={
                      <React.Fragment>
                          <Header />
                          <OtherProfile/>
                      </React.Fragment>
                  } />
                  <Route path={'/profile'} element={
                      <React.Fragment>
                          <Header />
                          <CurrentProfile/>
                      </React.Fragment>
                  } />
                  <Route path={'/auth'} element={<Auth />} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
