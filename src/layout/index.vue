<template>
  <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
</template>

<script lang="ts" setup name="BasicLayoutPage">
  import { showToast } from 'vant';
  const onClickLeft = () => history.back();
  const onClickRight = () => showToast('按钮');
</script>

<style scoped lang="scss"></style>
