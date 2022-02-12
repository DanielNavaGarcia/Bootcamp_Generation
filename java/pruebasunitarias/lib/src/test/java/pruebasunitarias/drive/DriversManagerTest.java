package pruebasunitarias.drive;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class DriversManagerTest {

	private DriversManager driverManager = new DriversManager();

	@Test
	void isAddPassenger() {

		Passenger passenger1 = new Passenger("Daniel", "2");
		driverManager.addPassenger(passenger1);
		assertEquals(passenger1, driverManager.getPassenger("2"));
	}
	@Test
	void isAddDriver() {

		Driver driver1 = new Driver("sdasdasd", "asdasd", 2);
		driverManager.addDriver(driver1);
		assertEquals(driver1, driverManager.getDriver("asdasd"));
	}

}
