$(document).ready(function(){
	var $currentRow;
	var $currentCol;

	//set up an empty 2D array
	var board = new Array(9);
	for (var i = 0; i < 9; i++) {
   	board[i] = new Array(7);
	}

	//making 9 rows
	for(var i = 0; i < 9; i++){
		var $row = $('<div>', {
			class: 'rows',
			row: i
		});
		
		$('#gameBoard').append($row);

		//setting
		for (var j = 0; j < 7; j ++) {
			//setting left river
			if (i === 3 && j === 1) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 html: 'river',
				 river: true
				 });
			} 
			else if (i === 3 && j === 2) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 html: 'river',
				 river: true
				 });
			}
			else if (i === 4 && j === 1) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 html: 'river',
				 river: true
				 });
			}
			else if (i === 4 && j === 2) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 
				 html: 'river',
				 river: true
				 });
			}
			else if (i === 5 && j === 1) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 
				 html: 'river',
				 river: true
				 });
			}
			else if (i === 5 && j === 2) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 
				 html: 'river',
				 river: true
				 });
			}
			//setting right river squares
			else if (i === 3 && j === 4) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,			 
				 html: 'river',
				 river: true
				 });
			}
			else if (i === 3 && j === 5) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 html: 'river',
				 river: true
				 });
			}
			else if (i === 4 && j === 4) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,			 
				 html: 'river',
				 river: true
				 });
			}
			else if (i === 4 && j === 5) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,				 
				 html: 'river',
				 river: true
				 });
			}
			else if (i === 5 && j === 4) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,				 
				 html: 'river',
				 river: true
				 });
			}
			else if (i === 5 && j === 5) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,				 
				 html: 'river',
				 river: true
				 });
			}

			//setting dens
			else if (i === 0 && j === 3) {
				var $square = $('<div>', {
				 class: 'square den',
				 col: j,
				 den: true,
				 player: 1,
				 html: 'den'
				 });
			}
			else if (i === 8 && j === 3) {
				var $square = $('<div>', {
				 class: 'square den',
				 col: j,
				 den: true,
				 player: 2,
				 html: 'den'
				 });
			}

			//setting traps
			else if (i === 0 && j === 2) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 trap: true,
				 html: 'trap'
				 });
			}
			else if (i === 1 && j === 3) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 trap: true,
				 html: 'trap'
				 });
			}
			else if (i === 0 && j === 4) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 trap: true,
				 html: 'trap'
				 });
			}
			else if (i === 8 && j === 2) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 trap: true,
				 html: 'trap'
				 });
			}
			else if (i === 7 && j === 3) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 trap: true,
				 html: 'trap'
				 });
			}
			else if (i === 8 && j === 4) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 trap: true,
				 html: 'trap'
				 });
			}

			//player 1 pieces
			else if (i === 0 && j === 0) {
				var $square = $('<div>', {
				 class: 'square',
				 data : {
				 	rank : 7
				 },
			 	 col : j,
			 	 rank : 7, //lion
			 	 player : 1,
				 html: '7'
				 });
			}
			else if (i === 1 && j === 1) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 3, //dog
				 player: 1,
				 html: '3'
				 });
			}
			else if (i === 2 && j === 0) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 1, //rat
				 player: 1,
				 html: '1'
				 });
			}
			else if (i === 2 && j === 2) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 5, //leopard
				 player: 1,
				 html: '5'
				 });
			}
			else if (i === 2 && j === 4) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 4, //wolf
				 player: 1,
				 html: '4'
				 });
			}
			else if (i === 1 && j === 5) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 2, //cat
				 player: 1,
				 html: '2'
				 });
			}
			else if (i === 0 && j === 6) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 6, //tiger
				 player: 1,
				 html: '6'
				 });
			}
			else if (i === 2 && j === 6) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 8, //elephant
				 player: 1,
				 html: '8'
				 });
			}

			//player 2 pieces
			else if (i === 8 && j === 6) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 7, //lion
				 player: 2,
				 html: '7'
				 });
			}
			else if (i === 7 && j === 5) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 3, //dog
				 player: 2,
				 html: '3'
				 });
			}
			else if (i === 6 && j === 6) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 1, //rat
				 player: 2,
				 html: '1'
				 });
			}
			else if (i === 6 && j === 4) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 5, //leopard
				 player: 2,
				 html: '5'
				 });
			}
			else if (i === 6 && j === 2) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 4, //wolf
				 player: 2,
				 html: '4'
				 });
			}
			else if (i === 7 && j === 1) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 2, //cat
				 player: 2,
				 html: '2'
				 });
			}
			else if (i === 8 && j === 0) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 6, //tiger
				 player: 2,
				 html: '6'
				 });
			}
			else if (i === 6 && j === 0) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 8, //elephant
				 player: 2,
				 html: '8'
				 });
			}

			//blank squares
			else {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 html: '&nbsp',
				 });
			}
			
			$row.append($square);
		}
	}

	$('.square').click(playerMove);

});

var clicked = false;
var currentPlayer;
var nextPlayer;
var $originalClick, $pieceRank, $piecePlayer, $pieceClass;


function playerMove() {
	//Choosing a piece to move from
	if (!clicked && $(this).attr('rank')) {
		$originalClick = $(this);
		$pieceRank = $(this).attr('rank');
		$piecePlayer = $(this).attr('player');
		$pieceClass = $(this).attr('class');
		$(this).addClass('squareSelected');
		clicked = true;
	}

	//Choosing a destination piece to move to
	else if (clicked) {
		var $secondClick = $(this);
		piecesFight($originalClick, $pieceRank, $piecePlayer, $secondClick);

		//check winner
		if ($(this).attr('den') && $(this).attr('rank') && $(this).attr('player') !== $piecePlayer) {
			console.log('Player ' + $piecePlayer + ' won!' );
		}

		//If own piece move to player's 1 den, do not change its player attribute and do not trigger winning message
		//empty own den, do not remove player attribute when move away from den
		else if ($(this).attr('den') && $(this).attr('rank') && $(this).attr('player') === $piecePlayer) {
			if ($piecePlayer === '1') {
				nextPlayer = '2';
				}
				else if ($piecePlayer === '2') {
					nextPlayer = '1';
				}
			$(this).text($pieceRank);
			$originalClick.html('&nbsp;');
			$(this).attr('rank', $pieceRank);
			$originalClick.removeClass('squareSelected')
			console.log('Next player: '+nextPlayer);
			clicked = false;
		}
		//empty opponent den --> Player wins!
		else if ($(this).attr('den') &&
				 !$(this).attr('rank') && 
				($(this).attr('player') !== $piecePlayer)
				) {
			console.log('Player ' + $piecePlayer + ' won!' );
			clicked = false;
		}
		//occupied opponent den --> Fight! Reuse piecesFight function
		// else if ($(this).attr('den') && $(this).attr('rank') && $(this).attr('player') !== $piecePlayer) {
		// 	piecesFight($originalClick, $pieceRank, $piecePlayer, $secondClick);
		// 	console.log('Player ' + $piecePlayer + ' won!' );
		// 	clicked = false;
		// }

		//Move to empty piece
		else if (!$(this).attr('rank')) {
			//Determining who's turn
			if ($piecePlayer === '1') {
				nextPlayer = '2';
			}
			else if ($piecePlayer === '2') {
				nextPlayer = '1';
			}
			//Setting empty tile with moving piece
			$(this).text($pieceRank);
			$originalClick.html('&nbsp;');
			$(this).attr('rank', $pieceRank);
			$(this).attr('player',$piecePlayer);
			$originalClick.removeClass('squareSelected');
			console.log('Next player: '+nextPlayer);
			clicked = false;
		}
	}

	//If player clicks on non-player piece
	else {
		console.log('Choose a piece to move');
	}
}


function piecesFight(pieceFrom, rank, player, pieceTo) {
	$pieceFromRank = parseInt(rank);
	$pieceFromPlayer = parseInt(player);
	$pieceTo = pieceTo;
	$pieceFrom = pieceFrom;

	//Special scenario: rat(1) vs elephant(8)
		if (
			($pieceFromRank == 1 || $pieceFromRank == 8) && ($pieceTo.attr('rank') == 8 || $pieceTo.attr('rank') == 1)) {
			nextPlayer = $pieceTo.attr('player');
			if ($pieceFromRank == 1) {
				$pieceTo.text($pieceFromRank);
				$pieceFrom.html('&nbsp;');
				$pieceTo.attr('rank', $pieceFromRank);
				$pieceTo.attr('player', $pieceFromPlayer);
			}
			else if ($pieceFromRank == 8) {
				$pieceFrom.text($pieceTo.attr('rank'));
				$pieceFrom.html('&nbsp;');
				$pieceTo.attr('rank', $pieceTo.attr('rank'));
				$pieceTo.attr('player', $pieceTo.attr('player'));
			}
			$pieceFrom.removeClass('squareSelected');
			console.log('Current player: '+$piecePlayer);
			console.log('Next player: '+nextPlayer);
			clicked = false;
		}

		//Higher rank piece beating lower rank piece 
		//If both are same rank, the piece that is moving will beat the other piece
		else if (($pieceFromRank > $pieceTo.attr('rank') && 
				$pieceTo.attr('rank')) || 
				($pieceFromRank === $pieceTo.attr('rank') && 
				$pieceTo.attr('rank')))
				{
			nextPlayer = $pieceTo.attr('player');
			$pieceTo.text($pieceFromRank);
			$pieceFrom.html('&nbsp;');
			$pieceTo.attr('rank', $pieceFromRank);
			$pieceTo.attr('player', $pieceFromPlayer);
			$pieceFrom.removeClass('squareSelected');
			console.log('Next player: '+nextPlayer);
			clicked = false;
		}

		//Lower rank piece beating higher rank piece
		else if ($pieceRank < $pieceTo.attr('rank') && $pieceTo.attr('rank')) {
			nextPlayer = $pieceTo.attr('player');
			$pieceFrom.html('&nbsp;');
			$pieceFrom.removeClass('squareSelected');
			console.log('Next player: '+nextPlayer);
			clicked = false;
		}
		// Do not remove player attribute if player move away from its own den
		if(!$pieceFrom.attr('den')) {
			$pieceFrom.removeAttr('player');
		}
		$pieceFrom.removeAttr('rank');
}


		// else if ($(this).attr('den')) {
		// 	//Determining who wins the game
		// 	//If player 2's piece is in player 1's den
		// 	console.log($piecePlayer);
		// 	console.log($('.square.den').first().attr('player'));
		// 	if ($('.square.den').first().attr('player') !== $piecePlayer) {
		// 		console.log('Player ' + $piecePlayer + ' won.');
		// 	}

		// 	//If player 1's piece is in player 2's den
		// 	else if ($('.square.den').last().attr('player') !== $piecePlayer) {
		// 		console.log('Player ' + $piecePlayer + ' won.');
		// 	}

		// 	//If player 1 piece is in its own den
		// 	else if ($('.square.den').first().attr('player') === $piecePlayer) {
		// 		if ($piecePlayer === '1') {
		// 		nextPlayer = '2';
		// 		}
		// 		else if ($piecePlayer === '2') {
		// 			nextPlayer = '1';
		// 		}
		// 	$(this).text($pieceRank);
		// 	$originalClick.html('&nbsp;');
		// 	$(this).attr('rank', $pieceRank);
		// 	$originalClick.removeClass('squareSelected')
		// 	console.log('Next player: '+nextPlayer);
		// 	}
		// 	//If player 2 piece is in its own den
		// 	else if ($('.square.den').last().attr('player') === $piecePlayer) {
		// 		if ($piecePlayer === '1') {
		// 		nextPlayer = '2';
		// 		}
		// 		else if ($piecePlayer === '2') {
		// 			nextPlayer = '1';
		// 		}
		// 	$(this).text($pieceRank);
		// 	$originalClick.html('&nbsp;');
		// 	$(this).attr('rank', $pieceRank);
		// 	$originalClick.removeClass('squareSelected')
		// 	console.log('Next player: '+nextPlayer);
		// 	}

		// 	clicked = false;
		// }




	// //If opponent piece is in the den, opponent wins
	// if($('.square.den').first().attr('rank') 
	// 	&& ($('.square.den').first().attr('player') !== $piecePlayer)) {
	// 	var winner = $piecePlayer;
	// 	console.log('Player ' + winner + ' wins.');
	// }
	// if ($('.square.den').last().attr('rank') 
	// 	&& ($('.square.den').first().attr('player') !== $piecePlayer)) {
	// 	var winner = $piecePlayer;
	// 	console.log('Player ' + winner + ' wins.');
	// }
