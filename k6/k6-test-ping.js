// k6-test-ping.js from https://github.com/wilsonmar/oss-perf/blob/master/k6/k6-test-ping.js
// Copied from https://www.redline13.com/blog/2024/01/installing-k6-locally-to-debug-tests/
// Described at https://wilsonmar.github.io/k6

import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 10,
  duration: '30s',
};
export default function () {
    http.get('http://test.k6.io');
    sleep(1);
}
