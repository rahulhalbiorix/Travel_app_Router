<template>
  <section class="destination">

    <h1>Hello Destination {{ CurruentDestination.name }} {{ destinationId }} </h1>

    <p>{{ CurruentDestination.description }}</p>
    <div>
      <img :src="`${CurruentDestination.image1}`">
      <img :src="`${CurruentDestination.image2}`">
      <img :src="`${CurruentDestination.image3}`">
      <img :src="`${CurruentDestination.image4}`">
    </div>
  </section>

</template>

<script>

import SourceData from '../Data.json'

export default {
  props: {
    Destinationid: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      destinations: SourceData
    }
  },
  computed: {
    // destinationId(){
    //     return  parseInt(this.$route.params.Destinationid);
    // },
    CurruentDestination() {
      return this.destinations.find(des => des.id === parseInt(this.Destinationid))
    }
  },

}


</script>

<style scoped>
.destination {
  padding: 40px 20px;
  margin-bottom: 50px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.destination h1 {
  color: #2c3e50;
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
}

.destination p {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 30px;
  text-align: center;
}

.destination div {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.destination img {
  width: 220px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.destination img:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
</style>