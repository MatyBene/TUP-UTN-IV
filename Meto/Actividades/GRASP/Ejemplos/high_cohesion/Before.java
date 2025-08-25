package grasp.high_cohesion;

public class Before {
    public static void main(String[] args) {
        System.out.println("Registering Vehicle...");
        registerVehicle(Brand.FORD);
    }

    public static void registerVehicle(Brand brand) {
        VehicleRegistration vehicleRegistration = new VehicleRegistration();
        String plate = vehicleRegistration.generateRandomPlate(7); 
        String engineNumber = vehicleRegistration.generateRandomVehicleEngineNumber();

        System.out.println("Generated Plate: " + plate);
        System.out.println("Generated Engine Number: " + engineNumber);

        int cataloguePrice = 1000;
        if (brand == Brand.CHEVROLET){
            cataloguePrice = 1200;
        } else if (brand == Brand.FORD) {
            cataloguePrice = 1500;
        } else if (brand == Brand.FIAT) {
            cataloguePrice = 800;
        } else if (brand == Brand.TOYOTA) {
            cataloguePrice = 2000;
        } else if (brand == Brand.HONDA) {
            cataloguePrice = 1800;
        }

        int tax = (int) (cataloguePrice * 0.1); // 10% tax

        if (brand == Brand.FORD || brand == Brand.CHEVROLET || brand == Brand.FIAT) {
            tax += 100; // Additional tax for Ford, Chevrolet, Fiat
        }

        int totalPrice = cataloguePrice + tax;
        System.out.println("Catalogue Price: $" + cataloguePrice);
        System.out.println("Tax: $" + tax);
        System.out.println("Total Price: $" + totalPrice);
        System.out.println("Vehicle registered successfully!");
    }
}


enum Brand {
    FORD, CHEVROLET, FIAT, TOYOTA, HONDA
}

class VehicleRegistration {
    public String generateRandomPlate(int lenght) {
        StringBuilder plate = new StringBuilder();
        for (int i = 0; i < lenght; i++) {
            plate.append((char) ('A' + (int) (Math.random() * 26)));
        }
        plate.append("-");
        for (int i = 0; i < 4; i++) {
            plate.append((int) (Math.random() * 10));
        }
        return plate.toString();
    }

    public String generateRandomVehicleEngineNumber() {
        StringBuilder engineNumber = new StringBuilder();
        for (int i = 0; i < 15; i++) {
            if (i < 5) {
                engineNumber.append((char) ('A' + (int) (Math.random() * 26)));
            } else {
                engineNumber.append((int) (Math.random() * 10));
            }
        }
        return engineNumber.toString();
    }
}