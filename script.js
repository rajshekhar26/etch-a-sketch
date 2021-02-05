const container = document.querySelector('.container');
let gridNumber = 12;

// add random colors
const randomColor = () => {
	const colorCodes = [
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
	];
	let colors = '#';
	for (i = 0; i < 6; i++) {
		colors += colorCodes[Math.floor(Math.random() * 16)];
	}
	return colors;
};

// clear grid
const clearGrid = () => {
	const box = document.querySelectorAll('.grid-item');
	container.style.gridGap = ``;
	box.forEach((grid) => {
		grid.remove();
	});
};

// create grid
const createGrid = () => {
	for (let i = 0; i < gridNumber * gridNumber; i++) {
		const newBox = document.createElement('div');
		newBox.classList.add(`grid-item`);
		container.appendChild(newBox);
		container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
		container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
	}
};

createGrid();

// change colors when mouse enters the box
const changeColor = () => {
	const box = document.querySelectorAll('.grid-item');
	box.forEach((grid) => {
		grid.addEventListener('mouseenter', function () {
			grid.style.backgroundColor = `var(--primary)`;
		});
	});
};

changeColor();

// reset grid
const resetGrid = document.getElementById('reset');
resetGrid.addEventListener('click', function () {
	gridNumber = 12;
	clearGrid();
	createGrid();
	changeColor();
});

// toggle gaps
const gap = document.getElementById('gap');
gap.addEventListener('click', () => {
	const box = document.querySelectorAll('.grid-item');
	box.forEach((grid) => {
		if (grid.style.borderRadius) {
			grid.style.borderRadius = ``;
			container.style.gridGap = ``;
		} else if (!grid.style.borderRadius) {
			grid.style.borderRadius = `5px`;
			container.style.gridGap = `3px`;
		}
	});
});

// change grid size
const gridSize = document.getElementById('grid-size');
gridSize.addEventListener('click', () => {
	let newGrid = parseInt(prompt('How many grids do you want?'));
	if (newGrid && newGrid > 0) {
		gridNumber = newGrid;
		clearGrid();
		createGrid();
		changeColor();
	}
});

// toggle colors
const color = document.getElementById('color');
color.addEventListener('click', () => {
	const box = document.querySelectorAll('.grid-item');
	box.forEach((grid) => {
		grid.addEventListener('mouseenter', () => {
			if (grid.style.backgroundColor === `var(--primary)`) {
				grid.style.backgroundColor = randomColor();
			} else {
				grid.style.backgroundColor = `var(--primary)`;
			}
		});
	});
});
