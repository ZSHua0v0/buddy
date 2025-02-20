<template>
  <div>
    <!-- Banner Section -->
    <div class="banner-view">
      <div class="banner-view-leftBox">
        <div class="banner-view-title">Buddy’S</div>
        <div class="banner-view-CloudTitle">Buddy‘s Cloud</div>
        <div class="banner-view-CloudMassage">Hey buddy!<br/>
          Welcome back ,we have prepared a suitable AWS plan for you
        </div>
        <!--      <div class="banner-view-buttons">-->
        <!--        <button>进入首页</button> <button>联系我们</button>-->
        <!--      </div>-->
      </div>
      <div class="banner-view-rightBox">
        <img src="../assets/helloIMG/StartHere.png" alt="buddy.com"/>
      </div>
    </div>

    <!-- Welcome Message Section -->
    <div class="welcomeMessage-view">
      <div class="welcomeMessage-content">
        <p class="welcomeMessage-content-title">Buddy’s Cloud</p>
        <p class="welcomeMessage-content-text">More than just your AWS cloud service reseller, but also a reliable
          partner for your cloud journey</p>
        <div class="welcomeMessage-content-buttons">
          <button @click="goToHomePage">进入首页</button>
          <button @click="goToContactPage">联系我们</button>
        </div>

      </div>
      <div class="footer">
        <p>
          <a href="#">隐私</a> |
          <a href="#">网站条款</a> |
          <a href="#">Cookie 首选项</a> |
          &copy; 2022 Raylinx Inc. 或其附属公司. 保留所有权利.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/CSS/styles.css';

export default {
  name: 'IndexPage',
  methods: {
    goToHomePage() {
      this.$router.push(`/home`);
    },
    goToContactPage() {
      this.$router.push(`/contactUs`);
    }
  }
//   data() {
//     return {
//       showHomeAndroid: false,
//       screenWidth: null,
//     }
//   },
//   methods: {
//     bodyScale() {
//       var devicewidth = document.documentElement.clientWidth; // 获取当前分辨率下的可视区域宽度
//       if(devicewidth <= 1600) {
//         var scale = devicewidth / 1600; // 分母——设计稿的尺寸
//         requestAnimationFrame(() => {
//           document.body.style.zoom = scale; // 放大缩小相应倍数
//         });
//       }
//     },
//   },
//
//   mounted() {
//     this.screenWidth = document.body.clientWidth; // 在客户端设置
//     window.onresize = () => {
//       setTimeout(() => {
//         this.screenWidth = document.body.clientWidth;
//       }, 0);  // 使用0延时将任务放入事件循环的尾部
//     };
//   },
//
//   watch: {
//     screenWidth: {
//       handler: function (val) {
//         setTimeout(() => { // 使用setTimeout异步处理
//           if (val >= 800) {
//             this.bodyScale();
//             this.showHomeAndroid = false;
//             // console.log(this.showHomeAndroid);
//           } else if (val < 800) {
//             // this.bodyScale();
//             this.showHomeAndroid = true;
//             // console.log(this.showHomeAndroid);
//           }
//           // this.$forceUpdate();
//         }, 0);
//       },
//       immediate: true,
//       deep: true,
//     },
//   },
}
</script>

<style scoped>


/* Banner Section */
.banner-view {
  width: 100%;
  height: 70vh;
  background-color: #ff6702;
  color: white;
  padding: 0 5rem;
  display: flex;
  justify-content: right;
  align-items: center;
  z-index: 1;
}

.banner-view-rightBox {
  width: var(--dynamic-width-rightBox); /* 使用 root 中的动态宽度 */
  transition: width 0.5s ease; /* 平滑过渡 */
  z-index: 2;
}

.banner-view-rightBox img {
  width: 100%;
  height: var(--dynamic-width-rightBox);
  margin: 0 auto;
}

.banner-view-leftBox {
  width: var(--dynamic-width-leftBox); /* 使用 root 中的动态宽度 */
  transition: width 0.5s ease; /* 平滑过渡 */
  position: absolute;
  left: 5%;
}

.banner-view-title {
  font-size: var(--font-size-title); /* 使用 clamp() 调整字体大小 */
  font-weight: bold;
}

.banner-view-CloudTitle {
  font-size: var(--font-size-subtitle); /* 动态调整字体大小 */
  font-weight: 500;
  margin-left: 10px;
}

.banner-view-CloudMassage {
  font-size: var(--font-size-paragraph); /* 动态调整段落字体 */
  font-weight: 400;
  width: 60%;
  margin-left: 10px;
}

.banner-view-buttons {
  margin-left: 10px;
  margin-top: 5%;
}

.banner-view-buttons button {
  border-radius: 10px;
  padding: 5px;
  border: none;
  color: #ff6702;
  text-align: center;
  width: 15%;
  margin-right: 5%;
  font-size: var(--button-font-size); /* 使用 clamp() 调整按钮字体 */
}

/* Welcome Message Section */
.welcomeMessage-view {
  width: 100%;
  height: 30vh;
  background-color: #ffffff;
  color: #000;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.welcomeMessage-content {
  font-size: var(--font-size-paragraph); /* 动态调整段落字体 */
}

.welcomeMessage-content-title {
  font-size: var(--font-size-subtitle); /* 动态调整标题字体 */
  font-weight: 500;
  color: #ff6702;
}

.welcomeMessage-content-buttons {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 40%;
  padding: 0 2%;
}

.welcomeMessage-content-buttons button {
  background-color: #ff6702;
  text-align: center;
  width: 50%;
  border-radius: 10px;
  padding: 5px;
  border: none;
  font-size: var(--button-font-size); /* 使用 clamp() 调整按钮字体 */
  color: #fff;
}

/* Footer Section */
.footer {
  background-color: var(--footer-bg-color);
  color: var(--footer-text-color);
  text-align: center;
  font-size: var(--footer-size-paragraph); /* 动态调整字体大小 */
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex; /* 添加 flex 布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: auto; /* 如果没有固定高度，允许内容根据内容自动调整 */
}

.footer p {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--footer-size-paragraph);
}

.footer a {
  color: var(--footer-link-color);
  text-decoration: none;
  margin: 0 0.5rem;
  font-size: var(--footer-size-paragraph);
}

.footer a:hover {
  text-decoration: underline;
}

/* 当页面宽度小于 800px 时，动态调整宽度 */
@media (max-width: 800px) {
  .banner-view {
    display: block;
    z-index: 1;
    padding: 1rem;
  }

  .banner-view-leftBox {
    width: 100%; /* 当宽度小于 800px 时，左边盒子宽度变为100% */
    position: relative;
  }

  .banner-view-CloudMassage {
    width: 90%;
  }

  .banner-view-rightBox {
    width: 90%;
    z-index: 2;
    margin: 0 auto;
  }

  .welcomeMessage-content-buttons {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 50%;
    padding: 0 2%;
  }

  .welcomeMessage-view {
    width: 100%;
    height: 25vh;
    background-color: #ffffff;
    color: #000;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
}
</style>
