<?php
require 'libs/flight/Flight.php';
require 'libs/idiorm.php';

require 'configDB.php';
require ('autoloader.php');

header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS');


// respond to preflights
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  // return only the headers and not the content
  // only allow CORS if we're doing a GET - i.e. no saving for now.
  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']) &&
      $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] == 'GET') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: X-Requested-With, Authorization, Content-Type');
  }
  exit;
}

function getJson(){
    $data = json_decode(file_get_contents("php://input"));
    return $data;
}

function createRandomPassword() { 

    $chars = "abcdefghijkmnopqrstuvwxyz023456789"; 
    srand((double)microtime()*1000000); 
    $i = 0; 
    $pass = '' ; 

    while ($i <= 32) { 
        $num = rand() % 33; 
        $tmp = substr($chars, $num, 1); 
        $pass = $pass . $tmp; 
        $i++; 
    } 

    return $pass; 

} 

function algo(){
    return 'tiger192,3';
}

Flight::start();

?>
