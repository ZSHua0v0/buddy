<template>
  <div class="navbar">
    <!-- Mobile view -->
    <div v-if="isMobile" class="navbar-brand-drawer">
      <div class="drawer-logo">
        <img src="../assets/logo.png" alt="Logo" />
      </div>
      <div style="display: flex; justify-content: center; align-items: center;">
        <div class="drawer-icons">
          <a :href="contactLinks.telegram" target="_blank">
          <img src="../assets/icon/tg.png" alt="Telegram" />
          </a>
        </div>
        <div class="drawer-icons">
          <a :href="contactLinks.phone" target="_blank">
          <img src="../assets/icon/Phone2.png" alt="Phone" />
          </a>
        </div>
        <div class="drawer-icons">
          <a :href="contactLinks.email" target="_blank">
          <img src="../assets/icon/Globe.png" alt="Globe" />
          </a>
        </div>
        <MenuClickButton
          class="MenuClickButton"
          ref="menuButton"
          @toggle="toggleMenu"
          :burgerBackgroundColor="'#ff6702'"
          :spanBackgroundColor="'#ffffff'"
        />
      </div>
    </div>

    <!-- Drawer Menu -->
    <div v-if="isMenuChecked" class="drawer-menu" ref="drawerMenu">
      <ul class="navbar-list2">
        <nuxt-link to="/home">
          <li>首页</li>
        </nuxt-link>
        <nuxt-link to="/calculatePrice">
          <li>AWS价格计算</li>
        </nuxt-link>
        <nuxt-link to="/aboutUs">
          <li>关于我们</li>
        </nuxt-link>
        <nuxt-link to="/contactUs">
          <li>联系我们</li>
        </nuxt-link>
      </ul>
      <div class="drawer-menu-icon">
        <img src="../assets/icon/img.png" alt="Icon" />
      </div>
    </div>

    <!-- Desktop Menu -->
    <div v-else class="pc-menu">
      <ul class="navbar-list">
        <li><nuxt-link to="/home">首页</nuxt-link></li>
        <li><nuxt-link to="/calculatePrice">AWS价格计算</nuxt-link></li>
        <li><img src="../assets/logo.png" alt="Buddy.com" class="logo" /></li>
        <li><nuxt-link to="/aboutUs">关于我们</nuxt-link></li>
        <li><nuxt-link to="/contactUs">联系我们</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import MenuClickButton from "../components/MenuClickButton.vue";
import { mapState, mapActions } from "vuex";
import { contactLinks } from '../static/js/contact_link.js';

export default {
  components: {
    MenuClickButton,
  },
  data() {
    return {
      isMobile: false, // Check if mobile
      contactLinks,
    };
  },
  computed: {
    ...mapState({
      isMenuChecked: (state) => state.isMenuChecked, // Get menu state from Vuex
    }),
  },
  mounted() {
    // Check if it's mobile
    this.isMobile = window.innerWidth <= 800;
    window.addEventListener("resize", this.handleResize); // Resize event listener
    document.addEventListener("click", this.handleClickOutside); // Global click event listener
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize); // Clean up resize event listener
    document.removeEventListener("click", this.handleClickOutside); // Clean up global click event listener
  },
  methods: {
    ...mapActions(["toggleMenu"]), // Map Vuex action to toggle menu
    handleResize() {
      this.isMobile = window.innerWidth <= 800; // Update mobile state
    },
    handleClickOutside(event) {
      const menu = document.querySelector('.drawer-menu');  // 直接选择 drawer-menu
      const menuButton = document.querySelector('.MenuClickButton'); // 直接选择 MenuClickButton
      if (menu && !menu.contains(event.target) && menuButton && !menuButton.contains(event.target)) {
        this.$store.dispatch('toggleMenu'); // 关闭菜单
      }
    }
  },
};
</script>

<style scoped>
.navbar {
  border-bottom: 1px solid #ff6702;
  padding: 0.3rem;
}

.navbar-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
}

.navbar-list li {
  margin: 0 26px;
}

.navbar-list a {
  color: #ff6702;
  text-decoration: none;
  font-size: 15px;
}

.navbar-list a:hover {
  text-decoration: none;
  color: rgba(237, 97, 5, 0.7);
}

.logo {
  width: 100px;
  height: auto;
}

.pc-menu {
  margin: 0 auto;
}

/* Drawer Menu Styles */
.drawer-menu {
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  transition: all 0.2s;
  border-top: 1.5px solid #ff6702;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow */
}

/* Mobile View */
@media (max-width: 800px) {
  .navbar-brand-drawer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .MenuClickButton {
    float: right;
  }

  .navbar-list {
    display: none; /* Hide desktop menu */
  }

  .navbar-list2 {
    list-style-type: none;
    padding: 4%;
  }

  .navbar-list2 li {
    margin: 0 26px 10px 26px;
    height: 50px;
    border: 2px solid #ff6702;
    border-radius: 5px;
    line-height: 50px;
    padding-left: 3%;
    background: white;
  }

  .navbar-list2 a {
    color: #ff6702;
    text-decoration: none;
    font-size: 15px;
  }

  .navbar-list2 a:hover {
    text-decoration: none;
    color: rgba(237, 97, 5, 0.7);
  }

  .drawer-menu-icon {
    width: 100%;
    height: 18px;
    position: absolute;
    top: 90%;
    right: 1%;
    border-bottom: 1px solid #ff6702;
  }

  .drawer-menu-icon img {
    width: 36px;
    height: 100%;
    float: right;
  }

  .drawer-icons img {
    width: 40px;
    height: 40px;
  }

  .drawer-logo img {
    width: 100px;
    height: auto;
    margin-bottom: 10px;
  }
}
</style>
