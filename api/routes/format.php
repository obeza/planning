<?

Flight::route('GET /formats', function(){
    
    $formats = ORM::for_table('formats')
        ->order_by_asc('titre')
        ->find_array();

    $msg = array(
            'msg' => 'ok',
            'formats' => $formats
    );

    Flight::json($msg);  

});

Flight::route('POST /format', function(){

    /// ajouter check token

    $data = getJson();

    $format = ORM::for_table('formats')->create();
    $format->titre = $data->titre;
    $format->save();

    $msg = array(
            'msg' => 'ok',
            'id' => $format->id
    );

    Flight::json($msg);


});

Flight::route('POST /format/modifier', function(){

    /// ajouter check token

    $data = getJson();

    $format = ORM::for_table('formats')
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