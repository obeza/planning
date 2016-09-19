<?

// modifier le statut et le groupe d'un utilisateur
Flight::route('POST /admin/user', function(){
    
    $headers = apache_request_headers();

    if (array_key_exists("authorization", $headers)) {
        
        $data = getJson();

        // check token si authentique

        // trouver l'utilisateur
        $user = ORM::for_table('users')
            ->where('email', $data->email)
            ->find_one();

        if ( empty($user)){
            $msg = array(
                'msg' => 'pas de user trouvé'
            );
        } else {
            $user->statut = $data->statut;
            $user->groupe = $data->groupe;
            $user->save();

            $msg = array(
                'msg' => 'ok' 
            );
        }   



    } else {

        $msg = array(
                'msg' => 'error'
            );
            
    }

    Flight::json($msg);

});