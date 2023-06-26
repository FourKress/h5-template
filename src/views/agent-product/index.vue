<template>
  <div class="agent-product">
    <div class="item" v-for="item in 10" :key="item">
      <span class="tag">已开通</span>
      <div class="top">
        <span class="tips">查看示例<van-icon name="arrow" color="rgba(166, 166, 166, 1)" /></span>
      </div>
      <div class="info">
        <div class="left">
          <span class="label">普通版</span>
          <span class="text">
            <span>48.00元</span>
            <span class="btn">修改</span>
          </span>
        </div>
        <div class="right">
          <span class="label">基础定价</span>
          <span class="text">18.00元</span>
        </div>
      </div>
      <div class="footer">
        <div class="btn" @click="handleSendAgent">二维码</div>
        <div class="btn" @click="handleDownload">复制链接</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="AgentProductPage">
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
  .agent-product {
    width: 100%;
    box-sizing: border-box;
    padding: 60px 43px;
    background-color: rgba(245, 245, 245, 1);

    .item {
      height: 324px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 1);
      box-sizing: border-box;
      padding: 18px 34px 0;
      margin-bottom: 60px;
      position: relative;
      overflow: hidden;

      &:last-child {
        margin-bottom: 0;
      }

      .tag {
        position: absolute;
        left: 0;
        top: 0;
        font-size: 24px;
        color: rgba(255, 255, 255, 1);
        width: 100px;
        height: 50px;
        line-height: 50px;
        border-radius: 20px 0 20px 0;
        background: rgba(59, 184, 59, 1);
        text-align: center;
      }

      .top {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .tips {
          margin-right: -6px;
          font-size: 24px;
          color: rgba(166, 166, 166, 1);
        }
      }

      .info {
        padding-top: 40px;
        font-size: 28px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
          display: flex;
          flex-direction: column;

          .label {
            color: rgba(0, 0, 0, 1);
            padding-bottom: 10px;
          }

          .text {
            font-size: 32px;
            color: rgba(255, 141, 26, 1);
            display: flex;
            align-items: center;

            .btn {
              font-size: 26px;
              color: rgba(2, 121, 254, 1);
              padding-left: 26px;
            }
          }
        }

        .right {
          display: flex;
          flex-direction: column;
          padding-right: 88px;

          .label {
            color: rgba(128, 128, 128, 1);
            padding-bottom: 10px;
          }

          .text {
            font-size: 32px;
            color: rgba(0, 0, 0, 1);
          }
        }
      }

      .footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 40px;

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
