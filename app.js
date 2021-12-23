import router, {initRouter} from './src/router';
import Layout from './pages/index.san';
import store from './src/store';

import './src/mock';

import 'normalize.css/normalize.css';
import '@/styles/index.less';

// 注册路由
initRouter({router, store});

const app = new Layout();
app.attach(document.getElementById('app'));
