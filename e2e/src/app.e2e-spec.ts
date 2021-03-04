import { browser, element, by, ExpectedConditions as EC } from 'protractor';

const numDashboardTabs = 5;
const numCrises = 4;
const numTechniques = 10;

describe('Router', () => {
  beforeAll(() => browser.get(''));

  function getPageStruct() {
    const hrefEles = element.all(by.css('app-root > nav a'));
    const flashcardDetail = element
      .all(
        by.css(
          'app-root > div > app-flashcard-deck > app-flashcard-list > app-flashcard-detail > div'
        )
      )
      .first();
    const techniqueDetail = element(
      by.css('app-root > div > app-technique-detail')
    );

    return {
      hrefs: hrefEles,
      activeHref: element(by.css('app-root > nav a.active')),

      flashcardHref: hrefEles.get(0),
      flashcardList: element.all(
        by.css('app-root > div > app-flashcard-deck > app-flashcard-list li')
      ),
      flashcardDetail,
      flashcardDetailTitle: flashcardDetail.element(by.xpath('*[1]')),

      techniquesHref: hrefEles.get(1),
      techniquesList: element.all(
        by.css('app-root > div > app-technique-list li')
      ),
      techniqueDetail,
      techniqueDetailTitle: techniqueDetail.element(by.xpath('*[2]')),

      adminHref: hrefEles.get(2),
      adminPage: element(by.css('app-root > div > app-admin')),
      adminPreloadList: element.all(
        by.css('app-root > div > app-admin > app-admin-dashboard > ul > li')
      ),

      loginHref: hrefEles.get(3),
      loginButton: element.all(
        by.css('app-root > div > app-login > p > button')
      ),

      contactHref: hrefEles.get(4),
      contactCancelButton: element.all(by.buttonText('Cancel')),

      primaryOutlet: element.all(by.css('app-root > div > app-technique-list')),
      secondaryOutlet: element.all(by.css('app-root > app-compose-message')),
    };
  }

  it('has expected dashboard tabs', async () => {
    const page = getPageStruct();
    expect(await page.hrefs.count()).toEqual(
      numDashboardTabs,
      'dashboard tab count'
    );
    expect(await page.flashcardHref.getText()).toEqual('Flashcard Deck');
    expect(await page.techniquesHref.getText()).toEqual('Techniques');
    expect(await page.adminHref.getText()).toEqual('Admin');
    expect(await page.loginHref.getText()).toEqual('Login');
    expect(await page.contactHref.getText()).toEqual('Contact');
  });

  it('has techniques selected as opening tab', async () => {
    const page = getPageStruct();
    expect(await page.activeHref.getText()).toEqual('Techniques');
  });

  it('has crises center items', async () => {
    const page = getPageStruct();
    await page.flashcardHref.click();
    expect(await page.activeHref.getText()).toEqual('Flashcard Deck');
    expect(await page.flashcardList.count()).toBe(
      numCrises,
      'flashcard list count'
    );
  });

  it('has technique items', async () => {
    const page = getPageStruct();
    await page.techniquesHref.click();
    expect(await page.activeHref.getText()).toEqual('Techniques');
    expect(await page.techniquesList.count()).toBe(
      numTechniques,
      'technique list count'
    );
  });

  it('toggles views', async () => {
    const page = getPageStruct();
    await page.flashcardHref.click();
    expect(await page.activeHref.getText()).toEqual('Flashcard Deck');
    expect(await page.flashcardList.count()).toBe(
      numCrises,
      'flashcard list count'
    );
    await page.techniquesHref.click();
    expect(await page.activeHref.getText()).toEqual('Techniques');
    expect(await page.techniquesList.count()).toBe(
      numTechniques,
      'technique list count'
    );
  });

  it('saves changed flashcard details', async () => {
    const page = getPageStruct();
    await page.flashcardHref.click();
    await flashcardDeckEdit(2, true);
  });

  // TODO: Figure out why this test is failing now
  xit('can cancel changed flashcard details', async () => {
    const page = getPageStruct();
    await page.flashcardHref.click();
    await flashcardDeckEdit(3, false);
  });

  it('saves changed technique details', async () => {
    const page = getPageStruct();
    await page.techniquesHref.click();
    await browser.sleep(600);
    const techniqueEle = page.techniquesList.get(4);
    const text = await techniqueEle.getText();
    expect(text.length).toBeGreaterThan(0, 'technique item text length');
    // remove leading id from text
    const techniqueText = text.substr(text.indexOf(' ')).trim();

    await techniqueEle.click();
    await browser.sleep(600);
    expect(await page.techniquesList.count()).toBe(0, 'technique list count');
    expect(await page.techniqueDetail.isPresent()).toBe(
      true,
      'technique detail'
    );
    expect(await page.techniqueDetailTitle.getText()).toContain(techniqueText);
    const inputEle = page.techniqueDetail.element(by.css('input'));
    await inputEle.sendKeys('-foo');
    expect(await page.techniqueDetailTitle.getText()).toContain(
      techniqueText + '-foo'
    );

    const buttonEle = page.techniqueDetail.element(by.css('button'));
    await buttonEle.click();
    await browser.sleep(600);
    expect(await techniqueEle.getText()).toContain(techniqueText + '-foo');
  });

  it('sees preloaded modules', async () => {
    const page = getPageStruct();
    await page.loginHref.click();
    await page.loginButton.click();
    const list = page.adminPreloadList;
    expect(await list.count()).toBe(1, 'preloaded module');
    expect(await list.first().getText()).toBe(
      'flashcard-deck',
      'first preloaded module'
    );
  });

  it('sees the secondary route', async () => {
    const page = getPageStruct();
    await page.techniquesHref.click();
    await page.contactHref.click();
    expect(await page.primaryOutlet.count()).toBe(1, 'primary outlet');
    expect(await page.secondaryOutlet.count()).toBe(1, 'secondary outlet');
  });

  it('should redirect with secondary route', async () => {
    const page = getPageStruct();

    // go to login page and login
    await browser.get('');
    await page.loginHref.click();
    await page.loginButton.click();

    // open secondary outlet
    await page.contactHref.click();

    // go to login page and logout
    await page.loginHref.click();
    await page.loginButton.click();

    // attempt to go to admin page, redirects to login with secondary outlet open
    await page.adminHref.click();

    // login, get redirected back to admin with outlet still open
    await page.loginButton.click();

    expect(await page.adminPage.isDisplayed()).toBeTruthy();
    expect(await page.secondaryOutlet.count()).toBeTruthy();
  });

  async function flashcardDeckEdit(index: number, save: boolean) {
    const page = getPageStruct();
    await page.flashcardHref.click();
    let flashcardEle = page.flashcardList.get(index);
    const text = await flashcardEle.getText();
    expect(text.length).toBeGreaterThan(0, 'flashcard item text length');
    // remove leading id from text
    const flashcardText = text.substr(text.indexOf(' ')).trim();

    await flashcardEle.click();
    expect(await page.flashcardDetail.isPresent()).toBe(
      true,
      'flashcard detail present'
    );
    expect(await page.flashcardDetailTitle.getText()).toContain(flashcardText);
    const inputEle = page.flashcardDetail.element(by.css('input'));
    await inputEle.sendKeys('-foo');

    const buttonEle = page.flashcardDetail.element(
      by.buttonText(save ? 'Save' : 'Cancel')
    );
    await buttonEle.click();
    flashcardEle = page.flashcardList.get(index);
    if (save) {
      expect(await flashcardEle.getText()).toContain(flashcardText + '-foo');
    } else {
      await browser.wait(EC.alertIsPresent(), 4000);
      await browser.switchTo().alert().accept();
      expect(await flashcardEle.getText()).toContain(flashcardText);
    }
  }
});
