<?

Flight::route('GET /projet/discution/@projetId', function($projetId){

    checkToken();

    $discus = ORM::for_table('projets-discution')
        ->where('projetId', $projetId)
        ->find_array();

     $msg = array(
        'msg' => 'ok',
        'discutions' => $discus
    );            

    Flight::json($msg);   

});

Flight::route('POST /projet/discution/@projetId', function($projetId){

    checkToken();

    $data = getJson();

    $discu = ORM::for_table('projets-discution')->create();
    $discu->projetId = $projetId;
    $discu->texte = $data->texte;
    $discu->user = $data->user;
    $discu->save();

    $actu = ORM::for_table('projets-actualite')->create();
    $actu->titre = $data->user." a posté un message dans la discution.";
    $actu->projetId = $projetId;
    $actu->save();

    $msg = array(
        'msg' => 'ok',
        'id'=> $discu->id
    );            

    Flight::json($msg);
});