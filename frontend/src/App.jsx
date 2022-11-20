import React from "react";
import { Blog } from "./main/pages/Blog";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Blogstory } from "./main/pages/Blogstory";

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes >
            <Route path="/blog" exact element={<Blog />}></Route>
            <Route path="blog/skillaquisition" element={<Blogstory />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
