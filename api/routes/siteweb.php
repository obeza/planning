<?

Flight::route('GET /siteweb', function(){
    
    $siteweb = ORM::for_table('siteweb')
        ->order_by_asc('titre')
        ->find_array();

    $msg = array(
            'msg' => 'ok',
            'siteweb' => $siteweb
    );

    Flight::json($msg);  

});



Flight::route('POST /siteweb', function(){

    $data = getJson();

    $siteweb = ORM::for_table('siteweb')->create();
    $siteweb->titre = $data->titre;
    $siteweb->save();

    $msg = array(
            'msg' => 'ok',
            'id' => $siteweb->id
    );

    Flight::json($msg);


});

Flight::route('POST /siteweb/modifier', function(){

    /// ajouter check token

    $data = getJson();

    $format = ORM::for_table('siteweb')
        ->where('id', $data->id)
        ->find_one();

    $format->titre = $data->titre;
    $format->save();

    $msg = array(
            'msg' => 'ok',
            'id' => $format->id
    );

    Flight::json($msg);


});