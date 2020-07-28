<template>
  <div>
    <kad-no-result>
      <div class="no-result-box">
        <div class="info">
          正在为您转接
          <span>在线药师</span>
          查找
        </div>
        <div class="count">请稍等（3秒）...</div>
        <div class="btn">联系药师查找</div>
      </div>
    </kad-no-result>
    <kad-no-result>
      <div class="no-result-box2">
        <div class="btn">
          <div class="l_btn">咨询药师查找</div>
          <div class="r_btn">登记需要的商品</div>
        </div>
      </div>
    </kad-no-result>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.no-result-box {
  margin-top: 28px;
  .info,
  .time {
    font-size: 26px;
    span {
      color: #2f8ffd;
    }
  }
  .info {
    margin-bottom: 14px;
  }
  .btn {
    width: 710px;
    height: 60px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(5, 165, 249, 1);
    border-radius: 6px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    font-size: 24px;
    color: #2f8ffd;
  }
}
.no-result-box2 {
  margin-top: 28px;
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .l_btn,
    .r_btn {
      padding: 0 36px;
      height: 60px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(5, 165, 249, 1);
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      font-size: 24px;
      color: #2f8ffd;
    }
    .l_btn {
      margin-right: 26px;
    }
  }
}
</style>
