<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Oops! Page Not Found</h2>
    <p>The page you're looking for doesn't exist or has been moved.</p>
    <router-link to="/" class="home-link">Go Back Home</router-link>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.not-found h1 {
  font-size: 100px;
  margin: 0;
  color: #ff5722;
}

.not-found h2 {
  font-size: 32px;
  margin: 10px 0;
}

.not-found p {
  font-size: 18px;
  margin-bottom: 30px;
  color: #666;
}

.home-link {
  display: inline-block;
  padding: 12px 25px;
  background-color: #ff5722;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.home-link:hover {
  background-color: #e64a19;
}
</style>
