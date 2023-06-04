from flask import Flask
from getProducts import scrape_amazon_data

app = Flask(__name__)


@app.route("/")
def index():
    return "Welcome to ShoppingGenie!"


@app.route("/<product>")
def filter_products(product):

    amazon_data = scrape_amazon_data("https://www.amazon.in/s?k=", product)
    
    filtered_products = list(filter(lambda product: product['price'] <= 200 and product['ratings'] >= 4.0 and product['discount'] > 10, products))

    
    return amazon_data


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
