/**
 * Created by mafuyuk on 2017/03/05.
 */

import { requestPushEnable, registerServiceWorker, pushDemo } from './webpush';

requestPushEnable();

console.log(pushDemo());

registerServiceWorker();
