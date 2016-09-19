<?

Flight::route('GET /users', function(){

    $headers = apache_request_headers();

    if (array_key_exists("authorization", $headers)) {
        
        $token = $headers['authorization'];
        // check autorisation
        $check = ORM::for_table('users')
            ->where('token', $token )
            ->find_one();
        
        if ( empty($check)){
            $msg = array(
                'msg' => 'no valid token'
            );
        } else {

            // list users
            $users = ORM::for_table('users')
                ->select('prenom')
                ->select('nom')
                ->select('email')
                ->select('statut')
                ->select('groupe')
                ->select('id')
                ->find_array();

            $msg = array(
                'msg' => 'ok',
                'users' => $users
            );

        }      

    // pas de token auth trouvé dans le header
    } else {
        $msg = array(
            'msg' => 'error'
        );
    }

    $test = json_encode( $msg, JSON_NUMERIC_CHECK );

   echo $test;
    

});

Flight::route('POST /user', function(){

    $data = getJson();

    // check if code is valid
    $invite = ORM::for_table('invitations')
    ->where('code', $data->code)
    ->find_one();
    
    if ( empty($invite) )
    {
        $msg = array(
            'msg' => 'code'
        );
    } else {

        // check if user exist
        $check = ORM::for_table('users')
            ->where('email', $invite->email)
            ->find_one();

        if ( empty($check) ){
            $pass = hash( algo(), $data->passe);
            // create user
            $user = ORM::for_table('users')->create();
            $user->prenom = $data->prenom;
            $user->nom = $data->nom;
            $user->passe = $pass;
            $user->email = $invite->email;
            $user->save();

            // modify invitation
            $invite->cons = 1;
            $invite->save();

            $msg = array(
                'msg' => 'ok'
            );
        } else {
            $msg = array(
                'msg' => 'exist'
            );
        }

    }
    Flight::json($msg);

});

