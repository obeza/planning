<?

Flight::route('GET /reservations', function(){

    $reserv = ORM::for_table('reservations')
        ->find_array();

    $msg = array(
            'msg' => 'ok',
            'reservations' => $reserv
        );
    
    Flight::json($msg);

});

Flight::route('POST /reservation', function(){

    $data = getJson();

    $reserv = ORM::for_table('reservations')
        ->create();

    $reserv->title = $data->title;
    $reserv->start = $data->start;
    $reserv->end = $data->end;
    $reserv->statut = $data->statut;
    $reserv->compte = $data->compte;
    $reserv->siteweb = $data->siteweb;
    $reserv->format = $data->format;
    $reserv->save();

    $msg = array(
            'msg' => 'ok'         
        );
    
    Flight::json($msg);

});