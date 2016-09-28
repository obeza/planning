<?
function favFunc ($n){
            if ($n == $comptes[$i]['id']){
                $comptes[$i]['favoris'] = 1;
            } else {
                $comptes[$i]['favoris'] = 0;
            }
            return;
}

Flight::route('GET /comptes/@userId', function( $userId ){

    // check oauth

    $comptes = ORM::for_table('comptes')
        ->find_array();

    $favoris = ORM::for_table('comptes-favoris')
        ->where('userId', $userId)
        ->find_array();
    
    if ( !empty($favoris))
        $favs = json_decode( $favoris[0]['favoris'] );


    for ($i = 0; $i<count($comptes); $i++) {

        if ( !empty($favoris)) {
            for ($sel = 0; $sel<count($favs); $sel++) {
                //echo $comptes[$i]['id']." ".$favs[$sel]." - ";
                if ( intval($comptes[$i]['id']) == intval($favs[$sel])){
                    $comptes[$i]['favoris'] = 1;
                }
            }
        }
        if ( !array_key_exists('favoris', $comptes[$i])){
            $comptes[$i]['favoris']=0;
        }

    };

    $msg = array(
            'msg' => 'ok',
            'comptes' => $comptes
        );

    Flight::json($msg);

});

// creer un compte pour un commercial
Flight::route('POST /compte', function(){

    // check oauth

    $data = getJson();

    // check si existe deja
    $compte = ORM::for_table('comptes')
            ->where('email', $data->email)
            ->find_one();
        
    if ( !empty($compte)){
        $msg = array('msg' => 'error');
        Flight::json($msg);
        Flight::stop();
    }

    // creer le compte
    $user = ORM::for_table('comptes')->create();
    $user->prenom = $data->prenom;
    $user->nom = $data->nom;
    $user->email = $data->email;
    $user->save();

    $msg = array( 'msg' => 'ok' );
    Flight::json($msg);


});

// lister les comptes favoris
Flight::route('GET /compte/favoris/@userId', function($userId){

    $favoris = ORM::for_table('comptes-favoris')
        ->where('userId', $userId)
        ->find_array();

    $favs = json_decode( $favoris[0]['favoris'] );
    $selectFavs = implode(',', array_map('intval', $favs));

    $comptes = ORM::for_table('comptes')
        ->raw_query('SELECT * FROM comptes WHERE id IN ('.$selectFavs.')')
        ->find_array();
    
    $msg = array(
            'msg' => 'ok',
            'comptes' => $comptes
        );

    Flight::json($msg);
    
});

// sauvegarder les comptes favoris
Flight::route('POST /compte/favoris', function(){

    $data = getJson();
    $msg = array('msg' => 'error');

    //check si exist deja
    $favoris = ORM::for_table('comptes-favoris')
        ->where('userId', $data->userId)
        ->find_one();
    
    $comptes = json_encode($data->comptes, JSON_NUMERIC_CHECK);

    // si vide on va creer
    if ( empty($favoris) ){
        $fav = ORM::for_table('comptes-favoris')->create();
        $fav->favoris = $comptes;
        $fav->userId = $data->userId;
        $fav->save();
        
        $msg = array( 'msg' => 'ok' );

    } else {
        $favoris->favoris = $comptes;
        $favoris->save();
        $msg = array( 'msg' => 'ok' );
    }

    Flight::json($msg);

});