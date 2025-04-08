<template>
  <div class="contact-form-items">
    <div class="contact-title">
      <h3 class="wow fadeInUp" data-wow-delay=".3s">订阅锦麒行旅游资讯</h3>
      <p class="wow fadeInUp" data-wow-delay=".5s">
        只需输入您的电子邮件地址，即刻开启您的尊享之旅。我们承诺，您的个人信息将被严格保密，不会用于任何其他商业用途。 带星号*的为必填项。
      </p>
    </div>
    <form @submit.prevent="submitForm" id="contact-form-vue">
      <div class="row g-4">
        <div class="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
          <div class="form-clt">
            <input type="text" v-model="formData.name" name="name" id="name" placeholder="用户名*" required>
            <div class="icon"><i class="fal fa-user"></i></div>
          </div>
        </div>
        <div class="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
          <div class="form-clt">
            <input type="email" v-model="formData.email" name="email" id="email" placeholder="电子邮件地址*" required>
            <div class="icon"><i class="fal fa-envelope"></i></div>
          </div>
        </div>
        <div class="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
          <div class="form-clt">
            <textarea v-model="formData.message" name="message" id="message" placeholder="备注"></textarea>
            <div class="icon"><i class="fal fa-edit"></i></div>
          </div>
        </div>

        <!-- Submit Button Area - Cleaned -->
        <div class="col-lg-6 wow fadeInUp" data-wow-delay=".8s">
          <button type="button" @click="showInfoAlert" class="theme-btn">
            <span><i class="fal fa-paper-plane"></i> 提交</span>
          </button>
          <!-- Ensure NO remnants of the old commented-out button exist here -->
        </div>

      </div> <!-- Closing div for .row.g-4 -->
    </form>
  </div> 
</template>
  
<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const isSubmitting = ref(false); // Keep even if button is removed, might be used by status logic
const submitStatus = ref(''); // 'Success', 'Error'
const submitMessage = ref('');
// const submitButtonText = ref('提交'); // Not needed now

// Replicate the original alert behavior
const showInfoAlert = () => {
    alert('我们尚未取得收集用户信息资质，请使用其他方式联系我们。');
}

// Actual submission logic (kept for reference, but using the alert above)
const submitForm = async () => {
  showInfoAlert(); // Trigger the informational alert instead of submitting
  return; // Stop execution here

  // --- Below is the logic if you were to implement actual submission ---
  /*
  isSubmitting.value = true;
  submitStatus.value = '';
  submitMessage.value = '';
  // submitButtonText.value = '提交中...';

  try {
    // Replace with your actual form submission endpoint (e.g., Netlify Functions, Formspree)
    const response = await fetch('YOUR_FORM_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         // Add 'Accept: application/json' if your endpoint expects it
      },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      submitStatus.value = 'Success';
      submitMessage.value = '感谢您的订阅！';
      formData.value = { name: '', email: '', message: '' }; // Reset form
    } else {
      // Try to get error message from response if possible
      let errorMsg = `提交失败 (状态: ${response.status})`;
      try {
           const errorData = await response.json();
           errorMsg = errorData.message || errorMsg;
      } catch (e) { /* ignore json parse error * / } // Ensure comment is correct
      throw new Error(errorMsg);
    }
  } catch (error) {
    console.error('Form submission error:', error);
    submitStatus.value = 'Error';
    submitMessage.value = `提交出错: ${error.message || '请稍后再试。'}`;
  } finally {
    isSubmitting.value = false;
    // submitButtonText.value = '提交';
  }
  */
};
</script>

<style scoped>
/* Add styles for .contact-form-items, .form-clt, .theme-btn if needed */
.form-clt {
    position: relative;
    margin-bottom: 15px; /* Spacing */
}
.form-clt input,
.form-clt textarea {
    width: 100%;
    padding: 15px 20px 15px 50px; /* Add left padding for icon */
    border: 1px solid #ddd; /* Example border */
    border-radius: 5px;
}
.form-clt textarea {
    min-height: 120px;
    resize: vertical;
}
.form-clt .icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa; /* Icon color */
    font-size: 18px;
    pointer-events: none; /* Allow clicking through icon */
}
/* Adjust icon position specifically for textarea */
.form-clt textarea + .icon {
    top: 25px; /* Position from top */
    transform: none; /* Reset transform if needed */
}
.text-success { color: green; }
.text-danger { color: red; }
</style>