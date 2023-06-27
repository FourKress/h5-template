<template>
  <div class="agent-income-details-page">
    <div class="page-top">
      2023.03
      <van-icon name="arrow-down" color="rgba(0, 0, 0, 1)" />
    </div>
    <div class="tips">
      <span>收入 ¥ 360.00<span class="count">共10笔</span></span>
      <span>支出 ¥ 360.00<span class="count">共10笔</span></span>
    </div>
    <div class="list">
      <div class="item" v-for="item in 10" :key="item">
        <div class="top">
          <span class="label">订单收入</span>
          <span class="value">+20.00</span>
        </div>
        <div class="footer">
          <span class="timer">2023-3-02 12:23:12</span>
          <span class="btn">详情</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="AgentIncomeDetailsPage"></script>

<style scoped lang="scss">
  .agent-income-details-page {
    width: 100%;
    box-sizing: border-box;
    padding: 28px 30px 60px;
    background-color: rgba(245, 245, 245, 1);

    .page-top {
      font-size: 28px;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
    }

    .tips {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 26px;
      color: rgba(128, 128, 128, 1);
      padding: 24px 0;

      .count {
        padding-left: 26px;
      }
    }

    .list {
      width: 100%;
      border-radius: 20px;
      background: rgba(255, 255, 255, 1);
      box-sizing: border-box;
      padding: 36px 32px;

      .item {
        width: 100%;
        margin-bottom: 57px;

        &:last-child {
          margin-bottom: 0;
        }

        .top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgba(0, 0, 0, 1);
          font-size: 26px;
          padding-bottom: 20px;

          .value {
            font-size: 32px;
          }
        }

        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgba(166, 166, 166, 1);
          font-size: 24px;

          .btn {
            font-size: 26px;
            color: rgba(2, 121, 254, 1);
          }
        }
      }
    }
  }
</style>
