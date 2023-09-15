<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
            <div class="col-3"> 
                <img  class="img-fluid" src="../assets/images/user.jpg"  >
            </div>
            <div class="col-9"> 
                <div class="username">{{user.username}}</div>
                <div class="fans">粉丝数:{{user.followerCount}}</div>
                <button @click="follow" v-if="!user.is_followed" type="button" class="btn btn-secondary btn-sm">+关注</button>
                <button @click="unfollow" v-if="user.is_followed" type="button" class="btn btn-secondary btn-sm">取消关注</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script >
export default{
    name:"UserProfileInfo",
    props:{
        user:{
            type:Object,
            required:true
        }
    },
    setup(props,context){
    // 如果需要计算名字，就使用计算属性
    //     let fullName=computed(()=>{
    //         props.lastName+' '+props.firstName
    //     })
    const follow=()=>{
        console.log("follow");
        context.emit("follow")
    };
    const unfollow=()=>{
        console.log("unfollow");
        context.emit("unfollow")
    }
        return{
    // fullName
    follow,
    unfollow
        }
    }
}
</script>

<style scoped>
img{
    border-radius: 50%;
}
.username{
    font-weight: bold;
}
.fans{
    font-size:12px;
    color:grey
}
button{
    padding: 2px 4px;
    font-size:12px
}
</style>
