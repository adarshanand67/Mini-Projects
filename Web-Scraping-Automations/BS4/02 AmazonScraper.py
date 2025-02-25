'''
    Adarsh Anand 
    Scraping data from Amazon.in to get the product details
    Just Enter your ASIN 10 digit number
'''

from bs4 import BeautifulSoup
import random
import requests
from requests import get
import re
import csv
from urllib.request import urlopen
from IPython.display import Image

headers = {
    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv: 94.0) Gecko/20100101 Firefox/94.0"
}

# Scraping a product from Amazon.in

asin = input("Enter the ASIN Number: ")
if(len(asin) != 10):
    print("Please enter the ASIN number of 10 digits")
    exit()
    
url = "https://www.amazon.in/dp/" + asin + "/"  # General format of the url
# Getting the content of the url
content = requests.get(url, headers=headers).text
soup = BeautifulSoup(urlopen(url), "html.parser")
# print(content)

image = soup.find("img", id="landingImage").get("src")
# show image in terminal
Image(url=image, embed=True)

# name
try:
    product_name = soup.find("span", id="productTitle").text.strip()
    print("Name : " + product_name)
except:
    pass

# price
try:
    price = soup.find("span", id="priceblock_ourprice").text.strip()
    print("Price : " + price)
except:
   pass

# rating
try:
    rating = soup.find("span", id="acrCustomerReviewText").text
    print("Rating : " + rating)
except:
    pass

# asin
print("ASIN : " + asin)

# category
category = soup.find(
    "div", id="wayfinding-breadcrumbs_feature_div").text.split("›")
print("Category :", end=" ")
for i in range(len(category)-1):
    print(category[i].strip(), end=" > ")
print(category[-1].strip())

# delivery
try:
    delivery = soup.find("div", id="ddmDeliveryMessage").b.text.strip()
    print("Delivery : " + delivery)
except:
    pass

# payment
try:
    payment = soup.find(
        class_="a-section a-spacing-none icon-content").a.text.strip()
    print("Warranty : " + payment)
except:
    pass


# stock
try:
    stock = soup.find("div", id="availability").span.text.strip()
    print("Stock : " + stock[:-1])
except:
    pass

# seller
try:
    seller = soup.find("div", id="merchant-info").text.strip()
    print("Seller : " + seller)
except:
    pass

# brand
try:
    brand = soup.find(class_="a-size-base prodDetAttrValue").text.strip()
    print("Brand : " + brand)
except:
    pass

# ratings
try:
    ratings = soup.find(
        class_="a-icon a-icon-star a-star-4-5").span.text.strip()
    print("Ratings : " + ratings)
except:
    pass


# description
description = soup.find(
    class_="a-unordered-list a-vertical a-spacing-mini").text
temp = description.split("\n")
description = ""
for i in range(len(temp)):
    description += temp[i].strip()
print("Description : " + description)
