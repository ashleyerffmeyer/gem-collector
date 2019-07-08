# Heigh-Ho Heigh-Ho Gems Collector!
A jQuery powered, Snow White and the Seven Dwarfs themed number guessing game

[Link to game!](https://erffmea.github.io/gem-collector/) 

## Authors
Ashley Erffmeyer, with major support from KU's Coding Boot Camp staff members:
* Ryan LaRue (Instructor)
* Jenny Dean (TA)
* Jacqueline Kolze (TA)
* Eli Vargas (TA)

## Languages/Libraries Used
* JavaScript
* jQuery
* CSS
* HTML

## Prerequisites & Installation
None

Note: Added the following script lines in index.html to allow for bootstrap and jQuery functionality

```html
<!--Added link to enable bootstrap functionality-->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

<!-- Added link to the jQuery library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!--Importing Ashley's game logic JavaScript-->
<script type="text/javascript" src="assets/javascript/game.js"></script>

<!--Importing Bootstrap JavaScript-->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```

## Design Notes
* The target score shown at the start of the game should be a random number between 19 and 120
* The values of each of the dwarfs/gems is a random hidden number between 1 and 12

## Game Overview

### Instructions

* The user will be given a random number called a target score at the beginning of the game

* There are four dwarfs/gems on the main game page. By clicking on a dwarf/gem the user will add a specific amount of points to the total score.

* The user wins the game by matching her total score to the random number; the user loses the game if her total score goes above the random number

![Image of Win Screen](https://github.com/erffmea/gem-collector/blob/master/assets/images/win.png)

![Image of Loss Screen](https://github.com/erffmea/gem-collector/blob/master/assets/images/loss.png)

* The value of each dwarf/gem is hidden from the user until she clicks on the image

* Each time when the game starts, the game will change the values of each dwarf/gem


