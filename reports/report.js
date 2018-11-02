$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FacebookPractise.feature");
formatter.feature({
  "line": 1,
  "name": "Verify the user",
  "description": "",
  "id": "verify-the-user",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Enter the user details",
  "description": "",
  "id": "verify-the-user;enter-the-user-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enter the url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter name \"veni\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter password \"abc\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefiniton.user_launch_the_browser()"
});
formatter.result({
  "duration": 4634382886,
  "status": "passed"
});
formatter.match({
  "location": "StepDefiniton.user_enter_the_url()"
});
formatter.result({
  "duration": 4197665137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "veni",
      "offset": 17
    }
  ],
  "location": "StepDefiniton.user_enter_name(String)"
});
formatter.result({
  "duration": 5144988180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 21
    }
  ],
  "location": "StepDefiniton.user_enter_password(String)"
});
formatter.result({
  "duration": 71247198,
  "status": "passed"
});
formatter.match({
  "location": "StepDefiniton.user_click_the_login_button()"
});
formatter.result({
  "duration": 28553184664,
  "status": "passed"
});
});