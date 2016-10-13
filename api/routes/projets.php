<?

Flight::route('GET /projet/@projetId', function($projetId){

    // check admin
    checkToken();

    $projet = ORM::for_table('projets')
        ->where('id', $projetId)
        ->find_array();

    $msg = array(
        'msg' => 'ok',
        'projet' => $projet[0]
    );            

    Flight::json($msg);

});

Flight::route('GET /projets/@userId', function($userId){

    // check admin
    checkToken();

    $projets = ORM::for_table('projets')->find_array();

    $msg = array(
        'msg' => 'ok',
        'projets' => $projets
    );            

    Flight::json($msg);

});

Flight::route('POST /projets/ajouter', function(){

    devSleep();

    // check admin
    checkToken();

    $data = getJson();

    if ( !empty($data->titre)){
        
        $projet = ORM::for_table('projets')->create();
        $projet->titre = $data->titre;
        $projet->description = $data->description;
        $projet->save();

        $msg = array(
            'msg' => 'ok',
            'id' => $projet->id
        );
    
    } else {
        $msg = array(
            'msg' => 'error'
        );
    }

    Flight::json($msg);

});
