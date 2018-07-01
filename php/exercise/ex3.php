<?php 
  /**
   * 
   */
  class Book
  {
  	var $price;
  	var $title;
  	var $year;
  	function __construct($price, $title, $year)
  	{
  		# code...
    	$this->price = $price;
    	$this->title = $title;
    	$this->year = $year;
  	}

  	function setPrice($p) {
  		$this->price = $p;
  	}
  	function getPrice() {
  		echo $this->price;
  	}
  }

  $book = new Book(200, 'book', 2012);
  $book->getPrice();
 ?>