import devCfg from './dev.config';
import prodCfg from './prod.config';
const isOnline = process.env.NODE_ENV === 'production';

const appCfg = !isOnline ? prodCfg : devCfg;

export default appCfg;
