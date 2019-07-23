$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeaturesLib/practice.feature");
formatter.feature({
  "name": "purchase products in Online",
  "description": "This tests the online purchase of products",
  "keyword": "Feature"
});
formatter.background({
  "name": "display welcome message",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "application displaying welcome message",
  "keyword": "Given "
});
formatter.match({
  "location": "practice678.application_displaying_welcome_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Payment",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@payment"
    }
  ]
});
formatter.step({
  "name": "user performs payment through netbanking",
  "keyword": "When "
});
formatter.match({
  "location": "practice678.user_performs_payment_through_netbanking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close application",
  "keyword": "Then "
});
formatter.match({
  "location": "practice678.close_application()"
});
formatter.result({
  "status": "passed"
});
});