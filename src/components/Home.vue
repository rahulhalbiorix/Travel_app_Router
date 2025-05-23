<template>
  <div class="home">
    <h1>Explore Beautiful Destinations</h1>
  </div>
  <div class="destination">
    <router-link  :to="destination.name"    class="card" v-for="destination in destinations" :key="destination.placeName">
      <img :src="destination.image1" alt="Destination Image" />
      <div class="content">
        <h2>{{ destination.placeName }}</h2>
        <p>{{ destination.description }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import SourceData from '../Data.json'

export default {
  data() {
    return {
      destinations: SourceData
    }
  }
}
</script>

<style scoped>

.home {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f9d423, #ff4e50);
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}


.destination {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  justify-content: center;
  background-color: #f5f5f5;
}


.card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 280px;
  transition: transform 0.3s;
}
.card:hover {
  transform: translateY(-5px);
}


.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}


.content {
  padding: 1rem;
}
.content h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}
.content p {
  font-size: 1rem;
  color: #555;
  line-height: 1.4;
}
</style>
