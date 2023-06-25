<template>
  <div class="advertising">
    <div class="top"><span class="title">检测内容</span></div>
    <div class="main">
      <div class="item" v-for="item in adList" :key="item">
        <van-icon name="success" color="rgba(35, 176, 35, 1)" />
        <span class="label">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="Advertising">
  const adList = ['债务纠纷问题', '优化技巧指南', '黑名单风险排查', '风险信息扫描', '欺诈风险监控', '司法失信咨询'];
</script>

<style scoped lang="scss">
  .advertising {
    height: 352px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    padding: 0 22px;

    .top {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 18px 0;
      margin-bottom: 30px;

      .title {
        font-size: 28px;
        font-weight: 500;
        color: rgba(2, 121, 254, 1);
        padding: 0 20px;
      }

      &:after,
      &:before {
        content: ' ';
        width: 223px;
        height: 2px;
        background: rgba(2, 121, 254, 1);
      }
    }

    .main {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      padding: 0 30px;

      .item {
        width: 50%;
        margin-bottom: 40px;

        font-size: 26px;
        font-weight: 500;
        color: rgba(128, 128, 128, 1);

        .label {
          padding-left: 8px;
        }

        &:nth-child(even) {
          text-align: right;
        }
      }
    }
  }
</style>
