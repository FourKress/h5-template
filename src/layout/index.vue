<template>
  <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
  <div class="container">
    <div class="main">
      <div class="scroll-view">
        <router-view />
      </div>
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
      label: '可阅报告',
      name: 'home',
      icon: 'home-o',
    },
    {
      label: '代理产品',
      name: 'search',
      icon: 'search',
    },
    {
      label: '我的',
      name: 'friends',
      icon: 'friends-o',
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
        height: 100%;
        overflow-y: auto;
      }
    }
  }
</style>
