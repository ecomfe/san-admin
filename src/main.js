import router, {initRouter} from './router';
import Layout from './layout/BasicLayout.san';
import store from './store';
import 'normalize.css/normalize.css';
import '@/styles/index.less';

// 注册路由
initRouter({router, store});

const app = new Layout();
app.attach(document.getElementById('app'));
