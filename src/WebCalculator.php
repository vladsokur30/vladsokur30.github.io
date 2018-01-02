<?//
//if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
//        $to = 'andreygazhala@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
//        $subject = 'Обратный звонок'; //Загаловок сообщения
//        $message = '
//                <html>
//                    <head>
//                        <title>'.$subject.'</title>
//                    </head>
//                    <body>
//                        <p>Имя: '.$_POST['name'].'</p>
//                        <p>Email: '.$_POST['email'].'</p>
//                    </body>
//                </html>'; //Текст нащего сообщения можно использовать HTML теги
//        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
//        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
//        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
//}
//?>
<?php
  $num1 = $_GET['number1'];
  $num2 = $_GET['number2'];
  $num3 = $_GET['number3'];
  $num4 = $_GET['number4'];
  $sum = $num1 + $num2 + $num3 + $num4;
  echo($sum);
?>
