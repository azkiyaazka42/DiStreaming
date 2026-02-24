import './ContentRows.css'

function ContentRows({slideIndex, onNext, onPrev}) {
  return (
    <div id="movies" className="content-container">
      <div className="text-card">
        <p>Trending Now</p>
      </div>

      <div className="card-container">

        <button onClick={onPrev} className="slide-btn left">
          ‹
        </button>
        

        <div className="slider-wrapper">

          <div
            className="slider-track"
            style={{
              transform: `translateX(calc(-${slideIndex} * (var(--card-width) + var(--gap))`
            }}
          >
            <div className="card bg-1">
              <h1 className="title">1</h1>
            </div>

            <div className="card bg-2">
              <h1 className="title">2</h1>
            </div>

            <div className="card bg-3">
              <h1 className="title">3</h1>
            </div>

            <div className="card bg-4">
              <h1 className="title">4</h1>
            </div>

            <div className="card bg-5">
              <h1 className="title">5</h1>
            </div>

            <div className="card bg-6">
              <h1 className="title">6</h1>
            </div>

            <div className="card bg-7">
              <h1 className="title">7</h1>
            </div>

            <div className="card bg-8">
              <h1 className="title">8</h1>
            </div>

            <div className="card bg-9">
              <h1 className="title">9</h1>
            </div>

            <div className="card bg-10">
              <h1 className="title">10</h1>
            </div>

          </div>

        </div>

        <button onClick={onNext} className="slide-btn right">
          ›
        </button>

      </div>
    </div>
    
  )
}

export default ContentRows;