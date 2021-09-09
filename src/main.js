import router from './router';
import Layout from './layout/BasicLayout.san';
import store from './store';
import bootstrap from '@/bootstrap';
import 'normalize.css/normalize.css';
import '@/styles/index.less';

const app = new Layout();
app.attach(document.getElementById('app'));

// 挂在后的所有工作，放到bootstrap里面来统一处理
bootstrap({router, store});
