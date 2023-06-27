<template>
  <div class="agent-register-page">
    <div class="register-top">
      <img src="" alt="" />
      <div class="info">
        <span class="title">代理认证</span>
        <span class="sub-tips">请填写认证信息成为代理</span>
      </div>
      <div class="right-btn"><van-icon size="20" name="service" color="#fff" /></div>
    </div>

    <div class="form-panel">
      <van-form @failed="onFailed">
        <van-cell-group :border="false">
          <van-field v-model="name" name="pattern" placeholder="请输入本人姓名" :rules="[{ validator: validatorName }]" />
          <van-field
            v-model="phoneNum"
            name="phoneNum"
            type="digit"
            placeholder="请输入本人手机号"
            :rules="[{ validator: validatorPhoneNum }]"
          />
          <van-field
            v-model="authCodeNum"
            name="authCodeNum"
            maxlength="4"
            type="digit"
            placeholder="请输入验证码"
            :rules="[{ validator: validatorAuthCodeNum }]"
          >
            <template #button>
              <van-button size="small" type="primary">发送验证码</van-button>
            </template>
          </van-field>
        </van-cell-group>
        <div class="protocol">
          <van-checkbox v-model="checked" />
          <span class="tips"
            >您已阅读并同意<span class="link">《代理协议》</span>，点击勾选即代表您同意上述法律文书的相关条款并签署上述法律文书。</span
          >
        </div>

        <div class="submit-btn">
          <van-button block type="primary" native-type="submit">提交认证</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script lang="ts" setup name="AgentRegisterPage">
  import { ref } from 'vue';
  import { showToast } from 'vant';

  const name = ref('');
  const phoneNum = ref('');
  const authCodeNum = ref('');
  const namePattern = /^[\u4e00-\u9fa5]+$/;
  const phoneNumPattern = /^1[34578]\d{9}$/;
  const authCodeNumPattern = /^\d{4}&/;

  const checked = ref(true);

  const validatorName = (val) => {
    if (!val) {
      return '请输入本人姓名';
    }
    if (!namePattern.test(val)) {
      return '请输入中文姓名';
    }
    return '';
  };

  const validatorPhoneNum = (val) => {
    if (!val) {
      return '请输入本人手机号';
    }
    if (!phoneNumPattern.test(val)) {
      return '请输入正确的手机号';
    }
    return '';
  };

  const validatorAuthCodeNum = (val) => {
    if (!val) {
      return '请输入验证码';
    }
    if (!authCodeNumPattern.test(val)) {
      return '请输入正确的验证码';
    }
    return '';
  };

  const onFailed = (errorInfo) => {
    console.log('failed', errorInfo);
    showToast('验证码错误');
  };

</script>

<style scoped lang="scss">
  .agent-register-page {
    min-height: 100%;

    padding: 42px 42px 0;
    box-sizing: border-box;
    background-color: #ccc;
    padding-bottom: calc(42px + env(safe-area-inset-bottom));

    .register-top {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      position: relative;

      img {
        width: 100px;
        height: 100px;
        display: block;
        margin-right: 47px;
        position: absolute;
        left: 0;
        top: 0;

        background: #333;
      }

      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          font-size: 40px;
          font-weight: 500;
          color: rgba(0, 0, 0, 1);
          padding-bottom: 6px;
        }

        .sub-tips {
          font-size: 24px;
          font-weight: 500;
          color: #fff;
        }
      }

      .right-btn {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .form-panel {
      box-sizing: border-box;
      padding: 43px 34px 0;
      border-radius: 20px;
      background-color: #fff;
      margin: 40px 0;
      overflow: hidden;

      :deep .van-cell {
        padding-left: 18px;
        padding-right: 18px;
        margin-bottom: 63px;
        border-radius: 10px;
        position: relative;
        border: 1px solid rgba(229, 229, 229, 1);
        overflow: unset;

        .van-field__error-message {
          position: absolute;
          left: 0;
          bottom: 0;
          transform: translateY(150%);
        }

        &:last-child {
          margin-bottom: 0;
        }

        &:after {
          display: none;
        }
      }

      .protocol {
        font-size: 24px;
        margin-top: 52px;
        color: rgba(128, 128, 128, 1);
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        box-sizing: border-box;
        width: 100%;

        .tips {
          width: calc(100% - 60px);

          .link {
            color: rgba(2, 121, 254, 1);
          }
        }

        :deep .van-checkbox {
          min-width: 40px;
          width: 40px;
          margin-right: 6px;
          align-items: flex-start;
        }
      }

      .submit-btn {
        margin: 40px 0;
      }
    }
  }
</style>