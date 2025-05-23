<template>
  <div id="gujarat-tourism">
    <!-- Hero Section -->
    <div id="hero-section" class="section hero">
      <img
        src="/src/assets/Images/Gujarat/lion-515028_1280.jpg"
        alt="Gujarat Lion"
        class="hero-image"
      />
      <p class="hero-description">
        Gujarat Tourism offers a unique blend of heritage, culture, wildlife, and natural beauty.
        Known for landmarks like the Statue of Unity, Rann of Kutch, and Gir National Park (home to
        the Asiatic lion), Gujarat attracts visitors from across the globe. Pilgrimage sites such as
        Somnath Temple and Dwarka add religious significance. The state's colorful festivals like
        Navratri and the International Kite Festival showcase its vibrant culture. With historical
        sites, delicious cuisine, and warm hospitality, Gujarat is a must-visit destination in India.
      </p>
    </div>

    <!-- Gallery Section -->
    <div id="gallery-section" class="section gallery">
      <div class="gallery-card">
        <img
          src="/src/assets/Images/Gujarat/istockphoto-1128240818-1024x1024.jpg"
          alt="Place 1"
          class="gallery-image"
        />
        <h4 class="place-name">Somnath</h4>
      </div>
      <div class="gallery-card">
        <img
          src="/src/assets/Images/Gujarat/istockphoto-486811554-1024x1024.jpg"
          alt="Place 2"
          class="gallery-image"
        />
        <h4 class="place-name">Dwarka</h4>
      </div>
      <div class="gallery-card">
        <img
          src="/src/assets/Images/Gujarat/bird-4051495_1280.jpg"
          alt="Place 3"
          class="gallery-image"
        />
        <h4 class="place-name">Nal Sarovar</h4>
      </div>
      <div class="gallery-card">
        <img
          src="/src/assets/Images/Gujarat/lion-515028_1280.jpg"
          alt="Place 4"
          class="gallery-image"
        />
        <h4 class="place-name">Gir National Park</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');

#hero-section{
 
   display: flex;
}

  #gujarat-tourism {
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

