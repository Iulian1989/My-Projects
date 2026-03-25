package iulian;

import java.sql.Driver;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class SauceDemoTest {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
            
		 WebDriver driver = new ChromeDriver();
	     driver.manage().window().maximize();  
	     
	     driver.get("https://www.saucedemo.com/");
	        Thread.sleep(2000);

	        driver.findElement(By.id("user-name")).sendKeys("standard_user");
	        driver.findElement(By.id("password")).sendKeys("secret_sauce");
	        driver.findElement(By.id("login-button")).click();
	        Thread.sleep(2000);
	        
	        Actions actions = new Actions(driver);
	        
	        WebElement product = driver.findElement(By.xpath("//div[text()='Sauce Labs Onesie']"));
	        ((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView(true);", product);
	        Thread.sleep(2000);
	        
	        actions.moveToElement(product).perform();
	        Thread.sleep(2000);
	        
	        product.click();
	        Thread.sleep(2000);
	        
	        WebElement addBtn = driver.findElement(By.id("add-to-cart"));
	        addBtn.click();
	        Thread.sleep(2000);
	        
	        WebElement cartBadge = driver.findElement(By.className("shopping_cart_badge"));
	        cartBadge.click();
	        Thread.sleep(2000);
	        
	        driver.findElement(By.id("continue-shopping")).click();
	        Thread.sleep(2000);
	        
	        driver.findElement(By.id("react-burger-menu-btn")).click();
	        Thread.sleep(2000);
	        
	        driver.findElement(By.id("logout_sidebar_link")).click();
	        Thread.sleep(2000);
	        
	        driver.quit();
	        
	        
	        
	    
	        


	 
	    
	       
		
		
		
		
	}

}
