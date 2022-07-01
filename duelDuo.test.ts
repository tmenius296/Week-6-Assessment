
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays a div.id="choices" when clicked`', async () => {
    let draw = await driver.findElement(By.id('draw'))
    await draw.click()
    const displayed = await driver.findElement(By.id('draw'))
    expect(displayed).toBeTruthy()
}) 

test('Add to duo button displays the div with id "player-duo"', async () => {
    let draw = await driver.findElement(By.id('draw'))
    await draw.click()
    driver.sleep(3000)
    let button = await driver.findElement(By.className('bot-btn'))
    await button.click()
    driver.sleep(3000)
    let displayed = await driver.findElement(By.id('player-duo'))
    expect(displayed).toBeTruthy()
})