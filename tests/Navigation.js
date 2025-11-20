import { Builder, Browser, By } from 'selenium-webdriver';
import assert from 'assert';

//Test Navigation
//This test verifies that all navigation links work correctly

async function testNavigation() {
    //Create the browser controller (driver)
    console.log("Starting Test: Porfolio Navigation");
    let driver;
    
    try {
        //Building a new Crhome browser instance
        driver = await new Builder()
            .forBrowser(Browser.CHROME)
            .build();

        await driver.manage().window().maximize();
        await driver.sleep(1000); 

        await driver.manage().setTimeouts({ implicit: 5000 });
        
        //Navigating to website
        await driver.get('http://localhost:5173/')

        //find the navbar with my name
        const NameElement = await driver.findElement(By.css('.name'));
        const nameText = await NameElement.getText();
        assert.equal(nameText, 'Paul Rodriguez', 'Name should be "Paul Rodriguez"');
        console.log('Page Loaded Correctly - name found');
        
        //Testing "About" link
        const aboutLink = await driver.findElement(By.linkText('About'));
        await aboutLink.click();

        //Wait for smooth scroll
        await driver.sleep(2000);

        //Verify the About Section is visible 
        const aboutSection = await driver.findElement(By.id('about-section'));
        const isAboutVisible = await aboutSection.isDisplayed();
        assert.equal(isAboutVisible, true, 'About section should be visible');

        //Verify Projects Section
        const projectsLink = await driver.findElement(By.linkText('Projects'));
        await projectsLink.click();

        await driver.sleep(1000);

        const projectsSection = await driver.findElement(By.id('projects-section'));
        const isProjectsVisible = await projectsSection.isDisplayed();
        assert.equal(isProjectsVisible, true, 'Projects section should be visible');
        
        //Verify Skills Section
        const skillsLink = await driver.findElement(By.linkText('Skills'));
        await skillsLink.click();

        await driver.sleep(2000) 

        const skillsSection = await driver.findElement(By.id('skills-section'));
        const isSkillsVisible = await skillsSection.isDisplayed();
        assert.equal(isSkillsVisible, true, 'Skills Section should be visible');

        //verify Leave A Message Section
        const contactLink = await driver.findElement(By.linkText('Leave a Message!'));
        await contactLink.click();

        await driver.sleep(1000);

        const contactSection = await driver.findElement(By.id('contact-section'));
        const isContactVisible = await contactLink.isDisplayed();
        assert.equal(isContactVisible, true, 'Contact section should be visible');

        //Success
        console.log("All test passed! Navigation Works Perfectly!")
    } catch (error) {
        console.log('\nTest Failed:', error.message);
        throw error; //Re-throws so I know the test fails
    } finally {
        if (driver) {
            console.log('\n Closing Browser...');
                await driver.quit();
                console.log('Browser closed')
        }
    }
}

//runs test
testNavigation();