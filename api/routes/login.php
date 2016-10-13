<?


Flight::route('POST /login', function(){

    $data = getJson();

    // check if code is valid
    $user = ORM::for_table('users')
    ->where('email', $data->email)
    ->find_one();

    if ( empty($user)){
        $msg = array(
            'msg' => 'error'
        );
    } else {

        $pass = sha1( $data->passe );

        if ( $pass == $user->passe){

            $token = sha1( createRandomPassword() );
            $user->token = $token;
            $user->save();

            $msg = array(
                'msg' => 'ok',
                'token' => $token,
                'user' => array(
                    'prenom' => $user->prenom,
                    'nom' => $user->nom,
                    'groupe' => $user->groupe,
                    'id' => $user->id
                )
            );
            
        } else {
            $msg = array(
                'msg' => 'psw'
            );
        }

    }
   
    Flight::json($msg);
    
});