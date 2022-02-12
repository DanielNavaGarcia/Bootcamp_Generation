package pruebasunitarias;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class CalculatorTest {

	private final Calculator calculator = new Calculator();
	
	@Test
	void add() {
		assertEquals(8, calculator.addNumbers(5,3));
	}
	@Test
	void subtract() {
		assertEquals(8, calculator.subtractNumbers(10,2));
	}
	@Test
	void divide() {
		assertEquals(8, calculator.divideNumbers(16,2));
	}
	@Test
	void multiply() {
		assertEquals(8, calculator.multiplyNumbers(4,2));
	}

}
