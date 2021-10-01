# MyStore

MyStore is Angular application created for a Udacity project, that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.

## Getting Started

To use these files, simply merge the folders into the root directory of your scaffolded Angular application.

## Project Instructions

### Setup

Make sure to have Angular setup on your machine. You can find setup instructions on their website here. [https://angular.io](https://angular.io)

### yarn install

Installs required dependencies.

### ng serve

Runs the app and can be viewed at [http://localhost:4200](http://localhost:4200)

### ng test

**Tests are not currently setup.**
Spec files are created for components, but they are not fleshed out, so tests currently don't 'test' anything.

### ng build

Builds the app for production to the `dist` folder.

### ng watch

Runs the app and can be viewed at [http://localhost:4200](http://localhost:4200)

#### Project Structure

- **Product list** page, which displays the available products for the user to choose and add to their cart (in various quantities)
- **Product details** page, which displays more information about any particular product
- **Shopping cart**, which includes the products that the user has added to their cart
- **Checkout form**, which collects information about the user (e.g., name, address, payment details, etc.)
- **Order confirmation page**, which shows the outcome after the user completes the checkout process (i.e., submits the checkout form)

- `data.json`. Project fetches product information from this included file to populate the store.

![MyStore shopping flow](shoppingflow.gif)

## License

[License](LICENSE.txt)
