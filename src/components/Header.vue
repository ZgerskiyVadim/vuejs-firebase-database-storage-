<template>
    <div>
        <ul>
            <li><router-link to="/">Clubs</router-link></li>
            <li><router-link to="/add">Add a new Club</router-link></li>
        </ul>
    </div>
</template>

<style scoped>
    ul{
        list-style-type: none;
        text-align: center;
        margin: 0;
    }
    li{
        display: inline-block;
        margin: 0 10px;
    }
    a{
        color: #fff;
        text-decoration: none;
        padding: 12px;
        border-radius: 5px;
    }
    div{
        background: crimson;
        padding: 30px 0;
        margin-bottom: 40px;
    }
    .router-link-active{
        background: rgba(255,255,255,0.8);
        color: #444;
    }
</style>