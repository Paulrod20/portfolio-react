import {Builder, Browser, By} from 'selenium-webdriver';
import assert from 'assert';

/*
    Testing Social Media Links 
    his Test verifies that all social media links are present and have correct URLs
*/

async function testSocialLinks() {
    console.log("Starting TestL Social Media Links");
    let driver;

    try {
        //Open Chrome
        console.log("Opening Chrome")
        driver = await new Builder()
            .forBrowser(Browser.CHROME)
            .build();

        await driver.manage().setTimeouts( {implicit: 5000 });

        //Navigate to website
        await driver.get('http://localhost:5173/');
        await driver.sleep(2000);

        //Find multple elements - NEW CONCEPT
        const socialLinks = await driver.findElements(By.css('.social-links a'));

        //Checking how many social links are found
        console.log(`Found ${socialLinks.length} social media links`);
        assert.equal(socialLinks.length, 4, 'Should have 4 social links');
        await driver.sleep(1000);
        console.log('Correct number of social links');

        //Need to get Attributes - NEW CONCEPT
        console.log('Verifying Link URLS...');

        //Instagram
        const instagramLink = socialLinks[0];
        const instagramHref = await instagramLink.getAttribute('href');
        assert.ok(instagramHref.includes('paulrodriguez20'), 'Should to correct instagram page')
        console.log('Instagram link found:', instagramHref);
        await driver.sleep(1000);

        //GitHub
        const githubLink = socialLinks[1];
        const githubHref = await githubLink.getAttribute('href');
        assert.ok(githubHref.includes('Paulrod20'), 'Should to Paulrod20 github page');
        console.log('GitHub link found:', githubHref);
        await driver.sleep(1000);

        //Facebook
        const facebookLink = socialLinks[2];
        const facebookHref = await facebookLink.getAttribute('href');
        assert.ok(facebookHref.includes('pauly.rodriguez.923'), 'Should to correct facebook page')
        console.log('Facebook link found:', facebookHref);
        await driver.sleep(1000);

        //LinkedIn link
        const linkedinLink = socialLinks[3];
        const linkedinHref = await linkedinLink.getAttribute('href');
        assert.ok(linkedinHref.includes('paul-rodriguez-452640319'), 'Should link to linkedin page');
        console.log('LinkedIn link found:', linkedinHref);
        await driver.sleep(1000);

        //Checking if links open in new tabs - NEW CONCEPT
        console.log('Checking if links open in new tabs');
        const target = await instagramLink.getAttribute('target');
        assert.equal(target, '_blank', 'Social links should open in new tabs');
        console.log('Links properly set to open in new tabs');
        await driver.sleep(2000);

        //Success
        console.log('Success! All tests passed! Social media links working properly!');
    } catch (error) {
        console.log('Test Failed;', error.message);
        throw error;
    } finally {
        if (driver) {
            console.log('Closing Browser');
            await driver.sleep(1000);
            await driver.quit();
            console.log('Browser Closed');
        }
    }
}

testSocialLinks();

