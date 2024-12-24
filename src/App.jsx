import { useState } from 'react'
import reactLogo from './assets/my-images/logo.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container w-full min-h-screen d-flex flex-col font-mono">
        <header className='w-full h-20 flex items-center bg-green-700'>
          <div className="navbar h-full w-full flex items-center justify-between px-3">
            <div className="logo h-full w-20 flex justify-between items-center font-mono text-green-200 font-extrabold text-2xl">
              <img src={reactLogo} className='w-20 h-16' alt="React Logo" /> Greenify
            </div>
            <div className="links h-full w-fit flex justify-between items-center gap-3 ">
              <a href="#" className='w-1/5 px-2'>Home</a>
              <a href="#" className='w-2/5 px-2'>Plant Types</a>
              <a href="#" className='w-1/5 px-2'>More</a>
              <a href="#" className='w-1/5 px-2'>Contact</a>
            </div>
            <div className="icons w-36 h-full flex justify-between items-center">
               <img src="" alt="search-icon" />
               <img src="" alt="cart-icon" />
            </div>
          </div>
        </header>
        <main>
          <div className="hero">
            <div className="container">
              <div className="right-content">
                <h1>Get the best plants for your home</h1>
                <p>Discover the perfect plants for your space</p>
                <button>Explore</button>
              </div>
              <div className="left-content">
                <div className="card-box">
                  <div className="card">
                    <div className="card-image">
                      <img src="" alt="plant-image" />
                    </div>
                    <div className="card-content">
                      <p>Trendy house Plant</p>
                      <h2>Calathea Plant</h2>
                      <p>Price: $20</p>
                      <button>Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section>
            <div className="container">
              <div className="title">
                <h1>Popular Plants</h1>
              </div>
              <div className="cards">
                <div className="card">
                  <div className="card-content">
                    <p>Snake Plant</p>
                    <h2>Sansevieria</h2>
                    <p>Price: $15</p>
                    <button>Buy Now</button>
                  </div>

                  <div className="card-image">
                    <img src="" alt="plant-image" />
                  </div>

                </div>
                <div className="card">
                  <div className="card-content">
                    <p>Snake Plant</p>
                    <h2>Sansevieria</h2>
                    <p>Price: $15</p>
                    <button>Buy Now</button>
                  </div>

                  <div className="card-image">
                    <img src="" alt="plant-image" />
                  </div>

                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="title">
                <h1>Best Sellers</h1>
              </div>
              <div className="cards">
               <div className="card-box">
               <div className="card">
                  <div className="card-content">
                    <p>Snake Plant</p>
                    <h2>Sansevieria</h2>
                    <p>Price: $15</p>
                    <button>Buy Now</button>
                  </div>
                </div>
               </div>
               <div className="card-box">
               <div className="card">
                  <div className="card-content">
                    <p>Snake Plant</p>
                    <h2>Sansevieria</h2>
                    <p>Price: $15</p>
                    <button>Buy Now</button>
                  </div>
                </div>
               </div>
               <div className="card-box">
               <div className="card">
                  <div className="card-content">
                    <p>Snake Plant</p>
                    <h2>Sansevieria</h2>
                    <p>Price: $15</p>
                    <button>Buy Now</button>
                  </div>
                </div>
               </div>
               <div className="card-box">
               <div className="card">
                  <div className="card-content">
                    <p>Snake Plant</p>
                    <h2>Sansevieria</h2>
                    <p>Price: $15</p>
                    <button>Buy Now</button>
                  </div>
                </div>
               </div>
               <div className="card-box">
               <div className="card">
                  <div className="card-content">
                    <p>Snake Plant</p>
                    <h2>Sansevieria</h2>
                    <p>Price: $15</p>
                    <button>Buy Now</button>
                  </div>
                </div>
               </div>
               <div className="card-box">
               <div className="card">
                  <div className="card-content">
                    <p>Snake Plant</p>
                    <h2>Sansevieria</h2>
                    <p>Price: $15</p>
                    <button>Buy Now</button>
                  </div>
                </div>
               </div>
              </div>

            </div>
          </section>
          
        </main>

        <footer>
          <div className="footer-content">
            <p>&copy; 2023 Greenify</p>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

        </footer>

      </div>
    </>
  )
}

export default App
