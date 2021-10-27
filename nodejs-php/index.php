<?php

$data = array(
                    ['id' => 0, 'nome' => 'California','prezzo' => 1.99, 'immagine' => 'images/california.png','quantità' => 0],
                    ['id' => 1, 'nome' => 'Dragon','prezzo' => 3.49, 'immagine' => 'images/dragon.png','quantità' => 0],
                    ['id' => 2, 'nome' => 'Dynamite','prezzo' => 2.49, 'immagine' => 'images/dynamite.png','quantità' => 0],
                    ['id' => 3, 'nome' => 'Philadelphia','prezzo' => 0.49, 'immagine' => 'images/philadelphia.png','quantità' => 0],
                    ['id' => 4, 'nome' => 'Rainbow','prezzo' => 2.99, 'immagine' => 'images/rainbow.png','quantità' => 0],
                    ['id' => 5, 'nome' => 'Shrimp','prezzo' => 1.49, 'immagine' => 'images/shrimp.png','quantità' => 0]
                );

$result = json_encode($data);

echo $result;
?>