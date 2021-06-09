import './App.css';
import HTMLFlipBook from "react-pageflip";

function App() {
  return (
    <div className="flex justify-center p-3">
      <HTMLFlipBook width={300} height={500}>
        <div className="bg-red-400 shadow-md">
          <img className="p-2" src="https://www.programming-hero.com/assets/img/hero-header/iphone/programming-hero.png" alt="" />
        </div>
        <div className="bg-red-200 shadow-md">
          <img className="p-2" src="https://www.programming-hero.com/assets/img/hero-header/iphone/features-v2.png" alt="" />
        </div>
        <div className="bg-red-300 shadow-md">
          <img className="p-2" src="https://www.programming-hero.com/assets/img/hero-header/iphone/features-v3.png" alt="" />
        </div>
        <div className="bg-red-200 shadow-md">
          <img className="p-2" src="https://www.programming-hero.com/assets/img/hero-header/iphone/features-v2.png" alt="" />
        </div>
        <div className="bg-red-500 shadow-md">
          <img className="p-2" src="https://www.programming-hero.com/assets/img/hero-header/iphone/features-v2.png" alt="" />
        </div>
        <div className="bg-red-400 shadow-md">
          <img className="p-2" src="https://www.programming-hero.com/assets/img/hero-header/iphone/programming-hero.png" alt="" />
        </div>
        <div className="bg-red-200 shadow-md">
          <img className="p-2" src="https://www.programming-hero.com/assets/img/hero-header/iphone/features-v2.png" alt="" />
        </div>
        <div className="bg-red-300 shadow-md">
          <img className="p-2" src="https://www.programming-hero.com/assets/img/hero-header/iphone/features-v3.png" alt="" />
        </div>
        <div className="bg-red-200 shadow-md">
          <img className="p-2" src="https://www.programming-hero.com/assets/img/hero-header/iphone/features-v2.png" alt="" />
        </div>
        <div className="bg-red-500 shadow-md">
          <img className="p-2" src="https://www.programming-hero.com/assets/img/hero-header/iphone/features-v2.png" alt="" />
        </div>

      </HTMLFlipBook>
    </div>
  );
}

export default App;
