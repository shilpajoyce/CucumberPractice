package shil12;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

	public class test123 {
		@When("Type Hey")
		public void type_Hey() {
			System.out.println("Hey");	
		}

		@Then("Hey displayed")
		public void hey_displayed() {
			System.out.println("Displayed - Hey");
		}

	}

