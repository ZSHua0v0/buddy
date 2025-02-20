<template>
  <div>
    <div class="footer">
      <div class="footer-top">
        <div class="footer-top-left">
          <div class="footer-top-left-logo"><img src="../assets/logo2.png">
            <div class="footer-logo">Buddy’s Cloud</div>
          </div>
          <p>不只是您的AWS云服务代理商， 更是您云上旅程的可靠伙伴</p>
          <p>Trusted AWS partners on the cloud, Tailor-made AWS cloud solutions</p>
        </div>
        <div class="footer-top-right">
          <ul class="footer-top-right-ul">
            <li class="title">服务器类型</li>
            <li>
              <router-link to="/contactUs">大带宽服务器</router-link>
            </li>
            <li>
              <router-link to="/contactUs">轻量云服务器</router-link>
            </li>
            <li>
              <router-link to="/contactUs">站群服务器</router-link>
            </li>
            <li>
              <router-link to="/contactUs">高防服务器</router-link>
            </li>
            <li>
              <router-link to="/contactUs">ec2服务器</router-link>
            </li>
          </ul>
          <ul class="footer-top-right-ul">
            <li class="title">网络</li>
            <li>
              <router-link to="/contactUs">CDN</router-link>
            </li>
            <li>
              <router-link to="/contactUs">高防盾</router-link>
            </li>
            <li>
              <router-link to="/contactUs">跨境数据传输</router-link>
            </li>
            <li>
              <router-link to="/contactUs">全球骨干网</router-link>
            </li>
          </ul>
          <ul class="footer-top-right-ul">
            <li class="title">服务</li>
            <li>
              <router-link to="/contactUs">账户开通</router-link>
            </li>
            <li>
              <router-link to="/contactUs">账单代付</router-link>
            </li>
            <li>
              <router-link to="/contactUs">账户解锁</router-link>
            </li>
          </ul>
          <ul>
            <li class="title2" style="border-bottom: 2px solid white;margin-top: 10px">
              关于我们
            </li>
            <li>
              <router-link to="/contactUs">新闻资讯</router-link>
            </li>
            <li>
              <router-link to="/contactUs">站点地图</router-link>
            </li>
            <li>
              <router-link to="/contactUs">联系我们</router-link>
            </li>
          </ul>
          <ul>
            <li class="title2 display-none" style="border-bottom: 2px solid white;margin-top: 10px"></li>
            <li>
              <router-link to="/contactUs">博客</router-link>
            </li>
            <li>
              <router-link to="/contactUs">隐私政策</router-link>
            </li>
            <li>
              <router-link to="/contactUs">新闻稿</router-link>
            </li>
          </ul>
        </div>

      </div>
      <div class="footer-bottom">
        <div class="footer-social">
          <a :href="contactLinks.telegram" target="_blank">
            <img src="../assets/icon/Send.png" alt="telegram"/>
          </a>
          <a :href="contactLinks.phone" target="_blank">
            <img src="../assets/icon/Phone.png" alt="phone"/>
          </a>
          <a :href="contactLinks.wechat" target="_blank">
            <img src="../assets/icon/Wexin.png" alt="wechat"/>
          </a>
          <a :href="contactLinks.facebook" target="_blank">
            <img src="../assets/icon/Facebook.png" alt="facebook"/>
          </a>
          <a :href="contactLinks.email" target="_blank">
            <img src="../assets/icon/Email.png" alt="email"/>
          </a>
        </div>
      </div>

    </div>
    <div class="footer2">
      <p>
        <router-link to="/contactUs">隐私</router-link>
        |
        <router-link to="/contactUs">网站条款</router-link>
        |
        <router-link to="/contactUs">Cookie 首选项</router-link>
        |
        &copy; 2022 Raylinx Inc. 或其附属公司. 保留所有权利.
      </p>
    </div>
  </div>
</template>

<script>
import {contactLinks} from "../static/js/contact_link.js";
import '../assets/CSS/styles.css';
export default {
  computed: {
    contactLinks() {
      return contactLinks
    }
  },
  setup() {


    return {}
  }
}
</script>

<style scoped>
.footer {
  background-color: #ff6702;
  color: white;
  padding: 3rem 5%;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.footer-top-left {
  width: 30%;
}

.footer-top-left-logo {
  display: flex;
  align-items: flex-end;
}

.footer-logo {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.footer-top-right {
  display: flex;
  justify-content: left;
  width: 60%;
}

.footer-top-right ul {
  list-style-type: none;
  padding-left: 0;
}

.footer-top-right-ul {
  margin-right: clamp(1rem, 8rem, 8rem);
  padding-top: 2%;
}

.footer-top-right li.title {
  height: 30px;
  font-size: clamp(0.2rem, 1vw, 1.3rem);
  color: #ffffff;
  margin-top: 6%;
}

.footer-top-right li.title2 {
  height: 40px;
  font-size: clamp(0.2rem, 1vw, 1.3rem);
  color: #ffffff;
  margin-top: 6%;
}

.footer-top-right li {
  font-size: clamp(0.2rem, 1vw, 1rem);;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.76);
}

.footer-top-right li a {
  font-size: clamp(0.2rem, 1vw, 1rem);;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.76);
}

.footer-bottom {
  display: flex;
  justify-content: flex-start;
}

.footer-social img {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

/* Footer Section */
.footer2 {
  background-color: var(--footer-bg-color);
  color: #777777;
  text-align: center;
  font-size: var(--footer-size-paragraph); /* 动态调整字体大小 */
  bottom: 0;
  width: 100%;
  display: flex; /* 添加 flex 布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: auto; /* 如果没有固定高度，允许内容根据内容自动调整 */
}

.footer2 p {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--footer-size-paragraph);
}

.footer2 a {
  color: #777777;
  text-decoration: none;
  margin: 0 0.5rem;
  font-size: var(--footer-size-paragraph);
}

.footer2 a:hover {
  text-decoration: underline;
}

@media (max-width: 800px) {
  .footer {
    background-color: #ff6702;
    color: white;
    padding: 0;
  }

  .footer-top {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }

  .footer-top-left {
    width: 100%;
    margin: 5% 0 3% 0;
    border-bottom: 1px solid;
    padding-bottom: 2%;
  }

  .footer-logo {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
  }

  .footer-top-left-logo img {
    width: 140px;
    height: 88px;
  }

  .footer-top-left p {
    font-size: 0.9rem;
    margin: 0;
    color: rgba(255, 255, 255, 0.76);
  }

  .footer-top-right {
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 100%;
  }

  .footer-top-right li.title {
    height: auto;
    font-size: max(1.2rem, min(1vw, 1.3rem));
    color: #ffffff;
    margin-top: 0;
    width: 100%;
    display: block;
  }

  .footer-top-right li.title2 {
    height: auto;
    font-size: max(1.2rem, min(1vw, 1.3rem));
    color: #ffffff;
    margin-top: 0;
    width: 20%;
    display: block;
  }

  .footer-top-right ul {
    width: 100%;
    margin-bottom: 0;
  }

  .footer-top-right-ul li {
    display: inline-block;
  }

  .footer-top-right li a {
    font-size: max(1rem, min(1vw, 1rem));
    margin-bottom: 0;
  }

  .footer-top-right ul li {
    display: inline-block;
  }

  .display-none {
    display: none !important;
  }

  .footer-bottom {
    border-top: 1px solid #fff;
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    padding: 2% 0;
  }
  .footer-social img{
    width: 50px;
    height: 50px;
    margin-right: 0;
  }
}
</style>
