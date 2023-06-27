<template>
  <div class="register-page">
    <div class="register-top">
      <img src="" alt="" />
      <div class="info">
        <span class="title">{{ isRegister ? '借贷风险评估' : '登录查看报告' }}</span>
        <span class="sub-tips">{{ isRegister ? '为保证报告准确，请输入真实信息' : '登录后可查看已购买报告' }}</span>
      </div>
      <div class="right-btn"><van-icon size="20" name="service" color="#fff" /></div>
    </div>

    <div class="form-panel">
      <van-form @failed="onFailed">
        <van-cell-group :border="false">
          <van-field v-model="name" name="pattern" v-if="isRegister" placeholder="请输入本人姓名" :rules="[{ validator: validatorName }]" />
          <van-field
            v-model="idCardNum"
            name="idCardNum"
            v-if="isRegister"
            placeholder="请输入本人身份证"
            :rules="[{ validator: validatorIdCardNum }]"
          />
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
        <div class="protocol" v-if="isRegister">
          <van-checkbox v-model="checked" />
          <span class="tips"
            >您已阅读并同意<span class="link">《用户服务协议》</span><span class="link">《异议说明》</span
            ><span class="link">《代收代付协议》</span
            ><span class="link">《授权书》</span>，点击勾选即代表您同意上述法律文书的相关条款并签署上述法律文书。</span
          >
        </div>

        <div class="submit-btn">
          <van-button block type="primary" native-type="submit">{{ isRegister ? '提交' : '登录' }}</van-button>
        </div>
      </van-form>

      <div class="footer">
        <van-icon v-if="isRegister" name="description" size="20" color="rgba(128, 128, 128, 1)" />
        <div class="tips" v-if="isRegister">示例报告</div>
        <div class="right" @click="handleLogin">{{ isRegister ? '已有报告，立即登录' : '立即查询' }}</div>
        <van-icon name="arrow" color="rgba(2, 121, 254, 1)" />
      </div>
    </div>

    <Advertising />

    <van-action-sheet v-model:show="visiblePay" :title="`支付金额: ${payAmount}`">
      <div class="pay-content">
        <div class="row" v-for="pay in payList" :key="pay.key" :class="selectPay === pay.key && 'active'" @click="handleSelectPay(pay)">
          <div class="icon"></div>
          <div class="label">{{ pay.label }}</div>
        </div>
        <van-button type="primary" block>立即支付</van-button>
      </div>
    </van-action-sheet>
  </div>
</template>

<script lang="ts" setup name="RegisterPage">
  import { ref } from 'vue';
  import { showToast } from 'vant';
  import Advertising from '/@/components/Advertising.vue';

  const name = ref('');
  const idCardNum = ref('');
  const phoneNum = ref('');
  const authCodeNum = ref('');
  const namePattern = /^[\u4e00-\u9fa5]+$/;
  const idCardPattern = /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  const phoneNumPattern = /^1[34578]\d{9}$/;
  const authCodeNumPattern = /^\d{4}&/;
  let isRegister = ref(true);
  let visiblePay = ref(false);
  let payAmount = ref(0.0);
  let selectPay = ref('');

  const payList = [
    {
      key: 'wechat',
      label: '微信支付',
      icon: ',',
    },
  ];
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

  const validatorIdCardNum = (val) => {
    if (!val) {
      return '请输入本人身份证号';
    }
    if (!idCardPattern.test(val)) {
      return '请输入正确的身份证号';
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
    // visiblePay.value = true;
  };

  const handleLogin = () => {
    isRegister.value = !isRegister.value;
  };

  const handleSelectPay = (pay) => {
    selectPay.value = pay.key;
  };
</script>

<style scoped lang="scss">
  .register-page {
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
        margin-top: 40px;
      }
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 36px 0 40px 0;

      .left {
        width: 40px;
        height: 40px;
        display: block;
      }
      .tips {
        flex: 1;
        font-size: 24px;
        font-weight: 500;
        color: rgba(128, 128, 128, 1);
        padding-left: 10px;
      }

      .right {
        flex: 1;
        font-size: 24px;
        font-weight: 400;
        color: rgba(2, 121, 254, 1);
        text-align: right;
      }
    }
  }

  .pay-content {
    width: 100%;
    box-sizing: border-box;
    padding: 0 42px 65px;

    .row {
      display: flex;
      align-items: center;
      height: 126px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 1);
      border: 4px solid rgba(255, 255, 255, 1);
      font-size: 28px;
      color: rgba(0, 0, 0, 1);
      margin-bottom: 42px;
      padding: 0 52px;
      box-sizing: border-box;

      &:last-child {
        margin-bottom: 42px;
      }

      &.active {
        border-color: rgba(2, 121, 254, 1);
        box-shadow: 0px 4.05px 8.11px rgba(2, 121, 254, 0.3);
      }

      .icon {
        width: 71px;
        height: 71px;
        background: #333;
      }

      .label {
        flex: 1;
        text-align: center;
      }
    }
  }
</style>