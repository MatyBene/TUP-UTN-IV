package grasp.low_coupling;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Before {
    public static void main(String[] args) {
        ProductDescription mouse = new ProductDescription(2000, "Wireless Mouse");
        ProductDescription monitor = new ProductDescription(15000, "4K Monitor");

        Sale sale = new Sale();
        sale.addLineItem(mouse, 1);
        sale.addLineItem(monitor, 2);
        int credit_total = sale.applyDiscountByPaymentMethod("credit");
        int cash_total = sale.applyDiscountByPaymentMethod("cash");
        System.out.println("Total discount credit card: " + credit_total);
        System.out.println("Total cash: " + cash_total);
    }
}

class ProductDescription {
    int price;
    String description;

    ProductDescription(int price, String description) {
        this.price = price;
        this.description = description;
    }

    @Override
    public String toString() {
        return "ProductDescription{price=" + price + ", description='" + description + "'}";
    }
}

class SaleLineItem {
    ProductDescription product;
    int quantity;

    SaleLineItem(ProductDescription product, int quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "SaleLineItem{product=" + product + ", quantity=" + quantity + "}";
    }
}

class Sale {
    private List<SaleLineItem> items = new ArrayList<>();
    private LocalDateTime time = LocalDateTime.now();


    void addLineItem(ProductDescription product, int quantity) {
        items.add(new SaleLineItem(product, quantity));
    }

    public int calculateTotal() {
        int total = 0;
        for (SaleLineItem item : items) {
            total += item.product.price * item.quantity;
        }
        return total;
    }

    public int applyDiscountByPaymentMethod(String paymentMethod) {
        int total = calculateTotal();
        if ("credit".equalsIgnoreCase(paymentMethod)) {
            return (int) (total * 0.9); // 10% discount for credit payments
        } else if ("cash".equalsIgnoreCase(paymentMethod)) {
            return (int) (total * 0.95); // 5% discount for cash payments
        }
        return total; // No discount for other methods
    }

    @Override
    public String toString() {
        return "Sale{items=" + items + ", time=" + time + "}";
    }
}