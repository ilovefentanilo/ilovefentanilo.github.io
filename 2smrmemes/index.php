
<?php
session_start();
$clave_correcta = "secreto123";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_POST["password"] === $clave_correcta) {
        $_SESSION["autenticado"] = true;
    } else {
        $error = "Contraseña incorrecta.";
    }
}

if (!isset($_SESSION["autenticado"]) || $_SESSION["autenticado"] !== true):
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acceso Restringido</title>
</head>
<body>
    <h2>Ingresa la contraseña para ver el contenido</h2>
    <form method="POST">
        <input type="password" name="password" required>
        <button type="submit">Ingresar</button>
    </form>
    <?php if (isset($error)) echo "<p style='color:red;'>$error</p>"; ?>
</body>
</html>
<?php
exit;
endif;
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contenido Secreto</title>
</head>
<body>
    <h2>Bienvenido</h2>
    <p>Has ingresado correctamente.</p>
    <a href="logout.php">Cerrar sesión</a>
</body>
</html>
