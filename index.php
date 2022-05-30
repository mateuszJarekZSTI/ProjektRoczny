<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles/mainStyle.css">
    <link rel="stylesheet" type="text/css" href="games/styles/2048style.css">
    <link rel="stylesheet" type="text/css" href="games/styles/ball.css">
    <link rel="stylesheet" type="text/css" href="games/styles/snake.css">
    <link rel="stylesheet" type="text/css" href="styles/nav.css">
    <link rel="stylesheet" type="text/css" href="games/styles/trex.css">
    <link rel="stylesheet" type="text/css" href="styles/stats.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    <meta name="author" content="Mateusz Jarek">
    <title>Gaming Kingdom</title>
</head>
<body>
    
    <main>
        <?php require "snippets/nav.html"?>
        <div class="mainContainer">
            <div class="mainContainer__content">
                <div class="gamesContainer">
                    <div class="game">
                        <div class="game__content">
                            <div class="game__front">
                                <img src="img\2048.png" alt="2048 game image" class="game__front-img">
                            </div>
                            <div class="game__back">
                                <div class="game__back-desc">
                                    <p>Przesuwaj i łącz pojawiające się na planszy klocki</p>
                                </div>
                                <button class="game__back-btn" onclick="rotation('2048')">Zagraj</button>
                            </div>
                        </div>
                    </div>
                    <div class="game">
                        <div class="game__content">
                            <div class="game__front">
                                <img src="img\ball.png" alt="ball game image" class="game__front-img">
                            </div>
                            <div class="game__back">
                            <div class="game__back-desc">
                                    <p>Spadaj w dół jak moralne uczniów ZSTI po egzaminach</p>
                                </div>
                                <button class="game__back-btn" onclick="rotation('ball')">Zagraj</button>
                            </div>
                        </div>
                    </div>
                    <div class="game">
                        <div class="game__content">
                            <div class="game__front">
                                <img src="img\trex.png" alt="tres game image" class="game__front-img">
                            </div>
                            <div class="game__back">
                            <div class="game__back-desc">
                                    <p>Skacz i omijaj przeszkody jak Tomek kontroli pojazdu</p>
                                </div>
                                <button class="game__back-btn" onclick="rotation('trex')">Zagraj</button>
                            </div>
                        </div>
                    </div>
                    <div class="game">
                        <div class="game__content">
                            <div class="game__front">
                                <img src="img\tetris.png" alt="tetris game image" class="game__front-img">
                            </div>
                            <div class="game__back">Już w krótce</div>
                        </div>
                    </div>
                    <div class="game">
                        <div class="game__content">
                            <div class="game__front">
                                <img src="img\pacman.png" alt="pacman game image" class="game__front-img">
                            </div>
                            <div class="game__back">Już w krótce</div>
                        </div>
                    </div>
                    <div class="game">
                        <div class="game__content">
                            <div class="game__front">
                                <img src="img\snake.png" alt="snake game image" class="game__front-img">
                            </div>
                            <div class="game__back">
                            <div class="game__back-desc">
                                    <p>Pełzaj, pożeraj i rośnij aby zająć cała planszę</p>
                                </div>
                                <button class="game__back-btn" onclick="rotation('snake')">Zagraj</button>
                            </div>
                        </div>
                    </div>
                    <div class="game">
                        <div class="game__content">
                            <div class="game__front">
                                <img src="img\flappy.jpg" alt="flappy game image" class="game__front-img">
                            </div>
                            <div class="game__back">Już w krótce</div>
                        </div>
                    </div>
                    <div class="game">
                        <div class="game__content">
                            <div class="game__front">
                                <img src="img\fortnite.png" alt="fortnite game image" class="game__front-img">
                            </div>
                            <div class="game__back">
                            <div class="game__back-desc">
                                    <p>Zagraj w najlepszą grę wszechczasów!!</p>
                                </div>
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="game__back-btn" onclick="loadRickRoll()">Zagraj</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="play">
                    <?php require "games/2048.html"?>
                    <?php require "games/ball.html"?>
                    <?php require "games/snake.html"?>
                    <?php require "games/trex.html"?>
                </div>
            </div>
        </div>
        <div class="statsContainer">
            <?php require "snippets/sidebar.html"?>
        </div>
    </main>
    <script src = "main.js"></script>
</body>
</html>
