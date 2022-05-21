
        var email;
        var pass;
        
        $("#btn_acceder").click(function(){
            email = $("#email").val();
            pass = $("#password").val();
            //console.log(email + ' '+ pass);
            validar_acceso_v2(email, pass);
        });

        function validar_acceso_v1(_email, _pass){
            if (_email == 'ernestoleonidas@gmail.com' && _pass == '123') {
                console.log('SI');
            } else {
                console.log('NO');
            }
        }

        validar_acceso_v2 = (_email, _pass) => {
            if (_email == 'ernestoleonidas@gmail.com' && _pass == '123') {
                console.log('SI');
            } else {
                console.log('NO');
            }
        }

        $("#btn_limpiar").click(function(){
            $("#email").val('');
            $("#password").val('');
        });