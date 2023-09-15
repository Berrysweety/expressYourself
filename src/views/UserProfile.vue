<!--
 * @Author: ycy
 * @Date: 2023-09-14 15:14:27
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-14 22:46:19
-->
<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
                <UserProfileWrite @post_a_post="post_a_post"/>
            </div>
            <div class="col-9"><UserProfilePosts  :posts="posts"/></div>
        </div>
    </ContentBase>
</template>
    
<script >
import ContentBase from '../components/ContentBase.vue';
import UserProfileInfo from '../components/UserProfileInfo.vue';
import UserProfilePosts  from '../components/UserProfilePosts.vue';
import UserProfileWrite from '../components/UserProfileWrite.vue';
import {reactive} from "vue"
export default{
    name:"userprofile",
    components:{
        ContentBase,
        UserProfileInfo,
        UserProfilePosts ,
        UserProfileWrite,
    },
    setup(){
        const user=reactive({
            id:1,
            username:"wanyi",
            lastName:"Wan",
            firstName:"Yi",
            followerCount:0,
            is_followed:false,
        });
        const follow=()=>{
            if(user.is_followed)return;
            user.is_followed=true;
            user.followerCount++
        }
        const unfollow=()=>{
            if(!user.is_followed)return;
            user.is_followed=false;
            user.followerCount--
        }
        const posts=reactive({
                count:3,
                posts:[
                    {
                        id:1,
                        userId:1,
                        content:"今天上了算法课"
                    },
                    {
                        id:2,
                        userId:1,
                        content:"今天上了java课"
                    },
                    {
                        id:3,
                        userId:1,
                        content:"今天上了web课"
                    },
                ]
        })
        const post_a_post=(content)=>{
            posts.count++;
            posts.posts.unshift({
                id:posts.count,
                userId:1,
                content: content
            })
        }
        return {
            user,
            follow,
            unfollow,
            posts,
            post_a_post
        }
    }
}
</script>

<style scoped>
.container{
    margin-top: 20px;
}
</style>
    