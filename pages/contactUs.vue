<template>
  <div>
    <NavMenu v-if="isContactPage"></NavMenu>

    <div class="contact-view">
      <div class="contact-view-bg">
        <div class="contact-form-container">
          <div class="contact-title">
            <span class="chinese-title">联系我们</span>
            <span class="english-title">Send us a message</span>
          </div>
          <form action="https://formspree.io/f/mrbzdeeg" class="contact-form">
            <div class="contact-form-group">
              <label for="name">昵称 <span> Enter your name </span></label>
              <input type="text" id="name"/>
            </div>
            <div class="contact-form-group">
              <label for="email">邮箱 <span> Enter your email </span></label>
              <input type="email" id="email"/>
            </div>
            <div class="contact-form-group">
              <label for="message">留言 <span>Your message </span></label>
              <textarea id="message"></textarea>
            </div>
            <button type="submit" class="submit-button">发送</button>
          </form>
          <p class="response-text">我们将尽快给您回复 We will respond as soon as possible</p>
        </div>
      </div>
    </div>
    <FooterMenu v-if="isContactPage"></FooterMenu>
  </div>
</template>

<script>
import NavMenu from "../components/NavMenu.vue";
import FooterMenu from "../components/FooterMenu.vue";

export default {
  components: {
    NavMenu,
    FooterMenu
  },
  computed: {
    // Use computed property to check if the current route is '/contactUs'
    isContactPage() {
      return this.$route.path === '/contactUs';
    }
  }
};
</script>

<style scoped>
.contact-view-bg {
  width: 100%;
  height: 100vh;
  background: url("../assets/back/ri.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: left;
  padding: 0 clamp(2rem, 10vw, 16rem);
  align-items: center;
}

.contact-form-container {
  background-color: rgba(255, 255, 255, 0.8); /* 半透明白色背景 */
  padding: 40px;
  width: 40%;
  border-radius: 10px;
}

.contact-title {
  text-align: left;
  margin-bottom: 20px;
}

.chinese-title {
  font-size: 1.8rem;
  color: #ff6702;
  display: block;
}

.english-title {
  font-size: 1.2rem;
  color: #ff6702;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.contact-form-group {
  margin-bottom: 20px;
}

.contact-form-group label {
  font-size: 1.2rem;
  color: #ff6702;
  display: block;
  margin-bottom: 5px;
}

.contact-form-group label span {
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
}

.contact-form-group input,
.contact-form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ff6702;
  border-radius: 5px;
}

.contact-form-group textarea {
  height: 120px;
}

.contact-form-group input:focus,
.contact-form-group textarea:focus {
  border-color: #ff6702; /* 设置选中时的边框颜色 */
  outline: none; /* 去除默认的聚焦框 */
}

.submit-button {
  background-color: #ff6702;
  color: white;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #e45a00;
}

.response-text {
  text-align: center;
  font-size: 1rem;
  color: #333;
  margin-top: 20px;
}

@media (max-width: 850px) {
  .contact-view-bg {
    background: url("../assets/back/ri2.jpg") no-repeat;
    background-size: 100% 100%;
    padding: 0;
  }

  .contact-form-container {
    width: 90%;
    margin: 0 auto;
    height: 68%;
  }
}
</style>
