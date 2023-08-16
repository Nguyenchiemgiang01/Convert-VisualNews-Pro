<template>
    <div class="site-start">
    
        <div class="container">
            <div class="row">
                <div class="col autho au-left" style="float: left; margin-right: 50px;">
                    <div class="" style="flex-basis: 30%;">
                        <div class="">
                            <div class="">
                                <figure class="author-image">
                                    <img 
                                        src="https://demo.wpenjoy.com/visualnews-pro/wp-content/themes/visualnews-pro/assets/images/avatar-1.png"
                                        alt=""  width="80" height="80">
                                </figure>
                                <div class="author-content">
                                    <h2 class="" style="font-style:normal;font-weight:600">John Doe</h2>
                                    <p class="" style="font-size:12px">If you want to make your dreams come true, the first
                                        thing you have to do is wake up.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col autho au-center">
                    <div class="" >
                        <div class="">
                            <h2  style="text-decoration: none;font-style:normal;font-weight:bold;text-transform:uppercase;"
                                class="vis-pro"><a style="color:#0d0606 ;" href="#"
                                    rel="home">VisualNews Pro</a></h2>
                        </div>
                        <p class="wp"
                            style="color:#c91a1a ;font-size: 19px;margin-top:10px;margin-right:0px;margin-bottom:0px;margin-left:5px;text-transform:uppercase">
                            WP Newspaper Theme</p>
                    </div>
                </div>
                <div class="col autho au-right" style="float: right;margin-left: 50px;">
                    <div class="" >
                        <div class="">
                            <div class="">
                                <figure class="author-image">
                                    <img decoding="async"
                                        src="https://demo.wpenjoy.com/visualnews-pro/wp-content/themes/visualnews-pro/assets/images/avatar-2.png"
                                        alt=""  width="80" height="80">
                                </figure>
                                <div class="author-content">
                                    <h2 class="" style="font-style:normal;font-weight:600">Mary Taylor</h2>
                                    <p class="" style="font-size:12px">You can have anything you want if you are willing to
                                        give up everything you have.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</template>
<style scoped>

@media (max-width: 760px) {
    .au-center{
        margin-top: 10px;
    }
    .au-left{
        display: none;
    }
    .au-right{
        display: none;
    }
    .wp{
        display: none;
    }

    .site-start{
        height: 40px;
        border-bottom: 2px solid #fbfbfb;
        margin-top: 0px;

    }

    .row{
        align-items: center;
        margin-bottom: 15px;
    }
}
@media (min-width: 1200px) {

    .container{
        margin: 0px 139.6px;
        padding: 0px 0px;
    }
    .row{
        margin-left: 30px
    }

    .site-start{
        padding-top: 30px;
    }
    .au-center{
        margin-left: 90px;
    }
    .vis-pro{
        font-size:25px ;
    }
    .wp{
        
    }
    
}
</style>