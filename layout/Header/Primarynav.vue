<template>
    <div class="primary-nav" >
    <div class="primary-menu ">
        <nav class="navbar"  >
           
               <div :class="{ ' tab-main-p': showPrimarynav,'tab-main':!showPrimarynav } ">
                <div @click="close" class="x" :style="{ display: showPrimarynav ? 'block' : 'none' }" style="margin-bottom: 10px;">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                          </svg>
                </div>
                                        

                <a class="nav-item" href="/">HOME</a> 
                <a class="nav-item" href="/">ADVERTISING</a> 
                
                <div class="nav-menu">
                <a class=" nav-item menu-item " href="/">BLOGGING</a>
                <ul class="dropdown-brand">
                    <li><a class="dropdown-item" href="#">SUB MENU 1</a></li>
                     <li><a class="dropdown-item" href="#">SUB MENU 2</a></li>
                    <li><a class="dropdown-item" href="#">SUB MENU 3</a></li>
                </ul>
               
                </div>
                <a class=" nav-item menu-item " href="/">BUSSINESS</a>
                <a class=" nav-item menu-item " href="/">FASHION</a>
                <a class=" nav-item menu-item " href="/">FOOD</a>
                <a class=" nav-item menu-item " href="/">LIFESTYLE</a>
                <a class=" nav-item menu-item " href="/">MARKETING</a>
                <a class=" nav-item menu-item " href="/">SEO</a>
                <a class=" nav-item menu-item " href="/">SOCIAL MEDIA</a>
                <a class=" nav-item menu-item " href="/">TECH</a>
                <a class=" nav-item menu-item " href="/">TRAVEL</a>
                <a class=" nav-item menu-item " href="/">WEB DESIGN</a>
                

               </div>
               <div class="menu">
                <div @click="showprimarynav" class=" menu-icon"  :style="{ display: !showPrimarynav ? 'block' : 'none' }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                </div>

               </div>
                

                <div class="search" id="search-icon" :style="{ display: showSearchicon & !showPrimarynav ? 'block' : 'none' }"  style="margin-left: 30px;">
                        <svg @click="Search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>

                </div>
                <div  class="search" id="search-icon" style="margin-left: 30px;font-weight: bold;" :style="{ display:closeSearchicon ? 'block' : 'none' }">
                          <svg @click="closeSearch" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                           </svg>
                </div>

                <div class="search-form"  id="search-form" :style="{ display: showSearchForm ? 'block' : 'none' }">
                  <form action="" method="">
                      <input style="background-color:#f1f1f1;width: 188px;height: 36px;" type="text" name="query" placeholder="Search for">
                      <button style="background-color: rgb(16, 164, 218); width: 82px;height:  36px;" type="submit">Search</button>
                  </form>
                </div>

          </nav>
      </div>

   

  </div>
</template>
<script>
export default {
  data() {
    return {
      showSearchicon:true,
      closeSearchicon:false,
      showSearchForm: false,

      showPrimarynav:false,
    }
  },
  methods: {

    showprimarynav(){
      this.showPrimarynav=true
    },
    Search() {
      this.showSearchForm =true;
      this.closeSearchicon=true;
      this.showSearchicon=false;
     

    },
    closeSearch(){
      this.showSearchForm=false
      this.closeSearchicon=false;
      this.showSearchicon=true;
    },
    close(){
      this.showPrimarynav=false
    }
  }
}
</script>


<style scoped>
@media (max-width: 760px) {

.menu{
  display: block;
}
.primary-menu{
align-items: center;
}
.tab-main{
  display: none;
}
.tab-main-p{
  background-color: #ffffff;
    position: relative;
    z-index: 100000;
    width: 700px;
    height: 500px;
    display: flex;
    flex-direction: column;
}

.navbar{
  margin-right: 5px;
  margin-top: 5px;
  padding: 0px 0px ;
}
.search {
    position: relative;
}

.search-form {
    display: none;
    position: absolute;
    width: 305px;
    height: 70px;
    top: 100%;
    right: 0;
    margin-top: 12px; /* Khoảng cách giữa biểu tượng và form */
    padding: 10px; /* Khoảng cách bên trong form */
    background-color: #ffffff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

}

@media (min-width: 1200px) {
.primary-menu{
margin-bottom: 15px;
}

.menu{
  display: none;
}
.menu-icon{
  display: none;
}
.search {
    position: relative;
}

.search-form {
    display: none;
    position: absolute;
    width: 305px;
    height: 70px;
    top: 100%;
    right: 0;
    margin-top: 12px; /* Khoảng cách giữa biểu tượng và form */
    padding: 10px; /* Khoảng cách bên trong form */
    background-color: #ffffff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}



.navbar {
    margin: 0px 139.60px;
    padding: 0px;

}
.tab-main {

    display: flex;
    justify-content: space-between;
    align-items: center;

}

.left-nav{
    padding:10px ;}

.nav-item{
  margin-right: 20px;
  font-weight: bolder;
  color: #f9f9f9;

  height: 20.8px;

}
.nav-item:hover{
  color: #990099;
  text-decoration: none;
}



.dropdown-brand{

  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  font-size: 14px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  list-style: none;
}

.nav-menu:hover .dropdown-brand{
  display: block;
 
}

.dropdown-brand>li>a:hover{
  
  text-decoration: none;
  color: #990099;
}
}


</style>
