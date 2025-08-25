package grasp.high_cohesion;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;


public class After {
    public static void registerVehicle(Brand brand) {
        VehicleRegistry registry = new VehicleRegistry();
        Vehicle vehicle = registry.createVehicle(brand);
        vehicle.print();
    }

    public static void main(String[] args) {
        registerVehicle(Brand.VOLKSWAGEN_ID3);
    }
}

enum Brand {
    VOLKSWAGEN_ID3,
    BMW_5,
    TESLA_MODEL_3,
    TESLA_MODEL_5
}

class VehicleInfo {
    Brand brand;
    boolean electric;
    int cataloguePrice;

    public VehicleInfo(Brand brand, boolean electric, int cataloguePrice) {
        this.brand = brand;
        this.electric = electric;
        this.cataloguePrice = cataloguePrice;
    }

    public double getTax() {
        double taxPercentage = electric ? 0.02 : 0.05;
        return taxPercentage * cataloguePrice;
    }

    public void print() {
        System.out.println("Brand: " + brand);
        System.out.println("Payable tax: " + getTax());
    }
}

class Vehicle {
    String id;
    String licensePlate;
    VehicleInfo info;

    public Vehicle(String id, String licensePlate, VehicleInfo info) {
        this.id = id;
        this.licensePlate = licensePlate;
        this.info = info;
    }

    public void print() {
        System.out.println("Id: " + id);
        System.out.println("License plate: " + licensePlate);
        info.print();
    }
}

class VehicleRegistry {
    private Map<Brand, VehicleInfo> vehicleInfo = new HashMap<>();
    private Random random = new Random();

    public VehicleRegistry() {
        addVehicleInfo(Brand.TESLA_MODEL_3, true, 60000);
        addVehicleInfo(Brand.VOLKSWAGEN_ID3, true, 35000);
        addVehicleInfo(Brand.BMW_5, false, 45000);
        addVehicleInfo(Brand.TESLA_MODEL_5, true, 75000);
    }

    public void addVehicleInfo(Brand brand, boolean electric, int cataloguePrice) {
        vehicleInfo.put(brand, new VehicleInfo(brand, electric, cataloguePrice));
    }

    public String generateVehicleId(int length) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < length; i++) {
            sb.append((char) ('A' + random.nextInt(26)));
        }
        return sb.toString();
    }

    public String generateVehicleLicense(String id) {
        String firstTwo = id.substring(0, 2);
        String middleTwo = String.format("%02d", random.nextInt(100));
        String lastTwo = "";
        for (int i = 0; i < 2; i++) {
            lastTwo += (char) ('A' + random.nextInt(26));
        }
        return firstTwo + "-" + middleTwo + "-" + lastTwo;
    }

    public Vehicle createVehicle(Brand brand) {
        String vehicleId = generateVehicleId(12);
        String licensePlate = generateVehicleLicense(vehicleId);
        VehicleInfo info = vehicleInfo.get(brand);
        return new Vehicle(vehicleId, licensePlate, info);
    }
}
