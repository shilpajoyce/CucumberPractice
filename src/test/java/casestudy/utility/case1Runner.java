package casestudy.utility;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="FeaturesLib/case1.feature", plugin="json:target/testcasereport.json")
public class case1Runner {

}
