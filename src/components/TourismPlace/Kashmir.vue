<template>
  <div id="kashmir-tourism">
    <!-- Hero Section -->
    <div id="hero-section" class="section hero">
      <img
        src="/src/assets/Images/Kashmir/game-of-thrones-4917988_1280.jpg"
        alt="Dal Lake, Kashmir"
        class="hero-image"
      />
      <p class="hero-description">
        Kashmir, often called "Paradise on Earth," enchants visitors with its stunning natural beauty,
        serene lakes, lush gardens, and majestic mountains. Famous for Dal Lake and houseboats in Srinagar,
        the valley offers experiences like shikara rides, vibrant Mughal gardens, and snow-covered peaks.
        Explore Gulmarg’s skiing slopes, Pahalgam’s scenic trails, or the spiritual ambiance of the ancient
        temples and shrines. Kashmir’s rich culture, handicrafts, and delicious cuisine make every visit unforgettable.
      </p>
    </div>

    <!-- Gallery Section -->
    <div id="gallery-section" class="section gallery">
      <div class="gallery-card">
        <img
          src="/src/assets/Images/Kashmir/beautiful-pakistan-2727048_1280.jpg"
          alt="Gulmarg"
          class="gallery-image"
        />
        <h4 class="place-name">Gulmarg</h4>
      </div>
      <div class="gallery-card">
        <img
          src="/src/assets/Images/Kashmir/mountains-4808137_1280.jpg"
          alt="Pahalgam"
          class="gallery-image"
        />
        <h4 class="place-name">Pahalgam</h4>
      </div>
      <div class="gallery-card">
        <img
          src="/src/assets/Images/Kashmir/mountains-6740498_1280.jpg"
          alt="Shalimar Garden"
          class="gallery-image"
        />
        <h4 class="place-name">Shalimar Garden</h4>
      </div>
      <div class="gallery-card">
        <img
          src="/src/assets/Images/Kashmir/game-of-thrones-4917988_1280.jpg"
          alt="Dal Lake Shikara"
          class="gallery-image"
        />
        <h4 class="place-name">Dal Lake</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');

#hero-section {
  display: flex;
}

#kashmir-tourism {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  max-width: 1200px;
  margin: auto;
  padding-top: 1%;
}

.section {
  margin-bottom: 40px;
}

.hero {
  text-align: center;
  position: relative;
}

.hero-image {
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.hero-description {
  margin-top: 20px;
  font-size: 1.4rem;
  padding: 0 20px;
  font-family: 'Playfair Display', serif;
  background: linear-gradient(90deg, #f12711, #f5af19, #17ead9, #6078ea);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textColorFlow 8s ease infinite;
  text-align: justify;
}

@keyframes textColorFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gallery {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.gallery-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  flex: 1 1 22%;
  text-align: center;
  transition: transform 0.3s ease;
}

.gallery-card:hover {
  transform: translateY(-8px);
}

.gallery-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.place-name {
  padding: 10px 0;
  font-size: 1rem;
  background-color: #f8f8f8;
  color: #444;
  font-weight: 600;
}
</style>
