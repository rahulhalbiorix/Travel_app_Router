<template>
  <div id="rajasthan-tourism">
    <!-- Hero Section -->
    <div id="hero-section" class="section hero">
      <img
        src="/src/assets/Images/Rajasthan/chittorgarh-7860987_1280.jpg"
        alt="Rajasthan Desert"
        class="hero-image"
      />
      <p class="hero-description">
        Rajasthan Tourism showcases a rich tapestry of royal palaces, historic forts, and golden deserts.
        Explore the Pink City of Jaipur, sail through the lakes of Udaipur, wander the golden dunes of Jaisalmer,
        and marvel at the blue hues of Jodhpur. Known for its vibrant festivals, folk culture, and grand hospitality,
        Rajasthan is where history and tradition come alive in every street. Experience the timeless charm of India's regal heritage.
      </p>
    </div>

    <!-- Gallery Section -->
    <div id="gallery-section" class="section gallery">
      <div class="gallery-card">
        <img
          src="/src/assets/Images/Rajasthan/hawa-mahal-6973938_1280.jpg"
          alt="Jaipur"
          class="gallery-image"
        />
        <h4 class="place-name">Jaipur</h4>
      </div>
      <div class="gallery-card">
        <img
          src="/src/assets/Images/Rajasthan/india-3612588_1280.jpg"
          alt="Udaipur"
          class="gallery-image"
        />
        <h4 class="place-name">Udaipur</h4>
      </div>
      <div class="gallery-card">
        <img
          src="/src/assets/Images/Rajasthan/istockphoto-1224021113-1024x1024.jpg"
          alt="Jaisalmer"
          class="gallery-image"
        />
        <h4 class="place-name">Jaisalmer</h4>
      </div>
      <div class="gallery-card">
        <img
          src="/src/assets/Images/Rajasthan/tourist-3872458_1280.jpg"
          alt="Mount Abu"
          class="gallery-image"
        />
        <h4 class="place-name">Mount Abu</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');

#hero-section{
 
   display: flex;
}

  #rajasthan-tourism {
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
