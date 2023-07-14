import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { CirclePicker } from 'react-color';

function Widget() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(true);
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  const [buttonColor, setButtonColor] = useState('#3f51b5'); // Default color
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  let progress = (parseFloat(count.toString()) / parseFloat(text1)) * 100;
  progress = Math.min(progress, 100);
  const percentage = isNaN(progress) ? 0 : Math.round(progress).toString();

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleColorChange = (color) => {
    setButtonColor(color.hex);
  };

  const handleColorPickerHover = () => {
    setShowColorPicker(true);
  };

  const handleColorPickerLeave = () => {
    setShowColorPicker(false);
  };

  return (
    <Box
      name="widget1"
      display="flex"
      flexDirection="row"
      alignItems="center"
      overflow="visible"
      width={500}
      height={100}
      position="absolute"
    >
      {open && (
        <>
          <TextField
            label="Your task"
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{
              fontSize: 20,
              fontWeight: 'normal',
              fontFamily: 'Serif',
              fill: '#AA336A',
              width: 200,
              height: 90,
            }}
          />

          <IconButton
            color="black"
            onClick={handleDecrement}
            sx={{
              marginLeft: '10px',
              marginTop: '-40px',
              fontSize: '22px',
            }}
          >
            -
          </IconButton>
          <Typography
            variant="body1"
            color="black"
            sx={{
              marginLeft: '5px',
              marginTop: '-40px',
              fontSize: 18,
            }}
          >
            {count}
          </Typography>

          <Typography
            variant="body1"
            color="black"
            sx={{
              marginLeft: '5px',
              marginTop: '-40px',
              fontSize: 18,
            }}
          >
            /
          </Typography>

          <TextField
            type="number"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="Add"
            style={{ width: 75, height: 90 }}
            sx={{ fontSize: 29, fill: '#AA336A', marginLeft: '10px', fontFamily: 'Inria Serif' }}
          />
          <IconButton
            color="black"
            onClick={handleIncrement}
            sx={{
              marginLeft: '5px',
              marginTop: '-40px',
              fontSize: '20px',
            }}
          >
            +
          </IconButton>
        </>
      )}

      <IconButton
        name="active"
        sx={{
          position: 'relative',
          width: 50,
          top:-20,
          height: 50,
          bgcolor: open ? buttonColor : '',
          borderRadius: open ? '50px 50px 50px 10px' : '50px',
          boxShadow: open ? 1 : 0,
          marginLeft: '10px',
        }}
        onClick={handleToggle}
      >
        {open && (
          <Typography
            variant="body1"
            color="white"
            sx={{
              fontSize: 20,
              fill: '#FFFFFF',
              fontFamily: 'Inria Serif',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {percentage}%
          </Typography>
        )}
      </IconButton>

      {!open && (
        <IconButton
          name="active"
          sx={{
            position: 'relative',
            width: 50,
            height: 50,
            bgcolor: open? buttonColor:buttonColor,
            borderRadius: '50px',
            boxShadow: 1,
          }}
          onClick={handleToggle}
        >
          <Typography
            variant="body1"
            color="white"
            sx={{
              fontSize: 20,
              fill: '#FFFFFF',
              fontFamily: 'Inria Serif',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {percentage}%
          </Typography>
        </IconButton>
      )}

      <IconButton
        sx={{
          position: 'absolute',
          top: '10px',
          right: '-50px',
          width: 120, 
          height: 60,
        }}
        onMouseEnter={handleColorPickerHover}
        onMouseLeave={handleColorPickerLeave}
      >
        {showColorPicker && open && (
          <CirclePicker
            color={buttonColor}
            onChange={handleColorChange}
            circleSize={11} // Set the desired size of the color picker circle
            circleSpacing={6}
            colors={['#015c92', '#2d82b5', '#2093c3', '#88cdf6', '#bce6ff', '#35455d',    '#9dc183', '#32612d', '#74b72e', '#3cb043', '#9dc183', '#708238',                '#d6b595', '#d8a573', '#7b5836', '#836853', '#997950', '#412a00' ,      '#ffb8bf', '#fb928e', '#ffd8cc', '#fbc4bf', '#fb9aac', '#fedbe9',        '#880085', '#865fcf', '#b660cd', '#b5338a', '#b53757', '#8f00ff',]}  
          />
        )}
      </IconButton>
    </Box>
  );
}

export default Widget;
