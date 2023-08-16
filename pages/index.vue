
<template>
  <div class="layout">
    <Header />
                  <div class="primary-content">
          
                        <div class="content-wrapper">
            
                            <div class="content">
                                      <Content />
                                              <Business />
                                              <Technology />
                                              <Lifestyle />
                                              <Socialmedia />
                           </div>

                                <div class="follow">
                                  <Follow />
                                </div>

                        </div>
                            </div>
                            <div class="service">
             
                              <Service  />
                              <Travel />
                            <Fooddrink />
                     </div>
         
        <Footer style="margin-top: 50px;" />
  </div>
</template>


<script>
import Header from '../layout/Header';
import Content from '../components/content/Content.vue';
import Follow from '../components/follow/index.vue';
import Business from '../components/business/index.vue';
import Technology from '../components/technology/index.vue';
import Lifestyle from '../components/lifestyle/index.vue';
import Socialmedia from '../components/socialmedia/index.vue';
import Service from '../components/service/index.vue';
import Travel from '../components/travel/index.vue'
import Fooddrink from '../components/fooddrink/index.vue'
import Footer from "../layout/Footer"

export default {
  components:{
    Header,
    Content,
    Follow,
    Business,
    Technology,
    Lifestyle,
    Socialmedia,
    Service,
    Travel,
    Fooddrink,
    Footer

  }
}
</script>

<style scoped>


@media (min-width: 1200px){
  .primary-content {
  display: flex;
}

.left-page {
  flex: 1;
  /* Nội dung cho phần left-page */
}

.content-wrapper {
  margin: 0px 139.60px;
  display: flex;

}

.content {
  flex: 7.5;
  /* Nội dung cho phần content */
}

.follow {
  flex: 2.5;
  /* Nội dung cho phần follow */
}

.service {
 flex-direction: column;
}
}
@media (max-width: 760px){
  .layout{
    flex-direction: column;
    width: 100%;
    
  }
  .service ,.primary-content{
    margin: 0px 5px;
  }

}

</style>