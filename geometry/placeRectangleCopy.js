const rect1 = { x: 10, y: 10, w: 5, h: 5 };
const rect2 = { x: 14, y: 11, w: 5, h: 6 };
const rect3 = { x: 18, y: 13, w: 4, h: 3 };
const rect4 = { x: 15, y: 4, w: 3, h: 4 };
const rect5 = { x: 17, y: 7, w: 4, h: 3 };
const rect6 = { x: 25, y: 9, w: 3, h: 3 };
const rects = [rect1, rect2, rect3, rect4, rect5, rect6];

function findPlaceForRectangleCopy(allRects, rectIndToCopy, minValue = 1) {
  const rectToCopy = allRects[rectIndToCopy]; // rect3
  const rectsInFindingArea = allRects.filter(rect =>
    (rect.x + rect.w > rectToCopy.x + rectToCopy.w) && // правая сторона прямоугольника rect правее правой стороны прямоугольника rectToCopy
    (rect.y + rect.h >= rectToCopy.y) && // нижняя сторона прямоугольника rect НЕ выше верхней стороны прямоугольника rectToCopy
    (rect.y <= rectToCopy.y + rectToCopy.h) // верхняя сторона прямоугольника rect НЕ ниже нижней стороны прямоугольника rectToCopy
  );

  // Если нет прямоугольников в искомой области, то размещаем копию на расстоянии minValue от копируемого объекта
  if (rectsInFindingArea.length === 0) {
    return {
      x: rectToCopy.x + rectToCopy.w + minValue,
      y: rectToCopy.y,
      w: rectToCopy.w,
      h: rectToCopy.h,
    }
  }

  rectsInFindingArea.sort((rectOne, rectTwo) => {
    if (rectOne.x + rectOne.w > rectTwo.x + rectTwo.w) { // сортируем по увеличению координаты правой стороны
      return 1;
    }
    if (rectOne.x + rectOne.w < rectTwo.x + rectTwo.w) { // сортируем по увеличению координаты правой стороны
      return -1;
    }
    return rectOne.x - rectTwo.x; // при равенстве координаты правой стороны сортируем по увеличению координаты левой стороны
  }); 

  // Пытаемся разместить копию между существующими прямоугольниками, отступая расстояние minValue слева
  for (let rectInd = 0; rectInd < rectsInFindingArea.length - 1; rectInd++) {
    if (rectsInFindingArea[rectInd].x + rectsInFindingArea[rectInd].w + minValue + rectToCopy.w <= rectsInFindingArea[rectInd + 1].x) {
      return {
        x: rectsInFindingArea[rectInd].x + rectsInFindingArea[rectInd].w + minValue,
        y: rectToCopy.y,
        w: rectToCopy.w,
        h: rectToCopy.h,
      }
    }
  }

  // Если не удалось разместить копию раньше, то размещаем ее после самого правого прямоугольника
  return {
    x: rectsInFindingArea[rectsInFindingArea.length - 1].x + rectsInFindingArea[rectsInFindingArea.length - 1].w + minValue,
    y: rectToCopy.y,
    w: rectToCopy.w,
    h: rectToCopy.h,
  }
}

console.log(findPlaceForRectangleCopy(rects, 2, 2));
