<?php
require('header.php');
?>
<div class="container">

    <div class="add-block">

        <input type="text" name="textvalue" class="input" placeholder="Введите значение">
        <button class="add <?= $season ?>" type="button">Добавить</button>

        <div class="mistake hidden">
            <span class="wrong">X</span>
            <span class="wrong-text">Введите новое значение</span>
        </div>
    </div>

    <div class="todo-list">
        <ul class="list">
        </ul>
    </div>


</div>
<script src="/script/app.js"></script>
</body>