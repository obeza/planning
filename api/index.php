<?php

require 'libs/flight/Flight.php';
require 'libs/idiorm.php';

require 'configDB.php';
require ('autoloader.php');

function devStatut(){
    // retourner true si on est en dev;
    return true;
}

if ( devStatut() ){
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
}

function getJson(){
    $data = json_decode(file_get_contents("php://input"));
    return $data;
}

function createRandomPassword() { 

    $chars = "abcdefghijkmnopqrstuvwxyz0123456789"; 
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

function devSleep(){
    if (devStatut())
        sleep(1);
    return;
}

function checkToken(){

    $headers = apache_request_headers();

    if (array_key_exists("authorization", $headers)) {

        $token = $headers['authorization'];

        $check = ORM::for_table('users')
            ->where('token', $token)
            ->find_one();
        
        if (!empty($check))
            return;
    }

    Flight::halt(401);
}

Flight::start();

?>
