<?php
if ($_SERVER['REQUEST_METHOD'] == "GET") {
	unset($_COOKIE['username']);
    setcookie("username", null, -1 , '/');
    return true;
}

?>
