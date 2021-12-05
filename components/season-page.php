<?php
require('header.php');
?>
<div class="container">

    <div class="add-block">

        <input type="text" name="textvalue" class="input" placeholder="Введите значение">
        <button class="add-button <?= $season ?>" type="button">Добавить</button>
        <div class="hint <?= $season ?>">
            <span class="hint-view">?</span> 
            <div class="hint-content">Копирование названия задачи на колесико мыши</div>
        </div>
        <div class="mistake hidden">
            <span class="wrong">X</span>
            <span class="wrong-text">Введите новое значение</span>
        </div>
    </div>

    <div class="todo-list">
        <ul class="list hover">
        </ul>
    </div>


</div>
</main>
<script src="/script/app.js"></script>
</body>