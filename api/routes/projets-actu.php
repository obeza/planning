<?

Flight::route('GET /projet/actu/@projetId', function($projetId){

    checkToken();

    $actus = ORM::for_table('projets-actualite')
        ->where('projetId', $projetId)
        ->order_by_asc('id')
        ->find_array();

    $msg = array(
            'msg' => 'ok',
            'actualite' => $actus
    );

    Flight::json($msg);  

});
