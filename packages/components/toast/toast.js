import Vue from 'vue';
import ToastComponent from './toast.vue';
const ToastConstructor = Vue.extend(ToastComponent);
let instance, timer;

const Toast = (options = {}) => {
  if (typeof options === 'string') {
    options = {
      content: options
    };
  }
  instance = new ToastConstructor({
    data: options
  });
  document.body.appendChild(instance.$mount().$el);
  instance.visible = true;
  if (options.duration > 0) {
    timer = setTimeout(() => {
      clearTimeout(timer);
      Toast.close();
    }, options.duration);
  }
};

Toast.close = () => {
  instance.visible = false;
};

Toast.loadingStart = (content) => {
  content = typeof content === 'string' ? { content: content } : { ...content };
  const options = {
    ...content,
    loading: true,
    icon: 'loading-D',
    duration: 0,
    opacity: 0.3
  };
  return Toast(options);
};

Toast.loadingEnd = () => {
  Toast.close();
};

export default Toast;
