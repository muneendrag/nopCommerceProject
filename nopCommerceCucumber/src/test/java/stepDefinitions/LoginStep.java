package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.*;
import junit.framework.Assert;
//import pageObjects.AddCustomerPage;

public class LoginStep{
	
	WebDriver driver;
//	AddCustomerPage addcust=new AddCustomerPage();
	@Given("^user is in login page$")
	public void user_is_in_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\selenium softwares\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
	}

	@When("^title of login page is \"([^\"]*)\"$")
	public void title_of_login_page_is(String arg1)  {
		String title=driver.getTitle();
		Assert.assertEquals(title, "Your store. Login");
	  
	}

	@When("^user enters email \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_enters_email_and_password(String uname, String password) {
	    driver.findElement(By.id("Email")).sendKeys(uname);
	    driver.findElement(By.id("Password")).sendKeys(password);
	    //Thread.sleep(2000);
	}

	@When("^user clicks on login button$")
	public void user_clicks_on_login_button()  {
	   driver.findElement(By.xpath("//input[@value='Log in']")).click();
	}

	@Then("^user on home page$")
	public void user_on_home_page() throws InterruptedException {
		Thread.sleep(3000);
		String title=driver.getTitle();
	//WebElement title=driver.findElement(By.xpath("//div[@class='content-header']"));
	System.out.println(title);
	Assert.assertEquals(title, "Dashboard / nopCommerce administration");
	//	Assert.assertEquals(title, "Your store. Login");

	
	}
	@Then("^title of homepage is \"([^\"]*)\"$")
	public void title_of_homepage_is(String arg1) {
	  String title=driver.getTitle();
//	  System.out.println(title);
	  Assert.assertEquals(title, "Dashboard / nopCommerce administration");
	}

	@Then("^user click on logout link$")
	public void user_click_on_logout_link() {
		driver.findElement(By.xpath("//a[contains(text(),'Logout')]")).click();

	}
	@Then("^Close browser$")
	public void close_browser() {
		driver.quit();
	}

//customer feature step definitions
	
//	@Then("^user can view Dashboard$")
//	public void user_can_view_Dashboard() {
//		//AddCustomerPage	addcust=new AddCustomerPage();
//		Assert.assertEquals("Dashboard / nopCommerce administration", driver.getTitle());
//	}
//
//	@When("^user clicks on customers menu$")
//	public void user_clicks_on_customers_menu() {
//		//Thread.sleep(3000);
//		//addcust.clickOnCustomersMenu();
//		JavascriptExecutor js=(JavascriptExecutor)driver;
//		js.executeScript("addcust.clickOnCustomersMenu().click()");
//		//WebDriverWait wait=new WebDriverWait(driver, 30);
//		//wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//a[@href='#']//span[contains(text(),'Customers')]"))));
//		
//	}
//
//	@When("^clicks on customers menu item$")
//	public void clicks_on_customers_menu_item() {
//		addcust.clickOnCustomersMenuItem();
//	   
//	}
//
//	@When("^click on add new customer page$")
//	public void click_on_add_new_customer_page() {
//	   addcust.clickOnAddNew();
//	}
//
//	@Then("^user can view and add new customer$")
//	public void user_can_view_and_add_new_customer() {
//	   WebElement tit=driver.findElement(By.xpath("//h1[@class='pull-left']"));
//	   Assert.assertEquals(tit, addcust.getPageTitle());
//	}
//
//	@When("^user enters customer info$")
//	public void user_enters_customer_info() {
//		String email=randomstring()+"@gmail.com";
//		addcust.setEmail(email);
//		addcust.setPassword("test123");
//		addcust.setGender("Male");
//		addcust.setFirstName("munna");
//		addcust.setLastName("g");
//		addcust.setDOB("01/10/1999");
//		addcust.setCustomerRoles("Guest");
//		addcust.setCompanyname("google");
//		addcust.setAdminContent("Hi,hello");
//		addcust.setManagerOfVendoe("Vendor 2");
//
//	}
//
//	@Then("^clicks on save button$")
//	public void clicks_on_save_button() throws InterruptedException {
//		addcust.clickOnSave();
//		Thread.sleep(3000);
//	    
//	}
//
//	@Then("^user can view confirmation message \"([^\"]*)\"$")
//	public void user_can_view_confirmation_message(String msg)  {
//		Assert.assertTrue(driver.findElement(By.tagName("body")).getText().contains("The new customer has been added successfully."));
//	    
//	}



}
