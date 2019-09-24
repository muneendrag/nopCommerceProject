$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/munna/eclipse-workspace/nopCommerceCucumber/Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "nopCommerce Login",
  "description": "",
  "id": "login-feature;nopcommerce-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is \"Your store. Login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters email \"admin@yourstore.com\" and password \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "title of homepage is \"Dashboard / nopCommerce administration\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_is_in_login_page()"
});
formatter.result({
  "duration": 7876386900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 24
    }
  ],
  "location": "LoginStep.title_of_login_page_is(String)"
});
formatter.result({
  "duration": 12157800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 19
    },
    {
      "val": "admin",
      "offset": 54
    }
  ],
  "location": "LoginStep.user_enters_email_and_password(String,String)"
});
formatter.result({
  "duration": 256174300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 6172260500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_on_home_page()"
});
formatter.result({
  "duration": 3005630200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "LoginStep.title_of_homepage_is(String)"
});
formatter.result({
  "duration": 5476300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_click_on_logout_link()"
});
formatter.result({
  "duration": 1839052700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.close_browser()"
});
formatter.result({
  "duration": 780710000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Login DataDriven",
  "description": "",
  "id": "login-feature;login-datadriven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of login page is \"Your store. Login\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters email \"\u003cemail\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "title of homepage is \"Dashboard / nopCommerce administration\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user click on logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-feature;login-datadriven;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 25,
      "id": "login-feature;login-datadriven;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 26,
      "id": "login-feature;login-datadriven;;2"
    },
    {
      "cells": [
        "aadmins@yourstore.com",
        "admin@123"
      ],
      "line": 27,
      "id": "login-feature;login-datadriven;;3"
    },
    {
      "cells": [
        "aaadmins123@yourstore.com",
        "aadmin@123"
      ],
      "line": 28,
      "id": "login-feature;login-datadriven;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Login DataDriven",
  "description": "",
  "id": "login-feature;login-datadriven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of login page is \"Your store. Login\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters email \"admin@yourstore.com\" and password \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "title of homepage is \"Dashboard / nopCommerce administration\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user click on logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_is_in_login_page()"
});
formatter.result({
  "duration": 6627612700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 24
    }
  ],
  "location": "LoginStep.title_of_login_page_is(String)"
});
formatter.result({
  "duration": 8250200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 19
    },
    {
      "val": "admin",
      "offset": 54
    }
  ],
  "location": "LoginStep.user_enters_email_and_password(String,String)"
});
formatter.result({
  "duration": 310913900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 14044935000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_on_home_page()"
});
formatter.result({
  "duration": 3011347300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "LoginStep.title_of_homepage_is(String)"
});
formatter.result({
  "duration": 5557000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_click_on_logout_link()"
});
formatter.result({
  "duration": 1971023700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.close_browser()"
});
formatter.result({
  "duration": 844414100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Login DataDriven",
  "description": "",
  "id": "login-feature;login-datadriven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of login page is \"Your store. Login\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters email \"aadmins@yourstore.com\" and password \"admin@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "title of homepage is \"Dashboard / nopCommerce administration\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user click on logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_is_in_login_page()"
});
formatter.result({
  "duration": 5188799900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 24
    }
  ],
  "location": "LoginStep.title_of_login_page_is(String)"
});
formatter.result({
  "duration": 7188300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aadmins@yourstore.com",
      "offset": 19
    },
    {
      "val": "admin@123",
      "offset": 56
    }
  ],
  "location": "LoginStep.user_enters_email_and_password(String,String)"
});
formatter.result({
  "duration": 337791100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 626651200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_on_home_page()"
});
formatter.result({
  "duration": 3006376000,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Your store. Logi]n\u003e but was:\u003c[Dashboard / nopCommerce administratio]n\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.LoginStep.user_on_home_page(LoginStep.java:52)\r\n\tat ✽.Then user on home page(C:/Users/munna/eclipse-workspace/nopCommerceCucumber/Features/Login.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "LoginStep.title_of_homepage_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.user_click_on_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Login DataDriven",
  "description": "",
  "id": "login-feature;login-datadriven;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of login page is \"Your store. Login\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters email \"aaadmins123@yourstore.com\" and password \"aadmin@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "title of homepage is \"Dashboard / nopCommerce administration\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user click on logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_is_in_login_page()"
});
formatter.result({
  "duration": 5240591200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 24
    }
  ],
  "location": "LoginStep.title_of_login_page_is(String)"
});
formatter.result({
  "duration": 10995200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aaadmins123@yourstore.com",
      "offset": 19
    },
    {
      "val": "aadmin@123",
      "offset": 60
    }
  ],
  "location": "LoginStep.user_enters_email_and_password(String,String)"
});
formatter.result({
  "duration": 287024800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 615041800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_on_home_page()"
});
formatter.result({
  "duration": 3005477300,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Your store. Logi]n\u003e but was:\u003c[Dashboard / nopCommerce administratio]n\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.LoginStep.user_on_home_page(LoginStep.java:52)\r\n\tat ✽.Then user on home page(C:/Users/munna/eclipse-workspace/nopCommerceCucumber/Features/Login.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "LoginStep.title_of_homepage_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.user_click_on_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});