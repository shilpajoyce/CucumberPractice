package shil12;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features="FeaturesLib/featureTes.feature", plugin="html:target/htmlrep")
public class ShilRunner {

}
