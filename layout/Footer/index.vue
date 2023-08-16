<template>
    <div class="footer">
        <div class="top-footer">
            <div class="container">
                <div class="row ">
                    <div class="col">
                        <h6 class="ab">ABOUT US</h6>
                        <div>
                            <p style="margin-top: 20px; font-size: 13px;">
                                A block theme is a WordPress theme with templates entirely composed of blocks. Therefore, in
                                addition to the content of different post types (pages, posts, etc.), the block editor can
                                also
                                be used to edit all areas of the website.
                            </p>

                        </div>

                        <ul class="icon">
                            <li>
                                <TwitterIcon />
                            </li>
                            <li>
                                <FacebookIcon />
                            </li>
                            <li>
                                <YoutubeIcon />
                            </li>
                            <li>
                                <LinkedinIcon />
                            </li>
                            <li>
                                <DribbbleIcon />
                            </li>
                            <li>
                                <InstagramIcon />
                            </li>

                        </ul>
                    </div>
                    <div class="col">
                        <h6 class="ab">CATEGORY NAME</h6>
                        <categorynamefirst />
                    </div>
                    <div class="col">
                        <h6 class="ab">CATEGORY NAME</h6>
                        <categorynamesecond />
                    </div>
                    <div class="col">
                        <h6 class="ab">SUPPORT</h6>
                        <div>
                            <ul style="margin-top: 20px;" class="list-path">

                                <li style=" margin-bottom: 15px;">
                                    <NuxtLink class="path" to="#">
                                        <h6>Corporate Membership</h6>
                                    </NuxtLink>
                                </li>
                                <li style=" margin-bottom: 15px;">
                                    <NuxtLink class="path" to="#">
                                        <h6>Publish Your Book</h6>
                                    </NuxtLink>
                                </li>
                                <li style=" margin-bottom: 15px;">
                                    <NuxtLink class="path" to="#">
                                        <h6>Submit An Article</h6>
                                    </NuxtLink>
                                </li>
                                <li style=" margin-bottom: 15px;">
                                    <NuxtLink class="path" to="#">
                                        <h6>Advertise</h6>
                                    </NuxtLink>
                                </li>
                                <li style=" margin-bottom: 15px;">
                                    <NuxtLink class="path" to="#">
                                        <h6>Community Forum</h6>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink class="path" to="#">
                                        <h6>Privacy Policy</h6>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="about">
        <div class="">
           <div>
                <ul style="list-style: none;display: flex;justify-content: center; ">
                    <li style="margin-right: 20px; font-size: 11px;">ABOUT</li>
                    <li style="margin-right: 20px; font-size: 11px;">CONTACT</li>
                    <li style="margin-right: 20px; font-size: 11px;">FULL WIDTH PAGE</li>
                    <li style="margin-right: 20px; font-size: 11px;">SUBMIT ARTICLE</li>
                    <li style="margin-right: 20px; font-size: 11px;">BUY THEME</li>
                </ul>
           </div>
        </div>
        <div class="">
           <ul style="list-style: none;display: flex;justify-content: center; margin-top: 20px;" >
            <li style="font-size: 11px;">WORDPRESS THEME BY WPENJOY</li>
        </ul>
        </div>
    </div>
    </div>
</template>

<script>
import categorynamefirst from './categorynamefirst.vue';
import categorynamesecond from './categorynamesecond.vue';
import DribbbleIcon from "../../components/svgs/DribbbleIcon.vue";
import FacebookIcon from "../../components/svgs/FacebookIcon.vue";
import InstagramIcon from "../../components/svgs/InstagramIcon.vue";
import LinkedinIcon from "../../components/svgs/LinkedinIcon.vue";
import TwitterIcon from "../../components/svgs/TwitterIcon.vue";
import YoutubeIcon from "../../components/svgs/YoutubeIcon.vue";


export default {
    components: {
        categorynamefirst,
        categorynamesecond,
        DribbbleIcon,
        FacebookIcon,
        InstagramIcon,
        LinkedinIcon,
        TwitterIcon,
        YoutubeIcon

    }
}
</script>

<style scoped>
@media (min-width: 1200px) {
.ab{ 
    font-weight: bolder;
}
.row{
    width:1240px;
}
.col {
    width: 286px;
    margin-right: 25px;
}

.footer {
    background-color: black;
    color: #ffffff;
    padding-bottom: 25px;
}

.list-path {
    list-style: none;
    padding-left: 0px;

}

.path {
    color: #ffffff;
}

.path:hover {
    text-decoration: none;
}

.about {
    color: #ffffff;
   
}
.icon{
    margin-top: 30px;

}

.top-footer {
    padding-top: 50px;
    margin-bottom: 45px;
   
}
}
@media (max-width:760px) {

.icon{
    margin: 30px 0px;
}
    
.footer {
    background-color: black;
    color: #ffffff;
    padding-bottom: 25px;
    margin-top: 20px;
}

.list-path {
    list-style: none;
    padding-left: 0px;

}

.path {
    color: #ffffff;
}

.path:hover {
    text-decoration: none;
}

.about {
    color: #ffffff;
   
}
.icon{
    margin-top: 30px;

}

.top-footer {
    padding-top: 50px;
    margin-bottom: 45px;
   
}
}


</style>
