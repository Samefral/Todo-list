<?php
$season = $_GET['season'];
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/css/style.css" rel="stylesheet">
    <title>List</title>
</head>

<body class="page <?= !$season ? 'home' : $season ?>">
    <div class="data-php" data-attr="<?= $season ?>"></div>
    <div class="container">
        <header class="header">
            <h1 class="title"><a href="/index.php" class="title-link">HOME</a></h1>
            <nav class="navigation">
                <ul class="season-list <?= $season ?>">
                    <li class="season"><a href="/components/season-page.php?season=spring" class="season-link spring">Весна</a></li>
                    <li class="season"><a href="/components/season-page.php?season=summer" class="season-link summer">Лето</a></li>
                    <li class="season"><a href="/components/season-page.php?season=autumn" class="season-link autumn">Осень</a></li>
                    <li class="season"><a href="/components/season-page.php?season=winter" class="season-link winter">Зима</a></li>
                </ul>
            </nav>
        </header>
    </div>
    <main>