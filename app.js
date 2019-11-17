document.addEventListener('DOMContentLoaded', function () {

    function sum(a) { // передаем входящий параметр

        let currentSum = a; // создаем переменную в локальной области

        function f(b) { // создаем функцию как переменную в локальной области передаем входящий параметр
        // прибавляем к локальной переменной func sum локальную переменную func f с помощью оператора + мы можем вызывать
            currentSum += b;
            return f; // возвращаем результат функции
        };

        f.toString = function () { //  toString возвращает строковое представление указанного объекта
            return currentSum;
        };

        // возвращаем функцию f не вызывая ее. sum(1)(2)
        // Мы вызовем ее второй скобкой при вызове sum и передадим значения для currentSum и b
        return f;
    };
    console.log(sum(5)(2)(-9)(18));

//============================================================================================================================

    function createBuffer() {
        let currentText = '';
        function addText(text){
            if(text){
            return currentText += ' ' + text;
            } else {
                return currentText;
            }
            }
        addText.clear = function() {
            a = '';
        };
        return addText;


    };

    let b = createBuffer();
    b(1)
    b('world')
    b('amigo')

    console.log(b());




});