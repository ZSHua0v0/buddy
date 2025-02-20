<template>
  <div>
    <NavMenu></NavMenu>
    <div>
      <div class="about-section">

        <div class="about-content">
          <div class="about-content-desc">
            <h1 class="about-title">关于Buddy's Cloud</h1>
            <span class="desc-title">定位:可信任的伙伴</span>
            <p class="about-description-chinese">
              在云计算的广阔海洋中，所有寻求合适云服务的企业和个人都需要一个可靠的伙伴，作为灯塔提供引导支持，Buddy’s Cloud
              就像一个温暖的灯塔，我们不仅是云服务的代理商，更是寻求可用云服务的用户在数字世界中的忠实伙伴，我们一直在这里，不管您何时来访，都能找到我们的友谊，收获适合您的云服务。
            </p>
            <p class="about-description-english">
              In the vast ocean of cloud computing, all businesses and individuals looking for the right cloud services
              need a reliable partner to provide guidance as a beacon. Buddy's Cloud is like a warm beacon, we are not
              only a reseller of cloud services, but also a user of reliable cloud services. We are always here to
              continue our friendship and harvest whatever is right for you, no matter when you visit cloud services.
            </p>
          </div>
          <div class="about-content2">
            <div class="photo-left">
<!--              <img src="../assets/back/ri2.jpg" alt="">-->
            </div>
            <div class="desc2-right">
              <div class="about-text">
                <h2>初试与展望</h2>
                <p>Buddy's
                  Cloud的创立来自于一个简单而质朴的想法:在技术的复杂世界里，每个人都需要一个可信赖的伙伴，一个一同成长的依靠。我们的创始人，一位资深的技术爱好者和行业分析师，在使用aws云服务的过程中发现，许多用户在选择适合的云服务时感到困惑和不安--不知道何种服务应该使用，何种代理可以信任。因此，他决定创建一个网站，作为永远可以信任的伙伴，帮助用户简化选择过程，提供永远可靠的服务，量身定制云解决方案。</p>
              </div>


              <div class="about-text">
                <h2>品牌提升</h2>
                <p>Buddy's
                  Cloud的使命是成为用户在云服务海洋中的领航者和可信任的伙伴，我们致力于理解每位客户的独特需求，提供个性化的建议和支持，确保他们能够找到最适合自己的云服务，并随着客户一同成长。</p>
              </div>


              <div class="about-text">
                <h2>个人化服务</h2>
                <p>在Buddy's
                  Cloud，我们相信没有一种云解决方案能够适合所有人，这就是为什么我们提供个性化的咨询服务，帮助客户了解他们的需求，并从众多云服务中选择最合适的。我们的服务不仅限于技术层面，更包括帮助客户理解云服务，助力他们的业务成长。</p>
              </div>

            </div>
          </div>
          <div class="about-content2">
            <div class="desc2-right">
              <div class="about-text">
                <h2>持续的合作伙伴</h2>
                <p>Buddy's
                  Cloud的成功建立在与客户建立长期关系的基础上，我们视每一位客户为合作伙伴，与他们一起成长，共同面对技术挑战和市场变化。</p>
              </div>


              <div class="about-text">
                <h2>未来愿景</h2>
                <p>展望未来，Buddy's
                  Cloud将继续作为云服务领域的领导者，不断创新和改进我我们将持续扩大我们的合作伙伴网络，为客户提供更多选择和更厂们的服务。泛的服务。</p>
              </div>


              <div class="about-text">
                <h2>技术专长与人文关怀</h2>
                <p>我们深知，技术的力量和意义在于其能够改善人们的生活，目Buddy's
                  Cloud专注于将最新的云技术与对客户的深切关怀结合起来，我们的专家团队不仅拥有深厚的技术知识，更拥有倾听和理解客户需求的热情。</p>
              </div>

              <div class="about-text">
                <h2>结语</h2>
                <p>在Buddy's Cloud，我们不仅仅是你的云服务代理商，更是你数字旅程中的伙伴。<br>
                  让我们一起在云计算的天空中翱翔，发现新的可能性，实现你的业务目标。</p>
              </div>
            </div>
            <div class="photo-left2">
            </div>
          </div>
          <div class="end-about">
            <div>Buddy's Cloud - Your Partner in the cloud Journey.</div>
            <div>你云中旅程的伙伴</div>
          </div>
        </div>
      </div>
    </div>
    <FooterMenu></FooterMenu>
  </div>
</template>

<script>
import NavMenu from "../components/NavMenu.vue";
import FooterMenu from "../components/FooterMenu.vue";

export default {
  components: {NavMenu, FooterMenu}
}
</script>

<style scoped>
.about-section {
  font-family: Arial, sans-serif;
  width: 80%;
  margin: 0 auto;
  padding: 5rem 0;
}

.desc-title {
  color: #ff6702;
  font-weight: bold;
  font-size: clamp(1.1rem, 1.7vw, 5rem);
}

.about-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 5rem;
  color: #ff6702;
}

.about-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.6;
  text-align: justify;
}

.about-description-chinese,
.about-description-english {
  font-size: 1.1rem;
  margin: 1rem 0;
}

.about-description-chinese {
  font-size: clamp(0.7rem, 1.1vw, 3rem);
  color: rgba(0, 0, 0, 0.6);
}

.about-description-english {
  font-size: clamp(0.7rem, 1.1vw, 3rem);
  color: rgba(0, 0, 0, 0.6);
}

.about-content2 {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4rem;
  align-items: stretch;
  margin-top: 3rem;
}

.photo-left {
  width: 30%;
  height: auto;
  background: url("../assets/back/ri2.jpg") no-repeat;
  background-size: 100% 100%;
}
.photo-left2 {
  width: 30%;
  height: auto;
  background: url("../assets/back/chengshi.jpg") no-repeat;
  background-size: 100% 100%;
}
.photo-left img {
  width: 100%;
  height: 100%;
}

.desc2-right {
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.about-text {
  margin-top: 1rem;
}

.about-text h2 {
  font-size: clamp(1.1rem, 1.7vw, 5rem);
  color: #ff6702;
  font-weight: bold;
}

.about-text p {
  font-size: clamp(0.7rem, 1.1vw, 3rem);
  color: rgba(0, 0, 0, 0.6);
}

.end-about {
  margin-top: 5rem;
  width: 100%;
  border-top: 2px solid #ff6702;
  font-size: clamp(1.1rem, 1.7vw, 5rem);
  font-weight: bold;
  color: #ff6702;
  text-align: center;
}

@media (max-width: 800px) {
  .about-section{
    width: 100%;
    padding: 0;
  }
  .about-content2 {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: stretch;
    margin-top: 1rem;

  }

  .about-title {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: white;
  }
  .about-content-desc{
    background: #ff6702;
    color: white;
    padding: 1rem;
  }
  .desc-title{
    color:white;
  }
  .about-description-chinese{
    color: white;
  }
  .about-description-english{
    color: white;
  }
  .about-text{
    margin-top: 0;
  }
  .about-text p{
    margin-bottom: 0;
  }
  .about-content2{
    padding:0 1rem;
  }
  .photo-left {
    width: 50%;
    height: auto;
    background: url("../assets/back/ri2.jpg") no-repeat;
    background-size: 200% 110%;
    background-position: right center;
  }
  .photo-left2 {
    width: 40%;
    height: auto;
    background: url("../assets/back/chengshi.jpg") no-repeat;
    background-size: 200% 100%;
  }
  .end-about {
    margin-top: 1rem;
    width: 100%;
    border-top: 2px solid #ff6702;
    font-weight: bold;
    color: #ff6702;
    text-align: center;
  }
  .about-text h2{
    margin: 0.5rem 0 0.2rem 0;
  }
}
</style>
