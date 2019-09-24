package myRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\munna\\eclipse-workspace\\nopCommerceCucumber\\Features\\Login.feature",
		glue="stepDefinitions",
		dryRun=false,
		monochrome=true,
		format= {"pretty","html:test-output"}
		
	
		)

public class TestRunner {

}
