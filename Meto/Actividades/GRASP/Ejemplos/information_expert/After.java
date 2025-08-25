package grasp.information_expert;

public class After {
    public static void main(String[] args) {
        Sale sale = new Sale();
        System.out.println("Cost of the Sale: " + calculateTotal(sale));
    }

    public static double calculateTotal(Sale sale) {
        double total = 0;
        for (Item item : sale.items) {
            total += item.price * item.quantity;
        }
        return total;
    }
}

class Sale {
    Item[] items = {
        new Item("Bread", 10, 2),
        new Item("Cheese", 20, 1)
    };
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
}