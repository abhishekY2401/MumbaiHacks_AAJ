# best reviews, ratings, comments, most sold, best seller across multiple platforms

# scraping of products from different platforms
# platforms - amazon, flipkart
from flask import Flask, jsonify
from bs4 import BeautifulSoup
import requests
import json


def scrape_amazon_data(site, product):
    json_data = []
    url = site + product

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, "html.parser")

        elements = soup.find_all(
            'div', class_='s-image-padding')
        product_data = soup.find_all(
            'div', class_='a-section a-spacing-base a-text-center')

        for element in elements:
            link = {'link': element.find('a').get('href')}
            json_data.append(link)

        for products in json_data:

            item_url = products['link']

            # Send GET request to the article URL
            res = requests.get('https://www.amazon.in' + item_url)
            if res.status_code == 200:
                item_html = res.text

                # Parse the HTML content of the article page
                sup = BeautifulSoup(item_html, 'html.parser')

                # extract `title`
                title = sup.find(
                    'span', id="productTitle").get_text(strip=True)

                # extract no of reviews
                no_of_ratings = sup.find(
                    'span', id='acrCustomerReviewText').get_text()

                # extract image url
                image = sup.find('img', id='landingImage').get('src')

                price = sup.find(
                    'span', class_='a-price-whole').get_text()
                # discount = sup.find(
                #     'span', class_='a-size-large a-color-price savingPriceOverride aok-align-center reinventPriceSavingsPercentageMargin savingsPercentage').get_text()
                ratings = sup.find(
                    'span', class_='a-size-base a-color-base').get_text()

                products['title'] = title
                products['no_of_ratings'] = no_of_ratings
                products['img_url'] = image

                products['price'] = price
                # products['discount'] = discount
                products['ratings'] = ratings

    key_to_remove = 'link'
    new_list = list(filter(lambda item: item.get(
        'key') != key_to_remove and len(item) != 1, json_data))
    print(new_list)

    return jsonify({
        "data": new_list
    })
