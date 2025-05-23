<template>
<nav>
    <div class="logo">
      <h1>Explore India 🌍</h1>
    </div>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/gujarat">Gujarat</router-link>
      <router-link to="/rajasthan">Rajasthan</router-link>
      <router-link to="/himachal">Himachal</router-link>
      <router-link to="/kashmir">Kashmir</router-link>
      <router-link to="/kerala">Kerala</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </nav>


</template>

<style scoped>
nav {
  background: linear-gradient(to right, #3f51b5, #5c6bc0);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
 
}

.logo h1 {
  margin: 0;
  color: white;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 6px;
  transition: background-color 0.3s, transform 0.2s;
}

.nav-links a:hover {
  background-color: rgba(255, 165, 0, 0.2);
  transform: translateY(-2px);
  color: #ffcc80;
}

.nav-links a.router-link-active {
  background-color: #ff9800;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}

</style>