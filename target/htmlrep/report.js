$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeaturesLib/featureTes.feature");
formatter.feature({
  "name": "Testing feature1",
  "description": "  Test run of feature1",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Feature1 check",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Type Hey",
  "keyword": "When "
});
formatter.match({
  "location": "test123.type_Hey()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hey displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "test123.hey_displayed()"
});
formatter.result({
  "status": "passed"
});
});