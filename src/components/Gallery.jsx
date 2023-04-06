export default function Gallery({ image }) {
  return (
    <div>
      <section>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
          data-interval="10000"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://firebase.google.com/images/social.png"
                class="d-block w-100"
                width="500"
                height="350"
                alt="01"
              />
            </div>
            <div>
              {image.map((val) => (
                <div class="carousel-item">
                  <img
                    src={val}
                    class="d-block w-100"
                    width="500"
                    height="350"
                    alt="mappingImage"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
}
