<template>
  <div class="order">
    <div class="item" v-for="item in 10" :key="item">
      <div class="top">
        <span class="label">专业版</span>
        <span class="status">生成中</span>
      </div>
      <div class="info">
        <div class="row">
          <span class="label">姓名:</span>
          <span class="text">撒大声地</span>
        </div>
        <div class="row">
          <span class="label">身份证号:</span>
          <span class="text">撒大声地</span>
        </div>
        <div class="row">
          <span class="label">手机号:</span>
          <span class="text">撒大声地</span>
        </div>
      </div>
      <div class="tips">
        <span class="label">实付</span>
        <span class="amount">¥89.90</span>
      </div>
      <div class="footer">
        <div class="btn" @click="handleSendAgent">发送代理商</div>
        <div class="btn" @click="handleDownload">下载</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="OrderPage">
  import { showConfirmDialog, showToast } from 'vant';
  const handleSendAgent = () => {
    showConfirmDialog({
      title: '确认发送',
      message: '确认发送该报告给代理商？代理商仅能在24小时内查看。',
    })
      .then(() => {
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
  };

  const handleDownload = () => {
    showToast('开始下载');
  };
</script>

<style scoped lang="scss">
  .order {
    width: 100%;
    box-sizing: border-box;
    padding: 60px 43px;
    background-color: rgba(245, 245, 245, 1);

    .item {
      height: 458px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 1);
      box-sizing: border-box;
      padding: 20px 34px 0;
      margin-bottom: 60px;

      &:last-child {
        margin-bottom: 0;
      }

      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .label {
          font-size: 32px;
          color: rgba(0, 0, 0, 1);
        }

        .status {
          font-size: 28px;
          color: rgba(255, 141, 26, 1);
        }
      }

      .info {
        padding-top: 40px;

        .row {
          font-size: 28px;
          color: rgba(128, 128, 128, 1);
          margin-bottom: 24px;

          .text {
            padding-left: 10px;
          }
        }
      }

      .tips {
        text-align: right;
        font-size: 26px;
        color: rgba(166, 166, 166, 1);
        margin-bottom: 22px;
        border-bottom: 2px solid rgba(229, 229, 229, 1);
        padding-bottom: 16px;

        .amount {
          font-size: 26px;
          color: rgba(0, 0, 0, 1);
          padding-left: 29px;
        }
      }

      .footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .btn {
          width: 184px;
          height: 60px;
          line-height: 60px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 1);
          border: 2px solid rgba(2, 121, 254, 1);
          text-align: center;
          font-size: 26px;
          color: rgba(2, 121, 254, 1);

          margin-right: 29px;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>