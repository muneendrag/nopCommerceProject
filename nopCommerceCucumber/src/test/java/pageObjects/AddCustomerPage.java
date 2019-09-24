package pageObjects;

import org.apache.commons.lang.RandomStringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class AddCustomerPage {
	public AddCustomerPage addcust;
	WebDriver driver;
	public AddCustomerPage() {
		PageFactory.initElements(driver, this);
	}
	

	@FindBy(xpath="//a[@href='#']//span[contains(text(),'Customers')]")
	WebElement customersLink;
	
	@FindBy(xpath="//ul/li[1]//a[@class='menu-item-link']//span[@class='menu-item-title'][contains(text(),'Customers')]")
	WebElement customersMenuLink;
	
	@FindBy(xpath="//a[@class='btn bg-blue']")
	WebElement addnewbtn;
	
	@FindBy(id="Email")
	WebElement email;
	
	@FindBy(id="Password")
	WebElement password;
	
	@FindBy(id="FirstName")
	WebElement firstname;
	
	@FindBy(id="LastName")
	WebElement lastname;
	
	@FindBy(id="Gender_Male")
	WebElement male;
	
	@FindBy(id="Gender_Female")
	WebElement female;
	
	@FindBy(id="DateOfBirth")
	WebElement dob;
	
	@FindBy(name="Company")
	WebElement company;
	
	@FindBy(id="IsTaxExempt")
	WebElement tax;
	
	@FindBy(xpath="//div[@class='k-multiselect-wrap k-floatwrap']")
	WebElement customerrole;
	
	@FindBy(xpath="//li[contains(text(),'Administrators')]")
	WebElement administrator;
	
	@FindBy(xpath="//li[contains(text(),'Forum Moderators')]")
	WebElement forummoderator;
	
	@FindBy(xpath="//li[contains(text(),'Guests')]")
	WebElement guests;
	
	@FindBy(xpath="//li[contains(text(),'Registered')]")
	WebElement register;
	
	@FindBy(xpath="//li[contains(text(),'Vendors')]")
	WebElement vendor;
	
	@FindBy(id="VendorId")
	WebElement vendorid;
	
	@FindBy(name="AdminComment")
	WebElement admincomment;
	
	@FindBy(name="save")
	WebElement savebtn;
	
	public String getPageTitle() {
		return driver.getTitle();
	}
	
	public void clickOnCustomersMenu() {
		customersLink.click();
	}
	public void clickOnCustomersMenuItem() {
		customersMenuLink.click();
	}
	public void clickOnAddNew() {
		addnewbtn.click();
	}
	public void setEmail(String Email) {
		email.sendKeys(Email);
	}
	public void setPassword(String Password) {
		password.sendKeys(Password);
	}
	public void setFirstName(String Firstname) {
		firstname.sendKeys(Firstname);
	}
	public void setLastName(String Lastname) {
		lastname.sendKeys(Lastname);
	}
	public void setCustomerRoles(String role) {
		
		//WebElement listitem;
		if(role.equals("Administrators")) {
			administrator.click();
		}
		else if(role.equals("Forum Moderators")) {
			forummoderator.click();
		}
		else if(role.equals("Guests")) {
			guests.click();
		}
		else if(role.equals("Registered")) {
			register.click();
		}
		else if(role.equals("Vendors")) {
			vendor.click();
		}
	}
	public void setManagerOfVendoe(String value) {
		Select sel=new Select(vendorid);
		sel.deselectByVisibleText(value);
	}
	public void setGender(String gender) {
		if(gender.equals("Male")) {
			male.click();
		}
		else if(gender.equals("Female")) {
			female.click();
		}
		else {
			male.click();
		}
	}
	public void setDOB(String Dob) {
		dob.sendKeys(Dob);
	}
	public void setCompanyname(String cname) {
		company.sendKeys(cname);
	}
	public void setAdminContent(String content) {
		admincomment.sendKeys(content);
	}
	public void clickOnSave() {
		savebtn.click();
	}
	//to create unique emailid
	public static String randomstring() {
		String generateString1=RandomStringUtils.randomAlphabetic(5);
		return (generateString1);
	}
}
