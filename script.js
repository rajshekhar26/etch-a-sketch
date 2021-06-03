const container = document.querySelector('.container');
const gap = document.getElementById('gap');
const resetGrid = document.getElementById('reset');
const gridSize = document.getElementById('grid-size');
const color = document.getElementById('color');
let gridNumber = 12;

const generateRandomColor = () => {
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

const clearGrid = () => {
	const box = document.querySelectorAll('.grid-item');
	container.style.gridGap = ``;
	box.forEach((grid) => {
		grid.remove();
	});
};

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

const changeColor = () => {
	const box = document.querySelectorAll('.grid-item');
	box.forEach((grid) => {
		grid.addEventListener('mouseenter', function () {
			grid.style.backgroundColor = `var(--primary)`;
		});
	});
};

changeColor();

resetGrid.addEventListener('click', function () {
	gridNumber = 12;
	clearGrid();
	createGrid();
	changeColor();
});

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

gridSize.addEventListener('click', () => {
	let newGrid = parseInt(prompt('How many grids do you want?'));
	if (newGrid && newGrid > 0) {
		gridNumber = newGrid;
		clearGrid();
		createGrid();
		changeColor();
	}
});

color.addEventListener('click', () => {
	const box = document.querySelectorAll('.grid-item');
	box.forEach((grid) => {
		grid.addEventListener('mouseenter', () => {
			if (grid.style.backgroundColor === `var(--primary)`) {
				grid.style.backgroundColor = generateRandomColor();
			} else {
				grid.style.backgroundColor = `var(--primary)`;
			}
		});
	});
});
