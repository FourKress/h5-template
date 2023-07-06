<template>
  <div class="agent-income-details-page">
    <div class="page-top" @click="showPicker = true">
      {{ cycle.text }}
      <van-icon name="arrow-down" color="rgba(0, 0, 0, 1)" />
    </div>
    <div class="tips">
      <span
        >收入 ¥ {{ totalInfo.totalIncome }}<span class="count">共{{ totalInfo.totalNum }}笔</span></span
      >
      <span
        >支出 ¥ {{ totalInfo.backAmt }}<span class="count">共{{ totalInfo.backNum }}笔</span></span
      >
    </div>
    <div class="list">
      <div class="item" v-for="item in totalInfo.items" :key="item">
        <div class="top">
          <span class="label">订单收入</span>
          <span class="value">+{{ item.income }}</span>
        </div>
        <div class="footer">
          <span class="timer">{{ item.bizDate }}</span>
          <span class="btn" @click="checkDetails">详情</span>
        </div>
      </div>
    </div>

    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
    </van-popup>
  </div>
</template>

<script lang="ts" setup name="AgentIncomeDetailsPage">
  import { ref, onMounted } from 'vue';
  import { agentIncomeDetail } from '/@/api';

  const detailsInfo = ref({});
  const showPicker = ref(false);
  const columns = [
    { text: '上周', value: 'LAST_WEEK' },
    { text: '上月', value: 'LAST_MONTH' },
    { text: '近三月', value: 'THREE_MONTH' },
    { text: '近半年', value: 'HALF_YEAR' },
  ];
  const cycle = ref({ text: '上周', value: 'LAST_WEEK' });
  const totalInfo = ref({});

  onMounted(() => {
    getDetailsList();
  });

  const getDetailsList = () => {
    agentIncomeDetail({
      cycle: cycle.value.value,
    }).then((res) => {
      totalInfo.value = res.data.value || {};
    });
  };

  const checkDetails = (income) => {
    detailsInfo.value = income;
  };

  const onConfirm = ({ selectedOptions }) => {
    showPicker.value = false;
    cycle.value = selectedOptions[0];
    getDetailsList();
  };
</script>

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
