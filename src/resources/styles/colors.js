'use strict'

import Config from '../../Config'

console.log(Config.style)
if(Config.style == 'modern'){
    const colors = {
      txt_main: '#0765d7',
      txt_description: '#777777',
      txt_dark: '#3c3c3c',
      txt1: 'white',

      bg_main: '#0765d7',
      bg_header: '#f8f7f3',
      bg1: 'white',

      bd_main: '#0765d7',
      bd1: 'white',
      bd_line: '#dddddd',
      bd_input: '#cbcbcb',

      white:        '#FDFDFD',
      tuna:         '#4B4E55',
      malibu:       '#4FB2E2',
      light_gray:   '#D1CECE',
      dark_gray:    '#A5A3A3',
      ebb:          '#E3DAD8',
    }
}else{

}
const colors = {
  txt_main: '#0765d7',
  txt_description: '#777777',
  txt_description_light: '#fff',
  txt_dark: '#3c3c3c',
  txt1: 'white',

  bg_main: '#0765d7',
  bg_header: '#f8f7f3',
  bg1: 'white',

  bd_main: '#0765d7',
  bd1: 'white',
  bd_line: '#dddddd',
  bd_input: '#cbcbcb',

  white:        '#FDFDFD',
  tuna:         '#4B4E55',
  malibu:       '#4FB2E2',
  light_gray:   '#D1CECE',
  dark_gray:    '#A5A3A3',
  ebb:          '#E3DAD8',
}

export default colors
