'''
    Adarsh Anand
    Bot that plays Cookie Clicker and upgrdes itself
    https: // orteil.dashnet.org/cookieclicker/
'''

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
import time

driver = webdriver.Chrome()
driver.maximize_window()
url = "https: // orteil.dashnet.org/cookieclicker/"
driver.get(url)

driver.implicitly_wait(10)
cookie = driver.find_element_by_id("bigCookie")
cookie_count = driver.find_element_by_id("cookies")

# upgrade bigger ones first
items =[driver.find_element_by_id("productPrice" + str(i)) for i in range(1,-1,-1)]

# Defining actionChain to perform a set of actions repeatedly
action = ActionChains(driver)
action.click(cookie)

for i in range(5000):
    action.perform() # perform the action
    count = int(cookie_count.text.split(" ")[0]) # get the current cookie count
    for item in items:
        if int(item.text) <= count:
            upgrade_action = ActionChains(driver) # create a new action chain
            upgrade_action.move_to_element(item) # move cursor to the item
            upgrade_action.click()
            upgrade_action.perform()
