<?php
class Animal {
	public $legs = 2;
	public $color = 'White';
	protected $language ='';
	private $height = 120;

	public function getLegs() {
		echo $this->legs;
	}
	protected function getColor() {

	}
	public function sleep() {

	}
}

class Person extends Animal {
	public $nationality = 'Englands';
	public $job = 'Programmer';
    protected $language = 'English';

	public function travel() {
		echo 'Going travel<br>';
	}
	public function doing() {
		echo 'People has ' . $this->legs . ' legs. Speak ' . $this->language;
	}
}

$person = new Person();
$person->getLegs();
$person->travel();
$person->doing();
?>
