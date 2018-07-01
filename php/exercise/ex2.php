<?php 
  class Book {
  	var $price;
  	var $title;
  	var $year;

  	function setPrice($p) {
      $this->price = $p;
  	}
  	function getPrice() {
  		echo $this->price;
  	}
  }

 $book = new Book();
 $book->setPrice(100000);
 $book->getPrice();