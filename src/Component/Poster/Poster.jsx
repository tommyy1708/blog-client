import React from 'react';


function Poster() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {/* Main content */}
          <article>
            <h1>Sample Blog Post Title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
              facilisis libero, vel egestas justo. In hac habitasse platea
              dictumst.
            </p>
            <p>
              Vivamus fringilla, justo nec ullamcorper scelerisque, ligula sem
              eleifend velit, eget vehicula sapien elit nec mi.
            </p>
            <p>
              Curabitur vestibulum eros ac interdum. Donec tristique, risus
              nec feugiat varius, metus libero bibendum dui, a malesuada justo
              libero vel nulla.
            </p>
          </article>
        </div>
        <div className="col-md-4">
          {/* Sidebar */}
          <aside>
            <h2>Recent Posts</h2>
            <ul>
              <li>
                <a href="#">Post 1</a>
              </li>
              <li>
                <a href="#">Post 2</a>
              </li>
              <li>
                <a href="#">Post 3</a>
              </li>
            </ul>
            <h2>Categories</h2>
            <ul>
              <li>
                <a href="#">Category 1</a>
              </li>
              <li>
                <a href="#">Category 2</a>
              </li>
              <li>
                <a href="#">Category 3</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Poster;
