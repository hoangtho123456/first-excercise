<?php 
class Book {
	public $price;
	protected $title;
	private $year;
    static $color = 'Blue';

    public function setPrice($p) {
      $this->price = $p;
    }
    public function setTitle($title) {
      $this->title = $title;
    }
    public function setYear($year) {
      $this->year = $year;
    }

    function display() {
    	echo 'Price: ' . $this->price . '<br>';
    	echo 'Title: ' . $this->title . '<br>';
    	echo 'Year: ' . $this->year . '<br>';
    	echo 'Year: ' . self::$color . '<br>';
    }
}
$book  = new Book();
$book->price = 100000;
$book->setTitle('God');
$book->setYear(2018);
$book->display();
//Book::$color = 'green';
echo Book::$color;
