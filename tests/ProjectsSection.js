import { Builder, Browser, By, until } from 'selenium-webdriver';
import assert from 'assert';

async function testProjectsSection() {
    console.log('Starting Test: Projects Section')
    let driver;


    try {
        console.log('Opening Browser');
        driver = await new Builder()
            .forBrowser(Browser.CHROME)
            .build();

        await driver.manage().setTimeouts( {implicit: 5000} );

        //Navigating to site
        await driver.get('http://localhost:5173/');
        await driver.sleep(1000);
        console.log('Page Loaded');

        //Project Section - New Concept (scroll to element) - making sure section is visible on screen before testing
        console.log('Scrolling to Projects Section');
        const projectsSection = await driver.findElement(By.id('projects-section'));
        await driver.executeScript('arguments[0].scrollIntoView(true);', projectsSection);
        await driver.sleep(2000);

        console.log('✓ Scrolled to Projects section');

        // DEBUG: Take a screenshot or print the HTML
        const pageSource = await driver.getPageSource();
        console.log('DEBUG: Checking if project-card class exists in HTML...');
        if (pageSource.includes('project-card')) {
        console.log('  Found "project-card" in page HTML');
        } else {
        console.log('  "project-card" NOT found in page HTML!');
        console.log('  Your projects might not be loading!');
        }

        //check section heading
        console.log('Checking section heading');
        const heading = await driver.findElement(By.css('#projects-section h2'));
        const headingText = await heading.getText();
        assert.equal(headingText, 'My Projects', 'Heading should say My Projects');
        console.log('Section heading is correct');

        //Finding all project cards - New concept
        console.log('\n Waiting for project cards to appear...');

        // Wait until at least one project card appears (up to 10 seconds)
        await driver.wait(
        until.elementLocated(By.css('.project-card')),
        10000,
        'Timed out waiting for project cards to load'
        );

        console.log(' Project cards loaded!');

        // Now find all of them
        const projectCards = await driver.findElements(By.css('.project-card'));
        console.log(`  Found ${projectCards.length} project cards`);

        assert.ok(projectCards.length > 0, 'Should have at least 1 project card');
        console.log(' Project cards exist');


        //Loop through each card - New Concept
        console.log('Checking each card..')

        for (let i = 0; i < projectCards.length; i++) {
            const card = projectCards[i];
            console.log(`\n Checking project ${i + 1} ...`)
            

            //Find Title within THIS specific card
            const titleElement = await card.findElement(By.css('.project-title'));
            const titleText = await titleElement.getText();
            console.log(` Title: ${titleText}`);

            assert.ok(titleText.length > 0, ' Project Title should not be empty');

            //Find Github link within this specific card
            const href = await card.getAttribute('href');
            console.log(` GitHub Link: ${href}` );

            //Check It's a Github link
            assert.ok(href.includes('github.com'), 'Should be link to GitHub');

            await driver.sleep(1000);
        }

        console.log('All project cards checked');
        console.log('All test passed! Projects section works correctly');


    } catch (error){
        console.log('Test Failed:', error.message)
        throw error;
    } finally {
        if (driver) {
            console.log('Closing Browser');
            await driver.quit();
            console.log('Browser Closed');
        }
    }
}

testProjectsSection();