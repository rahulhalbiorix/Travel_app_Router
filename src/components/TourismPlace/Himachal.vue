<template>
    <div id="gujarat-tourism">
        <!-- Hero Section -->
        <div id="hero-section" class="section hero">
            <img src="/src/assets/Images/Himachal/himachal-2847583_1280.jpg" alt="Gujarat Lion" class="hero-image" />
            <p class="hero-description">
                Nestled in the lap of the Himalayas, Himachal Pradesh is a paradise for nature lovers, adventure
                seekers, and spiritual explorers.
                From the snow-capped peaks of Manali and Shimla to the serene valleys of Spiti and Kinnaur, the state
                offers breathtaking landscapes and rich cultural experiences.
                Trek through pine forests, ski on pristine slopes, explore ancient temples and monasteries, or simply
                relax in peaceful hill stations.
            </p>

        </div>

        <!-- Gallery Section -->
        <div id="gallery-section" class="section gallery">
            <div class="gallery-card">
                <img src="/src/assets/Images/Himachal/chandra-tal-2792123_1280.jpg" alt="Manali" class="gallery-image" />
                <h4 class="place-name">Manali</h4>
            </div>
            <div class="gallery-card">
                <img src="/src/assets/Images/Himachal/dhauladhar-range-5036975_1280.jpg" alt="Shimla" class="gallery-image" />
                <h4 class="place-name">Shimla</h4>
            </div>
            <div class="gallery-card">
                <img src="/src/assets/Images/Himachal/himachal-2847583_1280.jpg" alt="Spiti Valley" class="gallery-image" />
                <h4 class="place-name">Spiti Valley</h4>
            </div>
            <div class="gallery-card">
                <img src="/src/assets/Images/Himachal/nature-4685851_1280.jpg" alt="Dharamshala" class="gallery-image" />
                <h4 class="place-name">Dharamshala</h4>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');

#hero-section {

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
