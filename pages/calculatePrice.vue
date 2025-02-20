<!--价格计算page-->
<template>
  <div>
    <NavMenu></NavMenu>
    <div class="pricbackground">
      <div class="pricbackground-top">
        <div class="pricimgs-leftBox">
        </div>
        <div class="pricimgs-rightBox">
          <div class="pricimgs-rightBox_padding_top">
            <div class="pricimgs-rightBox-wh"><img src="../assets/icon/img_1.png"></div>
            <div class="pricimgs-rightBox-subtitle">

              <div>如何选择合适的配置</div>
              <div>How to choose the right configuration</div>
            </div>
          </div>
          <div class="pricimgs-rightBox-CloudMassage">
            <div>我们不仅是AWS服务代理商，作为伙伴，我们还希望能帮助您理解云服务，助力您的业务</div>
            <div>We are not only an AWS service reseller, but as a partner, we also want to helpyou understand cloud
              services and help your business
            </div>
          </div>

        </div>
      </div>
      <div class="pricbackground-between">
        <div class="pricbackground-between-jgpz"><span
            class="pricbackground-between-jg">Buddy's Cloud价格: 官网价格x<span
            class="pricbackground-between-jg-bl">96</span>%</span> <span class="pricbackground-between-pz"><a :href="contactLinks.PriceCalculator"
                                                                                                              target="_blank">点击前往AWS官网查看配置 <svg
            t="1740226957523" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="4090" width="200" height="200"><path
            d="M744.848 536L472.96 807.248a42.56 42.56 0 0 0 0 60.272 42.8 42.8 0 0 0 60.416 0l302.128-301.376a42.56 42.56 0 0 0 0-60.288L533.36 204.48a42.8 42.8 0 0 0-60.416 0 42.56 42.56 0 0 0 0 60.272L744.848 536z m-300.416 0L172.512 807.248a42.56 42.56 0 0 0 0 60.272 42.8 42.8 0 0 0 60.432 0L535.04 566.144a42.56 42.56 0 0 0 0-60.288L232.96 204.48a42.8 42.8 0 0 0-60.432 0 42.56 42.56 0 0 0 0 60.272L444.432 536z"
            fill="#fff" p-id="4091"></path></svg></a></span>
        </div>
        <div class="pricbackground-between-kf"><img src="../assets/icon/Message.png" alt="zx"><a :href="contactLinks.PriceC_CustomerService"
                                                                                                 target="_blank">价格详情咨询客服</a>
        </div>
      </div>

    </div>
    <FooterMenu></FooterMenu>
  </div>
</template>

<script>
import '../assets/CSS/styles.css';
import NavMenu from "../components/NavMenu.vue";
import FooterMenu from "../components/FooterMenu.vue";
import { contactLinks } from '../static/js/contact_link.js';


export default {
  components: {NavMenu, FooterMenu},
  setup() {
    return {
      contactLinks
    }
  }
}
</script>

<style>
.pricbackground {
  width: 100%;
  height: 80%;
  background-color: #ff6702;
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  z-index: 1;
  border-bottom: 1px solid #ffffff;
  padding-top: 5rem;
}

.pricbackground-top {
  width: 80%;
  height: 55%;
  color: white;
  margin: 0 auto;
  display: flex;
  justify-content: left;
  flex-wrap: nowrap;
  align-items: center;
}

.pricimgs-leftBox {
  transition: width 0.5s ease; /* 平滑过渡 */
  width: 40%;
  height: 500px;
  padding-right: 5%;
  background: url("../assets/helloIMG/priceleft.jpg") no-repeat;
  background-size: 90% 100%;
}


.pricimgs-rightBox {
  transition: width 0.5s ease; /* 平滑过渡 */
  width: 50%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  /* background-color: rgb(1, 7, 13); */
}

.pricimgs-rightBox-wh {
  width: 100px;
  height: 150px;
}

.pricimgs-rightBox-wh img {
  width: 100%;
  height: 100%;
}

.pricimgs-rightBox-subtitle {
  font-size: clamp(1.2rem, 2vw, 2rem); /* 使用 clamp() 调整字体大小 */
  font-weight: bold;
  width: 100%;
  margin-block: 10px;
}

.pricimgs-rightBox-CloudMassage {
  font-size: clamp(0.9rem, 1.5vw, 1.5rem); /* 动态调整段落字体 */
  font-weight: 400;
  width: 100%;
}

.pricbackground-between {
  width: 80%;
  height: 20%;
}

.pricbackground-between-jgpz {
  border-block-end-style: solid;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 2%;
}

.pricbackground-between-jg {
  font-size: clamp(1rem, 2vw, 2rem);
}

.pricbackground-between-jg-bl {
  font-size: clamp(2rem, 3vw, 3rem);
}

.pricbackground-between-pz svg {
  width: 25px;
  height: 25px;
  margin-bottom: 6px;
}

.pricbackground-between-pz {
  font-size: max(0.7rem, min(1vw, 1.2rem));
}

.pricbackground-between-pz a {
  font-size: max(0.7rem, min(1vw, 1.2rem));
  color: white;
}

.pricbackground-between-kf {
  font-size: var(--font-size-paragraph);
  text-align: center;
  margin: 20px;
}

.pricbackground-between-kf a {
  font-size: var(--font-size-paragraph);
  text-align: center;
  margin: 20px;
  color: white;
}

.pricbackground-between-kf img {
  width: 5%;
}

@media (max-width: 800px) {
  .pricbackground-top {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }

  .pricbackground {
    padding-top: 1rem;
    border: none;
  }

  .pricimgs-leftBox {
    width: 100%;
    height: clamp(200px, 5vh, 400px);
    padding: 0;
    background: url("../assets/helloIMG/priceleft2.jpg") no-repeat;
    background-size: 100% 100%;
  }

  .pricimgs-rightBox {
    width: 100%;
    border-bottom: 3px solid #ffffff;
    border-right: 3px solid #ffffff;
    border-left: 3px solid #ffffff;
    padding: 1rem;
  }

  .pricimgs-rightBox_padding_top {
    display: flex;
    justify-content: left;
    align-items: flex-end;
  }
  .pricimgs-rightBox-wh{
    width: 90px;
    height: 100px;
  }
  .pricimgs-rightBox-subtitle{
    text-align: right;
  }
  .pricimgs-rightBox-CloudMassage{
    text-align: center;
    margin-top: 5%;
    color: rgba(255, 255, 255, 0.84);
  }
  .pricbackground-between-jgpz {
    border-bottom-style: solid;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 2%;
    padding-bottom: 2%;
  }
  .pricbackground-between-pz a{
    color: rgba(255, 255, 255, 0.8);
  }
  .pricbackground-between-pz a svg{
    width: 18px;
    height: 18px;
    margin-bottom: 2px;
  }
  .pricbackground-between-pz a:hover{
    text-decoration: none;
  }
  .pricbackground-between-kf{
    margin: 6px;
  }
  .pricbackground-between-kf img {
    width: 13%;
  }
  .pricbackground-between-kf a {
    margin: 5px;
  }
}
</style>
