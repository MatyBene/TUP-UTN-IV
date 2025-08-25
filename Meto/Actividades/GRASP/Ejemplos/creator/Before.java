package grasp.creator;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Before {
    public static void main(String[] args) {
        ProductDescription headset = new ProductDescription(5000, "Gaming headset");
        ProductDescription keyboard = new ProductDescription(7500, "Mechanical gaming keyboard");

        SaleLineItem row1 = new SaleLineItem(headset, 2);
        SaleLineItem row2 = new SaleLineItem(keyboard, 3);

        Sale sale = new Sale();
        sale.addLineItem(row1);
        sale.addLineItem(row2);

        System.out.println(sale);
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
    List<SaleLineItem> items = new ArrayList<>();
    LocalDateTime time = LocalDateTime.now();

    void addLineItem(SaleLineItem item) {
        items.add(item);
    }

    @Override
    public String toString() {
        return "Sale{items=" + items + ", time=" + time + "}";
    }
}