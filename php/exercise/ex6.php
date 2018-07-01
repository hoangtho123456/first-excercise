<?php 
abstract class parents {
  abstract public function func1();
  abstract protected function func2();
}

class child extends parents {
	public function func1 () {
		echo 'func 1';
	}
	protected function func2() {
		echo 'func2';
	}
}

$child = new child();
$child->func1();
