import React, { useState, useRef } from 'react';

const BuildingCreator = () => {
  const [shapes, setShapes] = useState([]);
  const [currentColor, setCurrentColor] = useState('#000000');
  const canvasRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [draggedShape, setDraggedShape] = useState(null);
  const [resizing, setResizing] = useState(false);
  const [resizedShape, setResizedShape] = useState(null);
  const [resizeStartX, setResizeStartX] = useState(0);
  const [resizeStartY, setResizeStartY] = useState(0);

  const handleDrop = (e) => {
    e.preventDefault();
    if (!draggedShape) return;

    const canvasRect = canvasRef.current.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const positionX = e.clientX - canvasRect.left + scrollX;
    const positionY = e.clientY - canvasRect.top + scrollY;

    const newShape = {
      type: draggedShape.type,
      positionX,
      positionY,
      color: draggedShape.color,
      width: 100, // initial width of the shape
      height: 100, // initial height of the shape
    };

    setShapes([...shapes, newShape]);
    setDragging(false);
    setDraggedShape(null);
  };

  const handleColorChange = (e) => {
    setCurrentColor(e.target.value);
  };

  const handleDragStart = (e, shape) => {
    e.dataTransfer.setData('shape', JSON.stringify(shape));
    setDragging(true);
    setDraggedShape(shape);
  };

  const handleDragEnd = () => {
    setDragging(false);
    setDraggedShape(null);
  };

  const handleMouseMove = (e) => {
    if (!dragging && !resizing) return;

    const canvasRect = canvasRef.current.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const positionX = e.clientX - canvasRect.left + scrollX;
    const positionY = e.clientY - canvasRect.top + scrollY;

    if (dragging) {
      const updatedShapes = shapes.map((shape) => {
        if (shape === draggedShape) {
          return {
            ...shape,
            positionX,
            positionY,
          };
        }
        return shape;
      });

      setShapes(updatedShapes);
    }

    if (resizing) {
      const offsetX = positionX - resizeStartX;
      const offsetY = positionY - resizeStartY;

      const updatedShapes = shapes.map((shape) => {
        if (shape === resizedShape) {
          return {
            ...shape,
            width: Math.max(shape.width + offsetX, 10), // minimum width of 10 pixels
            height: Math.max(shape.height + offsetY, 10), // minimum height of 10 pixels
          };
        }
        return shape;
      });

      setShapes(updatedShapes);
      setResizeStartX(positionX);
      setResizeStartY(positionY);
    }
  };

  const handleResizeStart = (e, shape) => {
    e.stopPropagation();
    setResizing(true);
    setResizedShape(shape);
    setResizeStartX(e.clientX);
    setResizeStartY(e.clientY);
  };

  const handleResizeEnd = () => {
    setResizing(false);
    setResizedShape(null);
  };

  const handleShapeClick = (index) => {
    const updatedShapes = shapes.map((shape, i) => {
      if (i === index) {
        // Perform any action when the shape is clicked, such as opening a modal, displaying information, etc.
        console.log('Shape clicked:', shape);
      }
      return shape;
    });

    setShapes(updatedShapes);
  };

  return (
    <div
      onKeyDown={(e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          handleKeyDown(e);
        }
      }}
      tabIndex="0"
    >
      <div
        className="canvas"
        ref={canvasRef}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onMouseMove={handleMouseMove}
      >
        {shapes.map((shape, index) => (
          <div
            key={index}
            className={`shape ${shape.type}`}
            style={{
              left: shape.positionX + 'px',
              top: shape.positionY + 'px',
              backgroundColor: shape.color,
              width: shape.width + 'px',
              height: shape.height + 'px',
            }}
            onClick={() => handleShapeClick(index)}
          >
            {resizing && resizedShape === shape && (
              <div className="resize-handles">
                <div
                  className="resize-handle top-left"
                  onMouseDown={(e) => handleResizeStart(e, shape)}
                  onMouseUp={handleResizeEnd}
                />
                <div
                  className="resize-handle top-right"
                  onMouseDown={(e) => handleResizeStart(e, shape)}
                  onMouseUp={handleResizeEnd}
                />
                <div
                  className="resize-handle bottom-right"
                  onMouseDown={(e) => handleResizeStart(e, shape)}
                  onMouseUp={handleResizeEnd}
                />
                <div
                  className="resize-handle bottom-left"
                  onMouseDown={(e) => handleResizeStart(e, shape)}
                  onMouseUp={handleResizeEnd}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="palette">
        <div
          className="shape square"
          draggable
          onDragStart={(e) => handleDragStart(e, { type: 'square', color: currentColor })}
          onDragEnd={handleDragEnd}
        />
        <div
          className="shape circle"
          draggable
          onDragStart={(e) => handleDragStart(e, { type: 'circle', color: currentColor })}
          onDragEnd={handleDragEnd}
        />
        <div
          className="shape triangle"
          draggable
          onDragStart={(e) => handleDragStart(e, { type: 'triangle', color: currentColor })}
          onDragEnd={handleDragEnd}
        />

        <input type="color" value={currentColor} onChange={handleColorChange} />
      </div>
    </div>
  );
};

export default BuildingCreator;
