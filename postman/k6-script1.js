import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  vus: 1,
  duration: "60s",
  thresholds: {
    http_req_duration: ["p(95)<1500"],
  },
};

export default function() {
  var payload = JSON.stringify({
    email: "shivateja.dasi@the10xacademy.com",
    includeTasks: true,
  });

  var params = {
    headers: {
      "Accept-Language": "en-US,en;q=0.9",
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoaXZhdGVqYS5kYXNpQHRoZTEweGFjYWRlbXkuY29tIiwidXNlciI6eyJ1dWlkIjoiNTEzYmIxNTktZjlkZS01M2YxLWJkZmItYTlkMzM0NDM0MzdmIiwiZmlyc3ROYW1lIjoiU2hpdmF0ZWphIiwibGFzdE5hbWUiOiJEYXNpIiwiZW1haWwiOiJzaGl2YXRlamEuZGFzaUB0aGUxMHhhY2FkZW15LmNvbSIsInBob25lTnVtYmVyIjpudWxsLCJpc1Bob25lTnVtYmVyVmVyaWZpZWQiOm51bGwsIm5pY2tOYW1lIjoiU2hpdmF0ZWphIERhc2kiLCJyb2xlIjoiQURNSU4iLCJhZGRyZXNzIjoiIiwiY2l0eSI6IiIsImF2YXRhcl91cmwiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQVRYQUp3X1dLdTdEOVd6Y1ZyWk9TT3diTEVBX0IyS2w1WFBsT1NidTFwNz1zOTYtYyIsImNyZWF0ZWRBdCI6MTYzODgxMTAwNywidXBkYXRlZEF0IjoxNjM5ODEwNzA4LCJsaW5rZWRJblVSTCI6bnVsbH0sImV4cCI6MTY2NjI3MDA4NCwianRpIjoiMTA0NDg3MDA4ODE0Mzk1NzMzNTAwIiwiaWF0IjoxNjY1NDA2MDg0LCJpc3MiOiJnb29nbGUiLCJuYmYiOjE2NjU0MDYwODR9.rMSSCaEu-_9btAM9uAuDi2_basNF0hS7zEmay-oFISGvxV9GGKX_KZJXeaSok1_bSMjIYP0fdGg6hPoFFrn07g",
      Connection: "keep-alive",
      Origin: "http://34.87.20.129/",
      Referer: "http://34.87.20.129/",
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36",
      accept: "application/json, multipart/mixed",
      "content-type": "application/json",
    },
  };

  let res1 = http.request(
    "POST",
    "http://34.87.20.129/v1/graphql",
    payload,
    params
  );
  check(res1, { "Get counties Success": (r) => r.status == 200 });
  console.log(JSON.stringify(res1.json()));
  sleep(1);
}
