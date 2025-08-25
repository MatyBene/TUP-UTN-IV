package grasp.low_coupling;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


interface PaymentMethod {
    int netPrice(int totalPrice);
}


class Cash implements PaymentMethod {
    private final double discountPerc;

    public Cash() {
        this.discountPerc = 0.1;
    }

    public Cash(double discountPerc) {
        this.discountPerc = discountPerc;
    }

    @Override
    public int netPrice(int totalPrice) {
        return (int) (totalPrice * (1 - discountPerc));
    }
}


class CreditCard implements PaymentMethod {
    private final String number;
    private final double feePerc;

    public CreditCard(String number) {
        this(number, 0.05);
    }

    public CreditCard(String number, double feePerc) {
        this.number = number;
        this.feePerc = feePerc;
    }

    @Override
    public int netPrice(int totalPrice) {
        return (int) (totalPrice * (1 + feePerc));
    }
}


class ProductDescription {
    int price;
    String description;

    public ProductDescription(int price, String description) {
        this.price = price;
        this.description = description;
    }
}


class SaleLineItem {
    ProductDescription product;
    int quantity;

    public SaleLineItem(ProductDescription product, int quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    public int totalLinePrice() {
        return quantity * product.price;
    }
}


class Sale {
    private List<SaleLineItem> items = new ArrayList<>();
    private LocalDateTime time = LocalDateTime.now();

    public void addLineItem(ProductDescription product, int quantity) {
        items.add(new SaleLineItem(product, quantity));
    }

    public int getTotalPrice() {
        int total = 0;
        for (SaleLineItem item : items) {
            total += item.totalLinePrice();
        }
        return total;
    }

    public int totalDiscountedPrice(PaymentMethod paymentMethod) {
        return paymentMethod.netPrice(getTotalPrice());
    }
}

// Ejemplo de uso
public class After {
    public static void main(String[] args) {
        ProductDescription headset = new ProductDescription(5000, "Logitech headset");
        ProductDescription keyboard = new ProductDescription(7500, "Reddragon gaming keyboard");

        SaleLineItem row1 = new SaleLineItem(headset, 2);
        System.out.printf("Price of line 1: $%.2f%n", row1.totalLinePrice() / 100.0);

        SaleLineItem row2 = new SaleLineItem(keyboard, 3);
        System.out.printf("Price of line 2: $%.2f%n", row2.totalLinePrice() / 100.0);

        Sale sale = new Sale();
        sale.addLineItem(headset, 2);
        sale.addLineItem(keyboard, 3);

        System.out.printf("Total price of sale: $%.2f%n", sale.getTotalPrice() / 100.0);

        PaymentMethod cc = new CreditCard("123456789");
        PaymentMethod cash = new Cash();
        System.out.printf("Final value paid in cc: $%.2f%n", sale.totalDiscountedPrice(cc) / 100.0);
        System.out.printf("Final value paid in cash: $%.2f%n", sale.totalDiscountedPrice(cash) / 100.0);
    }
}