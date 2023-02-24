// run k6 run k6/endpoints/all.js
// summary file uploaded at k6/summary/all.html
import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// defines test run behaviors
export const options = {
  stages: [
    { duration: '30s', target: 500 }, // manually ramping the VUs to target of 600
    { duration: '30s', target: 600 }
  ],

  thresholds: {
    http_req_failed: ['rate < 0.01'], // http errors should be less than 1%
    http_req_duration: ['avg < 2000'] // average latency rate should be less than 2000ms
  }
};

// generates the summary report in UI
export function handleSummary(data) {
  return {
    "k6/summary/all.html": htmlReport(data)
  }
};

// iteration that each VU runs through
export default () => {
  // generates a random product id every iteration
  const product_id = Math.floor(Math.random() * 1000010) + 1;
  const res = http.batch([
    ['GET', `http://localhost:3000/products/${product_id}`],
    ['GET', `http://localhost:3000/products/${product_id}/styles`],
    ['GET', `http://localhost:3000/products/${product_id}/related`],
  ]);

  // forces the VU to sleep for 1 second before next iteration
  sleep(1);
};