package grasp.information_expert;

public class Before {
    public static void main(String[] args) {
        Sale sale = new Sale();
        System.out.println("Cost of the Sale: " + sale.calculateTotal());
    }


}

class Sale {
    Item[] items = {
        new Item("Bread", 10, 2),
        new Item("Cheese", 20, 1)
    };

    public double calculateTotal() {
        double total = 0;
        for (Item item : items) {
            total += item.getSubtotal();
        }
        return total;
    }
}

class Item {
    String name;
    double price;
    int quantity;

    Item(String name, double price, int quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public double getSubtotal() {
        return price * quantity;
    }
}
