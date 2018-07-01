<?php 
abstract class AbstractClass {
  abstract protected function getValue();
  abstract protected function prefixValue($pre);

  //Common method
  public function printOut() {
  	print $this->getValue() . "\n";
  }
}

class ConcreteClass1 extends AbstractClass {
	protected function getValue() {
		return 'ConcreteClass1! ';
	}
	public function prefixValue($pre) {
		return "{$pre}ConcreteClass1";
	}
}

class ConcreteClass2 extends AbstractClass {
	public function getValue() {
		return 'ConcreteClass2!';
	}
	public function prefixValue($pre) {
		return "ConcreteClass2{$pre}";
	}
}

$obj = new ConcreteClass1();
$obj->printOut();
echo $obj->prefixValue("_FOO ") . "\n";

$obj = new ConcreteClass2();
$obj->printOut();
echo $obj->prefixValue("_FOO2 ") . "\n";