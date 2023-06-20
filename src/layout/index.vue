<template>
  <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
  <div class="container">
    <div class="main">
      <div class="scroll-view">123123</div>
    </div>
  </div>
  <van-tabbar v-model="activeTabbar" placeholder>
    <van-tabbar-item v-for="tabbar in tabbarList" :key="tabbar.name" :name="tabbar.name" :icon="tabbar.icon">{{
      tabbar.label
    }}</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup name="BasicLayoutPage">
  import { ref } from 'vue';
  import { showToast } from 'vant';
  const onClickLeft = () => history.back();
  const onClickRight = () => showToast('按钮');

  const activeTabbar = ref('home');

  const tabbarList = [
    {
      label: 'home',
      name: 'home',
      icon: 'home-o',
    },
    {
      label: 'search',
      name: 'search',
      icon: 'search',
    },
    {
      label: 'friends',
      name: 'friends',
      icon: 'friends-o',
    },
    {
      label: 'setting',
      name: 'setting',
      icon: 'setting-o',
    },
  ];
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    flex: 1;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    .main {
      flex: 1;
      overflow: hidden;
      overflow-y: auto;

      .scroll-view {
        background-color: red;
        height: 2000px;
        overflow-y: auto;
      }
    }
  }
</style>
