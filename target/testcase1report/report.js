$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeaturesLib/case1.feature");
formatter.feature({
  "name": "Test Registration",
  "description": "  To test the functionality of Registration in TestMeApp",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Registration process",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User opens TestMeApp",
  "keyword": "Given "
});
formatter.step({
  "name": "Enters uname as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Enter the fn as \u003cfirstname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the ln as \u003clastname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the pass as \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the cpass as \u003cConfirmPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Select gender",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the email as \u003cEmail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter mob as \u003cMobileNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter dob as \u003cDob\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the address as \u003cadd\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter ans as \u003cAnswer\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Register",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "firstname",
        "lastname",
        "Password",
        "ConfirmPassword",
        "Email",
        "MobileNumber",
        "Dob",
        "add",
        "Answer"
      ]
    },
    {
      "cells": [
        "shil123",
        "shilpa",
        "joyce",
        "shilpa12",
        "shilpa12",
        "sh@gmail.com",
        "9445406265",
        "03/23/1998",
        "AlandurChennai",
        "London"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Registration process",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User opens TestMeApp",
  "keyword": "Given "
});
formatter.match({
  "location": "Case1.OpenBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters uname as shil123",
  "keyword": "When "
});
formatter.match({
  "location": "Case1.getUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the fn as shilpa",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.getFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the ln as joyce",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.getLastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the pass as shilpa12",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.getPass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the cpass as shilpa12",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.getCPass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select gender",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.getGender()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the email as sh@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.getEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter mob as 9445406265",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.getMobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter dob as 03/23/1998",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.getDob(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the address as AlandurChennai",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.getAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter ans as London",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.getAnswer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Register",
  "keyword": "Then "
});
formatter.match({
  "location": "Case1.clickReg()"
});
formatter.result({
  "status": "passed"
});
});