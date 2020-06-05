Url de información para consumir del API de SOPITIFY
https://developer.spotify.com/documentation/general/guides/authorization-guide/

- copiar https://accounts.spotify.com/api/token en POSTMAN, utilizar método POST
- Check en: x-wwwform-form-unlencoded (En POSTMAN)
- KEY                               VALUE
grant_type                         client_credentials
client_id                          CLIENT_ID de SPOTIFY
client_secret                      CLIENT_SECRET de SPOTIFY

CLick a SEND        ->  Te genera tu clave TOKEN


Ir a CONSOLE (En la web de developer.spotify.com)
BROWSE > Get a List of New Releases

EN POSTMAN
https://api.spotify.com/v1/browse/new-releases con método GET
- KEY                               VALUE
Authorization                       Bearer TOKEN_GENERADO_ANTERIORMENTE