<!DOCTYPE html>
<html>
<head>
	<title>OOp</title>
</head>
<body>
  <?php
    class MyClass {
    	public $pro1 = 'hello';
    	
        function __construct() {
        	echo __CLASS__,"<br>";
        }
        function __destruct() {
            echo 'destroy "',__CLASS__,'"<br>';	
        }
        function __toString() {
        	echo 'using this toString method ';
        	return $this->get();
        }

    	public function set($pro1) {
    		$this->pro1 = $pro1;
    	}
    	public function get () {
    		return $this->pro1 . '<br />';
    	}
    }

    // $obj = new MyClass;
    // echo $obj->get();

    // echo $obj;
    // $obj->set('world is real');
    // echo $obj->get();

    // unset($obj);
    // echo 'End of files!<br><br>';

    //Inheritance
    class AnotherClass extends MyClass {
    	//overwriting and preversing Original Method
    	public function __construct() {
    		parent::__construct();
    		echo 'this is "',__CLASS__,'"<br>';
    	}
    	public function newMethod() {
    		echo 'new method of ',__CLASS__,'<br>';
    	}
    }

    $obj = new AnotherClass;
    $obj->newMethod();
    $obj->set('ahihi');
    echo $obj->get();
  ?>
</body>
</html>