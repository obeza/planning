<?

Flight::route('GET /reservations/@format', function($format){

    $reserv = ORM::for_table('reservations')
        ->where('format', $format)
        ->find_array();

    $msg = array(
            'msg' => 'ok',
            'reservations' => $reserv
        );
    
    Flight::json($msg);

});

Flight::route('POST /reservation', function(){

    // check admin
    checkToken();

    $data = getJson();

    $check = ORM::for_table('reservations')
        ->where('format', $data->format)
        ->where_lte('start', $data->end)
        ->where_gte('end', $data->start)
        ->count();

    if ( $check>2 ){
        $msg = array('msg' => 'impossible' );
        Flight::json($msg);
        Flight::halt();
    }

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
            'msg' => 'ok',
            'id' => $reserv->id       
        );
    
    Flight::json($msg);

});