var $currentPlayer = '1'; // always starts with player '1'
$(document).ready(function(){


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

		//setting each tile with the folowing
		for (var j = 0; j < 7; j ++) {
			//setting left river
			if (i === 3 && j === 1) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 river: true,
				 html:'&nbsp'
				 });
			} 
			else if (i === 3 && j === 2) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 river: true,
				 html:'&nbsp'
				 });
			}
			else if (i === 4 && j === 1) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 river: true,
				 html:'&nbsp'
				 });
			}
			else if (i === 4 && j === 2) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 river: true,
				 html:'&nbsp'
				 });
			}
			else if (i === 5 && j === 1) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 river: true,
				 html:'&nbsp'
				 });
			}
			else if (i === 5 && j === 2) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 river: true,
				 html:'&nbsp'
				 });
			}
			//setting right river squares
			else if (i === 3 && j === 4) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,	
				 river: true,
				 html:'&nbsp'
				 });
			}
			else if (i === 3 && j === 5) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 river: true,
				 html:'&nbsp'
				 });
			}
			else if (i === 4 && j === 4) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,	
				 river: true,
				 html:'&nbsp'
				 });
			}
			else if (i === 4 && j === 5) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,	
				 river: true,
				 html:'&nbsp'
				 });
			}
			else if (i === 5 && j === 4) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,	
				 river: true,
				 html:'&nbsp'
				 });
			}
			else if (i === 5 && j === 5) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,	
				 river: true,
				 html:'&nbsp'
				 });
			}

			//setting dens
			else if (i === 0 && j === 3) {
				var $square = $('<div>', {
				 class: 'square den',
				 col: j,
				 den: true,
				 player: 1,
				 html:'&nbsp'
				 });
			}
			else if (i === 8 && j === 3) {
				var $square = $('<div>', {
				 class: 'square den',
				 col: j,
				 den: true,
				 player: 2,
				 html:'&nbsp'
				 });
			}

			//setting traps
			else if (i === 0 && j === 2) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 trap: true,
				 belongsTo: 1,
				 html:'&nbsp'
				 });
			}
			else if (i === 1 && j === 3) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 trap: true,
				 belongsTo: 1,
				 html:'&nbsp'
				 });
			}
			else if (i === 0 && j === 4) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 trap: true,
				 belongsTo: 1,
				 html:'&nbsp'
				 });
			}
			else if (i === 8 && j === 2) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 trap: true,
				 belongsTo: 2,
				 html:'&nbsp'
				 });
			}
			else if (i === 7 && j === 3) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 trap: true,
				 belongsTo: 2,
				 html:'&nbsp'
				 });
			}
			else if (i === 8 && j === 4) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 trap: true,
				 belongsTo: 2,
				 html:'&nbsp'
				 });
			}

			//player 1 pieces
			else if (i === 0 && j === 0) {
				var $square = $('<div>', {
				 class: 'square',
				 rank : 7,
			 	 col : j,
			 	 rank : 7, //lion
			 	 player : 1,
				 html:'&nbsp'
				 });
			}
			else if (i === 1 && j === 1) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 3, //dog
				 player: 1,
				 html:'&nbsp'
				 });
			}
			else if (i === 2 && j === 0) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 1, //rat
				 player: 1,
				 html:'&nbsp'
				 });
			}
			else if (i === 2 && j === 2) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 5, //leopard
				 player: 1,
				 html:'&nbsp'
				 });
			}
			else if (i === 2 && j === 4) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 4, //wolf
				 player: 1,
				 html:'&nbsp'
				 });
			}
			else if (i === 1 && j === 5) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 2, //cat
				 player: 1,
				 html:'&nbsp'
				 });
			}
			else if (i === 0 && j === 6) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 6, //tiger
				 player: 1,
				 html:'&nbsp'
				 });
			}
			else if (i === 2 && j === 6) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 8, //elephant
				 player: 1,
				 html:'&nbsp'
				 });
			}

			//player 2 pieces
			else if (i === 8 && j === 6) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 7, //lion
				 player: 2,
				 html:'&nbsp'
				 });
			}
			else if (i === 7 && j === 5) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 3, //dog
				 player: 2,
				 html:'&nbsp'
				 });
			}
			else if (i === 6 && j === 6) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 1, //rat
				 player: 2,
				 html:'&nbsp'
				 });
			}
			else if (i === 6 && j === 4) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 5, //leopard
				 player: 2,
				 html:'&nbsp'
				 });
			}
			else if (i === 6 && j === 2) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 4, //wolf
				 player: 2,
				 html:'&nbsp'
				 });
			}
			else if (i === 7 && j === 1) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 2, //cat
				 player: 2,
				 html:'&nbsp'
				 });
			}
			else if (i === 8 && j === 0) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 6, //tiger
				 player: 2,
				 html:'&nbsp'
				 });
			}
			else if (i === 6 && j === 0) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 8, //elephant
				 player: 2,
				 html:'&nbsp'
				 });
			}

			//blank squares
			else {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 html:'&nbsp'
				 });
			}
			
			$row.append($square);
		}
	}

	$('.square').click(playerMove);

});

var clicked = false;
var nextPlayer, $originalClick, $pieceRank, $piecePlayer, $pieceClass;

function playerMove() {
	// debugger;
	console.log('Current player: ' + $currentPlayer);
	//Choosing a piece to move from
	if (!clicked && $(this).attr('rank') && $(this).attr('player') === $currentPlayer) {
		$originalClick = $(this);
		$pieceRank = $(this).attr('rank');
		$piecePlayer = $(this).attr('player');
		$pieceClass = $(this).attr('class');
		$(this).addClass('squareSelected');
		clicked = true;
	}

	//Not your turn
	else if (!clicked && $(this).attr('rank') && $(this).attr('player') !== $currentPlayer) {
		console.log('Oops! Player ' + $currentPlayer + '\s move.')
	}


	//Choosing a destination piece to move to
	else if (clicked) {
		var $secondClick = $(this);

		//Not fighting among themselves
		if ($piecePlayer !== $(this).attr('player')) {
			piecesFight($originalClick, $pieceRank, $piecePlayer, $secondClick);
		}

		if ($piecePlayer === $(this).attr('player')) {
		}

		//Check for winner 
		//If den has a piece that belongs to opponent
		if ($(this).attr('den') && $(this).attr('rank') && $(this).attr('player') !== $piecePlayer) {
			console.log('Player ' + $piecePlayer + ' won!' );
		}

		//Not allowed to guard your den by sitting inside
		else if ($(this).attr('den') &&
				($(this).attr('player') === $piecePlayer)) {
			console.log('Cannot enter your own den');
		}

		//empty opponent den --> Player wins!
		else if ($(this).attr('den') &&
				 !$(this).attr('rank') && 
				($(this).attr('player') !== $piecePlayer)
				) {
			$originalClick.html('&nbsp;');
			$(this).attr('rank', $pieceRank);
			$(this).attr('player',$piecePlayer);
			$originalClick.removeClass('squareSelected');
			console.log('Player ' + $piecePlayer + ' won!' );
		}

		//Move to empty piece except river and piece is not a rat('1')
		else if (!$(this).attr('rank') && !$(this).attr('river')) {
			//Determining who's turn
			if ($piecePlayer === '1') {
				nextPlayer = '2';
			}
			else if ($piecePlayer === '2') {
				nextPlayer = '1';
			}
			//Setting empty tile with moving piece
			$originalClick.html('&nbsp;');
			$(this).attr('rank', $pieceRank);
			$(this).attr('player',$piecePlayer);
			$originalClick.removeClass('squareSelected');
			console.log('Next player: '+nextPlayer);
			$currentPlayer = nextPlayer;
			clicked = false;
		}

		//Move to empty piece except river and piece is not a rat('1')
		else if (!$(this).attr('rank') && !$(this).attr('river')) {
			//Determining who's turn
			if ($piecePlayer === '1') {
				nextPlayer = '2';
			}
			else if ($piecePlayer === '2') {
				nextPlayer = '1';
			}
			//Setting empty tile with moving piece
			$originalClick.html('&nbsp;');
			$(this).attr('rank', $pieceRank);
			$(this).attr('player',$piecePlayer);
			$originalClick.removeClass('squareSelected');
			console.log('Next player: '+nextPlayer);
			$currentPlayer = nextPlayer;
			clicked = false;
		}


		//if piece is a rat ('1')
		else if (!$(this).attr('rank') && $(this).attr('river') && $pieceRank === '1') {
			//Determining who's turn
			if ($piecePlayer === '1') {
				nextPlayer = '2';
			}
			else if ($piecePlayer === '2') {
				nextPlayer = '1';
			}
			//Setting empty tile with moving piece
			$originalClick.html('&nbsp;');
			$(this).attr('rank', $pieceRank);
			$(this).attr('player',$piecePlayer);
			$originalClick.removeClass('squareSelected');
			console.log('Next player: '+nextPlayer);
			$currentPlayer = nextPlayer;
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

	//Special scenario: rat(1) vs elephant(8) //////////might not have to write the second condition... check later
	if (
		($pieceFromRank == 1 || $pieceFromRank == 8) && ($pieceTo.attr('rank') == 8 || $pieceTo.attr('rank') == 1)) {
		nextPlayer = $pieceTo.attr('player');
		if ($pieceFromRank == 1) {
			$pieceFrom.html('&nbsp;');
			$pieceTo.attr('rank', $pieceFromRank);
			$pieceTo.attr('player', $pieceFromPlayer);
			if (pieceTo.attr('den') && pieceTo.attr('player') !== currentPlayer) {
				console.log(currentPlayer + ' won!!!!');
			}
		}
		else if ($pieceFromRank == 8) {
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

	//if a piece moves to opponent's trap
	else if ($pieceFromPlayer != $pieceTo.attr('belongsTo') && $pieceTo.attr('trap')) {
		var $tempRank = $pieceFromRank / 10;
		$pieceTo.attr('rank', $tempRank);
		$pieceTo.attr('player', $pieceFromPlayer);
		if ($pieceFromPlayer == '1') {
			nextPlayer = '2';
		}
		else if ($pieceFromPlayer == '2') {
			nextPlayer = '1';
		}
		console.log('Next player: '+nextPlayer);

		$pieceFrom.html('&nbsp;');
		$pieceFrom.removeClass('squareSelected');
		clicked = false;
	}
	// Do not remove player attribute if player move away from its own den, but I decided that player is not allowed to sit inside their own den, so this block of code doesn't matter. 
	// if(!$pieceFrom.attr('den')) {
	// 	$pieceFrom.removeAttr('player');
	// }

	$pieceFrom.removeAttr('rank');
	$pieceFrom.removeAttr('player');
	$currentPlayer = nextPlayer;
}

function possibleMoves(pieceFrom, row, col, river) {
	//

}