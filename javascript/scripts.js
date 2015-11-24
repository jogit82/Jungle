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
				 player: 1,
				 html: 'trap'
				 });
			}
			else if (i === 1 && j === 3) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 trap: true,
				 player: 1,
				 html: 'trap'
				 });
			}
			else if (i === 0 && j === 4) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 trap: true,
				 player: 1,
				 html: 'trap'
				 });
			}
			else if (i === 8 && j === 2) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 trap: true,
				 player: 2,
				 html: 'trap'
				 });
			}
			else if (i === 7 && j === 3) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 trap: true,
				 player: 2,
				 html: 'trap'
				 });
			}
			else if (i === 8 && j === 4) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 trap: true,
				 player: 2,
				 html: 'trap'
				 });
			}

			//player 1 pieces
			else if (i === 0 && j === 0) {
				var $square = $('<div>', {
				 class: 'square',
				 col: j,
				 rank: 7, //lion
				 player: 1,
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
function playerMove() {
	// if (!clicked) {
	// 	$originalClick = $(this);
	// }

	if (!clicked && $(this).attr('rank')) {
		$originalClick = $(this);


		// console.log($('.square'));
		// if ($('.square[den]') && $('.square[rank]')) {
		// 	console.log($('.square[rank]') + 'nobody wins');
		// }
		// $(this).addClass('squareSelected');
		$pieceRank = $(this).attr('rank');
		$piecePlayer = $(this).attr('player');
		$pieceClass = $(this).attr('class');
		$(this).removeAttr('player');
		$(this).removeAttr('rank');
		//$(this).removeClass('squareSelected');
		return clicked = true;
	}
	else if (clicked) {
		//rat vs elephant
		if ($pieceRank === '1' && $(this).attr('rank') === '8') {
			$originalClick.html('&nbsp;');
			$(this).attr('rank', $pieceRank);
			$(this).attr('player', $piecePlayer);
			console.log('1 beats 8!');
			//$(this).attr('class',$pieceClass);
			clicked = false;
		}
		//Compare and set destination piece with new values
		else if ($pieceRank > $(this).attr('rank') || !$(this).attr('rank')) {
			$(this).text($pieceRank);
			$originalClick.html('&nbsp;');
			$(this).attr('rank', $pieceRank);
			$(this).attr('player',$piecePlayer);
			//$(this).attr('class',$pieceClass);
			clicked = false;
		}
	}
	else {
		console.log('Choose a piece to move');
	}
	if($('.square.den').first().attr('rank')) {
		var winner = $('.square.den').attr('player');
		console.log('Player ' + winner + ' wins.');
	}
	else if ($('.square.den').last().attr('rank')){
		var winner = $('.square.den').attr('player');
		console.log('Player ' + winner + ' wins.');
	}
}


