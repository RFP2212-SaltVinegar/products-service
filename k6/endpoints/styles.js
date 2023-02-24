// run k6 run k6/endpoints/styles.js
// summary file uploaded at k6/summary/styles.html
import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// allows for incrementation of counter for every error
const errors = new Counter('errors');

// defines test run behaviors
export const options = {
  stages: [
    { duration: '30s', target: 2000 }, // manually ramping the VUs to target of 5000
    { duration: '30s', target: 4000 },
    { duration: '30s', target: 5000 }
  ],

  thresholds: {
    http_req_failed: ['rate < 0.01'], // http errors should be less than 1%
    http_req_duration: ['avg < 2000'] // average latency rate should be less than 2000ms
  }
};

// generates the summary report in UI
export function handleSummary(data) {
  return {
    "k6/summary/styles.html": htmlReport(data)
  }
};

// iteration that each VU runs through
export default () => {
  // generates a random product id every iteration
  const product_id = Math.floor(Math.random() * 1000010) + 1;
  const res = http.get(`http://localhost:3000/products/${product_id}/styles`);

  // increments the error counter if status code is not 200
  const statusCode200 = check(res, {
    'return status code 200': (res) => res.status === 200
  });

  if (!statusCode200) {
    errors.add(1);
  }

  // forces the VU to sleep for 1 second before next iteration
  sleep(1);
};