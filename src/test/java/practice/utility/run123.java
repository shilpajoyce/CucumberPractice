package practice.utility;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features="FeaturesLib/practice.feature",
				//tags={"@login"},
				//tags={"~@regression"}, //ignore regression
				tags={"@login","@regression"},
				//tags={"@login,@regression"},
				//plugin="html:target/Html1Report")
				plugin="json:target/Jsonreport.json")
				//plugin="junit:target/xmlreport.xml")
public class run123 {
}