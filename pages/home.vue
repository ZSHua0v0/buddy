<template>
  <div>
    <NavMenu></NavMenu>
    <div class="home_heroSection">
      <div class="homeView_leftBox">
        <div class="homeView_leftBox_padding_top"></div>
        <div class="logoContainer">
          <img src="@/assets/logo2.png" alt="Logo"/>
        </div>
        <div class="textContainer">
          <div class="textContainer_title">Buddy’s Cloud</div>
          <div class="textContainer_title2">AWS云服务全球代理商</div>
          <div class="right_to"><a :href="contactLinks.Arrow" target="_blank"><img src="../assets/icon/Arrow.png" alt="buddy.com"></a></div>
          <div class="font-size-subtitle3">可信任的AWS云上伙伴，量身定制的AWS云解决方案</div>
          <div class="font-size-paragraph2">Trusted AWS partners on the cloud, Tailor-made AWS cloud solutions</div>
        </div>
      </div>
      <div class="homeView_rightBox"></div>
    </div>
    <div class="personalized-service">
      <div class="personalized-service-left">
        <img src="../assets/back/diannao.jpg" alt="Personalized Service Icon"/>
      </div>
      <div class="personalized-service-right">
        <div class="top-content">
          <div class="personalized-service-right-h2">个性化服务</div>
          <h3>Personalized service</h3>
        </div>
        <div class="bottom-content">
          <p>在Buddy's
            Cloud，我们相信没有一种云解决方案能够适合所有人，这就是为什么我们提供个性化的咨询服务，帮助客户了解他们的需求，并从众多云服务中选择最合适的。</p>
          <p>At Buddy's Cloud, we believe that no one cloud solution is right for everyone, which is why we offer one
            personalized consulting services to help customers understand their needs and choose the most suitable one
            from a wide range of cloud services.</p>
        </div>
      </div>
    </div>
    <div class="service-section">
      <div class="service-section-mini">
        <div class="service-card">
          <img src="../assets/icon/Question.png" alt="Technical advice" class="service-icon"/>
          <h3>技术咨询 <span>Technical advice</span></h3>
          <p>免费提供技术咨询，解答您使用AWS服务过程中遇到的任何问题，帮助您的业务增长。</p>
          <p>Free technical consultation to answer all your questions about using AWS services and help your business
            grow.</p>
        </div>

        <div class="service-card">
          <img src="../assets/icon/File.png" alt="Bill payment" class="service-icon"/>
          <h3>账单代付 <span>Bill payment</span></h3>
          <p>与我们合作的组织，接受多种货币支付，包括人民币、美元和其它外币。</p>
          <p>Affiliated with our organization, accepting a wide range of currencies,including RMB, USD, and tokens.</p>
        </div>

        <div class="service2-card">
          <h3>服务类型 <span>type of service</span></h3>
          <div>
            <p>我们的服务不仅限于技术层面，更包括帮助客户理解云服务，助力他们的业务成长。</p>
            <p>Our services not only on the technical side, but also on helping customers understand cloud services and
              help their businesses grow.</p>
          </div>
        </div>

        <div class="service-card">
          <img src="../assets/icon/User.png" alt="Account opening" class="service-icon"/>
          <h3>账户开通 <span>Account opening</span></h3>
          <p>免费安全开设AWS账户，账户信息安全无忧，您不需要担心账户安全。</p>
          <p>No real-name and no card registration,safe and stable, and account secretsTake control of your own and
            don't need to worry about account security.</p>
        </div>

        <div class="service-card">
          <img src="../assets/icon/Checklist.png" alt="Account management" class="service-icon"/>
          <h3>账户解锁 <span>Unblock your account</span></h3>
          <p>AWS原生技术支持，稳定的账户注册与续期服务。</p>
          <p>AWS original technical support, stable account unblocking and renewal.</p>
        </div>

        <div class="service-card">
          <img src="../assets/icon/Refresh.png" alt="Channel conversion" class="service-icon"/>
          <h3>渠道转换 <span>Channel conversion</span></h3>
          <p>转接代理商，原价续费。</p>
          <p>Convert the agent and renew the originalprice.</p>
        </div>
      </div>
      <div class="service-menu-wrapper">
        <div class="service-card-item">
          <div class="service-card-icon-container">
            <img src="../assets/icon/Question.png" alt="Technical advice"/>
          </div>
          <div class="service-card-text">
            <span class="service-card-text-chinese">技术咨询</span>
            <span class="service-card-text-english">Technical advice</span>
          </div>
        </div>

        <div class="service-card-item tem-borderleft">
          <div class="service-card-icon-container">
            <img src="../assets/icon/File.png" alt="Bill payment"/>
          </div>
          <div class="service-card-text">
            <span class="service-card-text-chinese">账单代付</span>
            <span class="service-card-text-english">Bill payment</span>
          </div>
        </div>

        <div class="service-card-item">
          <div class="service-card-icon-container">
            <img src="../assets/icon/User.png" alt="Account opening"/>
          </div>
          <div class="service-card-text">
            <span class="service-card-text-chinese">账户开通</span>
            <span class="service-card-text-english">Account opening</span>
          </div>
        </div>

        <div class="service-card-item tem-borderleft">
          <div class="service-card-icon-container">
            <img src="../assets/icon/Checklist.png" alt="Unblock your account"/>
          </div>
          <div class="service-card-text">
            <span class="service-card-text-chinese">账户解封</span>
            <span class="service-card-text-english">Unblock your account</span>
          </div>
        </div>

        <div class="service-card-item">
          <div class="service-card-icon-container">
            <img src="../assets/icon/Refresh.png" alt="Channel conversion"/>
          </div>
          <div class="service-card-text">
            <span class="service-card-text-chinese">渠道转换</span>
            <span class="service-card-text-english">Channel conversion</span>
          </div>
        </div>
      </div>
      <div class="service-process">
        <div class="service-process-title">
          <span class="service-process-main-title">服务流程</span>
          <span class="service-process-sub-title">Service process</span>
        </div>

        <div class="service-process-icons">
          <div class="service-process-icons-box">
            <div class="service-process-icon">
              <img src="../assets/icon/Smile.png" alt="Pre-sale" class="icon-image"/>
            </div>
            <div class="service-process-icon-title">售前</div>
            <div class="service-process-icon-p">联系客户经理，免费咨询</div>
          </div>

          <div class="service-process-icons-box service-process-icons-box2">
            <div class="service-process-icon">
              <img src="../assets/icon/Cart.png" alt="In progress" class="icon-image"/>
            </div>
            <div class="service-process-icon-title">售中</div>
            <div class="service-process-icon-p">多种支付方式可选</div>
          </div>
          <div class="service-process-icons-box3">

            <div class="service-process-icon-title">售中</div>
            <div class="service-process-icon-p">多种支付方式可选</div>
            <div class="service-process-icon">
              <img src="../assets/icon/Cart.png" alt="In progress" class="icon-image"/>
            </div>
          </div>
          <div class="service-process-icons-box">
            <div class="service-process-icon">
              <img src="../assets/icon/24h.png" alt="After sale" class="icon-image"/>
            </div>
            <div class="service-process-icon-title">售后</div>
            <div class="service-process-icon-p">技术支持，24小时运维</div>
          </div>
        </div>
      </div>
    </div>
    <contactUs></contactUs>
    <div style="background: #ff6702;padding: 5% 0">
      <div class="team-member-card">
        <div class="team-member-photo">
          <div class="team-member-photo-right-icon"><img src="../assets/icon/img_2.png"></div>
          <div class="team-card-header">
            <p>Buddy's Cloud</p>
            <p class="org_bar"></p>
          </div>
          <div class="team-card-body">
            <div class="team-photo">
              <img src="../assets/back/FRANK-03.png" alt="Frank Wang"/>
            </div>
          </div>
          <div class="team-card-footer">
            <div class="team-card-footer-name">Frank Wang <span>AWS Service</span></div>
            <p>知云 懂云 用云 <img src="../assets/icon/img.png" alt=""></p>
          </div>
        </div>
        <div class="team-member-info">
          <h2>Frank Wang</h2>
          <p class="description">
            AWS中国代理，超过十年专业AWS使用经验，解决3000+客户的技术问题，专业素质强，人脉广泛，结识AWS原厂技术员和阿里国际总代理。</p>
          <p class="description">AWS China general agent, more than 10 years of professional AWS experience, Solve the
            technical problems of 3000+ customers, strong professional quality and connections. Extensively, get
            acquainted with AWS original technicians and Ali international distributors.</p>
        </div>
      </div>

    </div>
    <div class="service-table">
      <div style="width: 80%;margin: 0 auto;border-top: 8px solid #ff6702;">
        <div class="service-table-row">
          <div class="service-table-icon"><img src="../assets/icon/Building.png" alt=""></div>
          <div class="service-table-row-mini">
            <div class="service-table-cell title">服务类型</div>
            <div class="row-mini-lie">
              <div class="service-table-cell">
                <div>轻量云服务器</div>
                <div>ec2服务器</div>
              </div>
              <div class="service-table-cell">
                <div>站群服务器</div>
                <div>高防服务器</div>
              </div>
            </div>
            <div class="service-table-cell"><a :href="contactLinks.CustomerService" target="_blank">更多咨询客服
              <svg t="1740226957523" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="4090" width="200" height="200">
                <path
                  d="M744.848 536L472.96 807.248a42.56 42.56 0 0 0 0 60.272 42.8 42.8 0 0 0 60.416 0l302.128-301.376a42.56 42.56 0 0 0 0-60.288L533.36 204.48a42.8 42.8 0 0 0-60.416 0 42.56 42.56 0 0 0 0 60.272L744.848 536z m-300.416 0L172.512 807.248a42.56 42.56 0 0 0 0 60.272 42.8 42.8 0 0 0 60.432 0L535.04 566.144a42.56 42.56 0 0 0 0-60.288L232.96 204.48a42.8 42.8 0 0 0-60.432 0 42.56 42.56 0 0 0 0 60.272L444.432 536z"
                  fill="#7e7d7d" p-id="4091"></path>
              </svg>
            </a></div>
          </div>

        </div>

        <div class="service-table-row">
          <div class="service-table-icon"><img src="../assets/icon/Location.png" alt=""></div>
          <div class="service-table-row-mini">
            <div class="service-table-cell title">地址范围</div>
            <div class="row-mini-lie">
              <div class="service-table-cell">
                <div>中国香港</div>
                <div>新加坡</div>
              </div>
              <div class="service-table-cell">
                <div>美国</div>
                <div>日本</div>
              </div>
            </div>
            <div class="service-table-cell"><a :href="contactLinks.CustomerService" target="_blank">更多咨询客服
              <svg t="1740226957523" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="4090" width="200" height="200">
                <path
                  d="M744.848 536L472.96 807.248a42.56 42.56 0 0 0 0 60.272 42.8 42.8 0 0 0 60.416 0l302.128-301.376a42.56 42.56 0 0 0 0-60.288L533.36 204.48a42.8 42.8 0 0 0-60.416 0 42.56 42.56 0 0 0 0 60.272L744.848 536z m-300.416 0L172.512 807.248a42.56 42.56 0 0 0 0 60.272 42.8 42.8 0 0 0 60.432 0L535.04 566.144a42.56 42.56 0 0 0 0-60.288L232.96 204.48a42.8 42.8 0 0 0-60.432 0 42.56 42.56 0 0 0 0 60.272L444.432 536z"
                  fill="#7e7d7d" p-id="4091"></path>
              </svg>
            </a></div>
          </div>

        </div>

        <div class="service-table-row">
          <div class="service-table-icon"><img src="../assets/icon/Wi-Fi.png" alt=""></div>
          <div class="service-table-row-mini">
            <div class="service-table-cell title">带宽范围</div>
            <div class="row-mini-lie">
              <div class="service-table-cell">
                <div>5M</div>
                <div>10M</div>
              </div>
              <div class="service-table-cell">
                <div>100M</div>
                <div>1000M</div>
              </div>
            </div>
            <div class="service-table-cell"><a :href="contactLinks.CustomerService" target="_blank">更多咨询客服
              <svg t="1740226957523" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="4090" width="200" height="200">
                <path
                  d="M744.848 536L472.96 807.248a42.56 42.56 0 0 0 0 60.272 42.8 42.8 0 0 0 60.416 0l302.128-301.376a42.56 42.56 0 0 0 0-60.288L533.36 204.48a42.8 42.8 0 0 0-60.416 0 42.56 42.56 0 0 0 0 60.272L744.848 536z m-300.416 0L172.512 807.248a42.56 42.56 0 0 0 0 60.272 42.8 42.8 0 0 0 60.432 0L535.04 566.144a42.56 42.56 0 0 0 0-60.288L232.96 204.48a42.8 42.8 0 0 0-60.432 0 42.56 42.56 0 0 0 0 60.272L444.432 536z"
                  fill="#7e7d7d" p-id="4091"></path>
              </svg>
            </a></div>
          </div>

        </div>

        <div class="service-table-row">
          <div class="service-table-icon"><img src="../assets/icon/Grid.png" alt=""></div>
          <div class="service-table-row-mini">
            <div class="service-table-cell title">配置大小</div>
            <div class="row-mini-lie">
              <div class="service-table-cell">
                <div>2核0.5G</div>
                <div>2核1G</div>
              </div>
              <div class="service-table-cell">
                <div>2核2G</div>
                <div>2核4G</div>
              </div>
            </div>
            <div class="service-table-cell"><a :href="contactLinks.CustomerService" target="_blank">更多咨询客服
              <svg t="1740226957523" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="4090" width="200" height="200">
                <path
                  d="M744.848 536L472.96 807.248a42.56 42.56 0 0 0 0 60.272 42.8 42.8 0 0 0 60.416 0l302.128-301.376a42.56 42.56 0 0 0 0-60.288L533.36 204.48a42.8 42.8 0 0 0-60.416 0 42.56 42.56 0 0 0 0 60.272L744.848 536z m-300.416 0L172.512 807.248a42.56 42.56 0 0 0 0 60.272 42.8 42.8 0 0 0 60.432 0L535.04 566.144a42.56 42.56 0 0 0 0-60.288L232.96 204.48a42.8 42.8 0 0 0-60.432 0 42.56 42.56 0 0 0 0 60.272L444.432 536z"
                  fill="#7e7d7d" p-id="4091"></path>
              </svg>
            </a></div>
          </div>


        </div>
      </div>
    </div>
    <FooterMenu></FooterMenu>
  </div>
</template>

<script>
import NavMenu from "../components/NavMenu.vue";
import contactUs from "./contactUs.vue";
import FooterMenu from "../components/FooterMenu.vue";
import '../assets/CSS/styles.css';
import { contactLinks } from '../static/js/contact_link.js';
export default {
  components: {NavMenu, contactUs, FooterMenu},
  setup() {
    return {contactLinks}
  }
}
</script>

<style scoped>
/*home_heroSection*/
.home_heroSection {
  width: 100%;
  height: 560px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ff6702;
}

.homeView_leftBox {
  background: var(--footer-link-color);
  width: 50%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logoContainer img {
  width: 160px;
  height: auto;
}

.homeView_leftBox_padding_top {
}

.textContainer {
  text-align: center;
  color: white;
}

.textContainer_title {
  font-size: var(--font-size-subtitle2);
  font-weight: bold;
}

.textContainer_title2 {
  font-size: var(--font-size-title2);
  margin-bottom: 10px;
}

.font-size-subtitle3 {
  font-size: var(--font-size-subtitle3);
}

.font-size-paragraph2 {
  margin: 5px 0;
  font-size: var(--font-size-subtitle3);

}

.right_to {
  width: 50px;
  height: 50px;
  margin: 0 auto 8% auto;
}

.right_to img {
  width: 100%;
  height: 100%;
}

.homeView_rightBox {
  width: 50%;
  height: 100%;
  background: url("../assets/back/jianzhu.jpg") no-repeat center center;
  background-size: cover;
}

/*personalized-service*/

.personalized-service {
  display: flex;
  padding: 5rem 0;
  background-color: #fff;
  margin-bottom: 20px;
  width: 100%;
}

.personalized-service-left {
  width: 40%;
  display: flex;
  justify-content: right;
}

.personalized-service-left img {
  width: 70%; /* 图标的宽度 */
  height: auto;
}

.personalized-service-right {
  width: 50%;
  padding-left: 5rem;
  position: relative;
}

.personalized-service-right-h2 {
  font-size: var(--font-size-title3);
  color: #ff6702;
  margin-bottom: 10px;
  font-weight: bold;
}

.personalized-service-right h3 {
  font-size: 1.2rem;
  color: #ff6702;
  margin-bottom: 15px;
}

.personalized-service-right p {
  font-size: var(--font-size-paragraph2);
  line-height: 1.6;
  color: #333;
}

.bottom-content {
  position: absolute;
  bottom: 0;
}

/*service-section*/
.service-section {
  width: 100%;
  background-color: #ff6702;
}

.service-section-mini {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* 卡片之间的间距 */
  justify-content: space-between; /* 将卡片均匀分布 */
  padding: 5rem 2rem;
  margin: 0 auto;
}

.service-card {
  background-color: #fff;
  color: #000;
  padding: 20px;
  width: 30%; /* 每个卡片占三分之一宽度 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: flex-start;
  text-align: left;
}

.service2-card {
  width: 30%; /* 宽度占满整行 */
  border-left: 4px solid white;
  color: white;
  padding-left: 25px;
}

.service-icon {
  width: clamp(0.2rem, 5vw, 10rem);
  height: clamp(0.2rem, 5vw, 10rem);
  margin-bottom: 15px;
}

.service-card h3 {
  font-size: clamp(0.2rem, 1.5vw, 2rem);
  margin-bottom: 10px;
  color: #ff6702;
}

.service2-card h3 {
  font-size: clamp(0.2rem, 1.5vw, 2rem);
  position: relative;
}

.service2-card div {
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: clamp(0.2rem, 1.5vw, 1rem);
}

.service-card h3 span {
  font-size: clamp(0.2rem, 1.4vw, 1.3rem);
}

.service-card p {
  font-size: clamp(0.2rem, 1.5vw, 1rem);
  line-height: 1.5;
  margin-bottom: 0;
}

.team-member-photo-right-icon {
  display: none;
}

/* Container for the service process */
.service-process {
  background-color: #ff6702;
  padding: 30px;
  color: white;
}

.service-process-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.service-process-main-title {
  //display: block;
  font-size: clamp(1.3rem, 2vw, 2rem);
  margin-bottom: 5px;
}

.service-process-sub-title {
  font-size: clamp(1rem, 1.5vw, 1.5rem);
}

/* Icons section */
.service-process-icons {
  display: flex;
  justify-content: center;
  gap: 5rem;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
}

.service-process-icons-box {
  color: #000;
  padding: 20px;
  width: 15%;
  text-align: center;

}

.service-process-icons-box3 {
  color: #000;
  padding: 20px 0;
  width: 31%;
  text-align: center;
  display: none;
}

.service-process-icon {
  background-color: white;
  border-radius: 100%;
  width: clamp(3.2rem, 6vw, 6rem);
  height: clamp(3.2rem, 6vw, 6rem);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 15px auto;
}

.icon-image {
  width: 90%;
  height: 90%;
}

.service-process-icon-title {
  font-size: clamp(1.2rem, 1.5vw, 1.5rem);
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
}

.service-process-icon-p {
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  line-height: 1.5;
  color: white;
}

/*team-member-car*/
.team-member-card {
  display: flex;
  background-color: #ff6702;

  align-items: flex-end;
  width: 80%;
  height: 600px;
  margin: 0 auto;
}

/* Header Styling */
.team-card-header {
  background-color: #fff;
  color: #ff6702;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  justify-content: center;
}

.org_bar {
  width: 70%;
  border-bottom: 1px solid #ff6702;
}

/* Body Styling */
.team-card-body {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.team-photo {
  background: #ff6702;
}

.team-photo img {
  width: 400px;
  height: 400px;
}

.team-info h2 {
  font-size: 24px;
  margin: 0;
  color: #333;
}

.team-info .role {
  font-size: 16px;
  color: #ff6702;
  margin: 5px 0;
}

.team-info .description {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
  margin-top: 10px;
}

/* Footer Styling */
.team-card-footer {
  background-color: white;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.team-card-footer p {
  color: #ff6702;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  font-weight: 400;
}

.team-card-footer-name {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  font-size: clamp(0.2rem, 1.5vw, 3rem);
  position: relative;
}

.team-card-footer-name span {
  font-size: 15px;
  color: #ff6702;
  position: absolute;
  bottom: 0;
  right: 0;
}

.team-card-footer p img {
  width: 73px;
  height: 24px;
}

.team-member-photo {
  background: #ffffff;
  padding: 20px;
}

.team-member-info {
  width: 50%;
  padding: 0 1%;
  margin-left: 4%;
  border-left: 4px solid #fff;
}

.team-member-info h2 {
  font-size: clamp(1.2rem, 2.5vw, 3rem);
  color: #fff;
  margin: 0 0 5% 0;
  font-weight: bold;
}

.team-member-info .role {
  font-size: 1.2rem;
  color: #fff;
  margin-top: 5px;
}

.team-member-info .description {
  font-size: clamp(0.8rem, 1.5vw, 1.5rem);
  color: #fff;
  margin-top: 10px;
}

.service-table {
  //width: 100%;
  //border-collapse: collapse;
  //margin-top: 30px;
  padding: 5% 0;
}

.service-table-row {
  display: flex;
  padding: 10px 5%;
  border-bottom: 8px solid #ff6702;
  align-items: center;
  justify-content: space-between;
}

.service-table-row:hover {
  background-color: rgba(255, 103, 2, 0.2);
}

.service-table-icon {
  width: 30%;
}

.service-table-icon img {
  width: 150px;
  height: 150px;
}

.service-table-cell {
  text-align: left;
  padding: 10px;
  color: #ff6702;
  width: 30%;
  font-size: clamp(0.2rem, 1vw, 1.2rem);
}

.service-table-cell div {
  margin-top: 10px;
}

.service-table-cell.title {
  font-weight: bold;
  color: #ff6702;
  font-size: clamp(0.2rem, 1.5vw, 3rem);

}

.service-table-cell a {
  color: #7e7d7d;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: clamp(0.2rem, 1vw, 1.2rem);
}

.service-table-cell a svg {
  width: 25px;
  height: 25px;
}

.service-table-cell a:hover {
  text-decoration: underline;
}

.service-menu-wrapper {
  display: none;
}

.service-table-row-mini {
  width: 70%;
  display: flex;
  align-items: center;
}

.row-mini-lie {
  width: 80%;
  display: flex;
  align-items: center;
}

@media (max-width: 800px) {
  .home_heroSection {
    display: flex;
    flex-direction: column;
  }

  .homeView_leftBox {
    width: 100%;
    padding: 20px 0 0 0;
  }

  .homeView_rightBox {
    width: 100%;
    height: 100%;
  }

  .logoContainer img {
    width: 120px;
    height: auto;
  }

  .right_to {
    width: 40px;
    height: 40px;
    margin: 0 auto 0 auto;
  }

  .personalized-service {
    margin-bottom: 0;
    padding: 40px 0;
  }

  .personalized-service-left {
    width: 40%;
    display: none;
  }

  .personalized-service-right {
    width: 90%;
    padding-left: 5%;
    position: static;
    margin: 0 auto;
    border-left: 4px solid #ff6702;
  }

  .bottom-content {
    position: static;
  }
  .bottom-content p{
    position: static;
    font-size: 1rem !important;
  }
  .personalized-service-right-h2 {
    color: #ff6702;
    margin-bottom: 1%;
    font-weight: bold;
  }

  .personalized-service-right p {
    color: #333;
    line-height: 1.2;
    margin-bottom: 0;
  }

  .personalized-service-right h3 {
    margin-bottom: 1%;
  }

  .service-section {
    background-color: #ffffff;
  }

  .service-section-mini {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    justify-content: space-between;
    padding: 0;
    margin: 0 auto 30px auto;
  }

  .service-card {
    display: none;
  }

  .service2-card {
    width: 90%;
    border-left: 4px solid #ff6702;
    color: #000000;
    padding-left: 25px;
  }

  .service2-card h3 {
    font-size: var(--font-size-title3);
    position: static;
    color: #ff6702;
    font-weight: bold;
  }

  .service2-card h3 span {
    display: block;
    font-size: 1.2rem;
    font-weight: 400;
  }

  .service2-card div {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: var(--font-size-paragraph2);
  }

  .service2-card div p {
    margin-bottom: 0;
    font-size: 1rem !important;
  }

  .service-process {
    background-color: #ff6702;
    padding: 10px 0;
    color: white;
  }

  .service-process-title {
    text-align: left;
    width: 90%;
    margin: 0 auto;
    font-weight: 400;
  }

  .service-process-icons {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    width: 90%;
  }

  .service-process-icons-box {
    color: #000;
    padding: 20px 0;
    width: 31%;
    text-align: center;
  }

  .service-process-icons-box2 {
    color: #000;
    padding: 20px 0;
    width: 31%;
    text-align: center;
    display: none;
  }

  .service-process-icons-box3 {
    color: #000;
    padding: 20px 0;
    width: 31%;
    text-align: center;
    display: inline-block;
  }

  .service-process-icon {
    margin-top: 8%;
  }

  .service-menu-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 10px;
  }

  .service-card-item {
    display: flex;
    align-items: center;
  }

  .service-card-icon-container {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 10px;

  }

  .service-card-icon-container img {
    width: 40px;
    height: 40px;
  }

  .service-card-text {
    text-align: center;
    font-weight: bold;
  }

  .service-card-text-chinese {
    display: block;
    font-size: 16px;
    color: #ff6702;
  }

  .service-card-text-english {
    display: block;
    font-size: 12px;
    color: #ff6702;
  }

  .tem-borderleft {
    border-left: 2px solid #ff6702;
  }

  .team-member-card {
    display: flex;
    background-color: #ff6702;
    align-items: flex-end;
    flex-direction: column;
    width: 90%;
    height: 600px;
    margin: 0 auto;
  }

  .team-card-header {
    display: none;
  }

  .team-member-photo {
    background: #ff6702;
    padding: 3% 0;
    width: 90%;
    margin: 0 auto;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
  }

  .team-card-footer {
    display: none;
  }

  .team-photo img {
    width: 200px;
    height: 200px;
  }

  .team-member-card {
    height: auto;
    position: relative;
  }

  .team-member-info {
    width: 90%;
    padding: 0;
    margin: 0 auto;
    border-left: none;
  }

  .team-member-info h2 {
    font-size: max(1.5rem, min(2.5vw, 3rem));
    color: #fff;
    margin: 0;
    font-weight: bold;
    text-align: right;
  }

  .team-member-info .description {
    color: rgba(255, 255, 255, 0.77);
  }

  .team-member-photo-right-icon {
    display: inline-block;
  }

  .team-member-photo-right-icon img {
    width: 66px;
    height: 20px;
    position: absolute;
    right: 1rem;
    top: 0;
  }

  .service-table-icon img {
    width: 100px;
    height: 100px;
  }
  .service-table-row-mini{
    width: 100%;
    display: flex;
    align-items:stretch;
    flex-direction: column;
  }
  .service-table-cell.title{
    font-size: max(1.2rem, min(1.5vw, 3rem));
    width: 100%;
    text-align: center;
    padding: 0;
  }
  .service-table-cell {
    color: #ff6702;
    width: 100%;
    font-size: max(0.9rem, min(1vw, 1.2rem));
    text-align: center;
    padding: 3px;
  }
  .row-mini-lie {
    width: 100%;
    display: flex
  ;
    align-items: center;
  }
  .service-table-cell a{
    color: #7e7d7d;
    text-decoration: none;
    display: flex
  ;
    justify-content: center;
    align-items: center;
    font-size: max(0.9rem, min(1vw, 1.2rem));
    margin: 0 auto;
  }
  .service-table-cell a svg {
    width: 20px;
    height: 20px;
    margin-bottom: 1px;
  }
  .service-table-cell div{
    margin: 0;
  }
}
</style>
