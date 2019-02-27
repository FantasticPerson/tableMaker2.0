/**
 * Created by wdd on 2016/11/23.
 */

export let fontFamilyList = window.fontFamilyArray

export const formDefaultStyle = [{
    borderColor: '#FF0000',
    borderSize: 1,
    color: '#FF0000',
    fontSize: 20,
    fontFamily: 'SimSun',
    isDefault: true,
    name: '宋体',
    id: 1,
    fontStyleArray: [false, false],
    textAlign: 'center',
    verticalAlign: 'middle'
}];

export const textAlignPosition = [
    { value: 'center', text: '居中' },
    { value: 'right', text: '居右' },
    { value: 'left', text: '居左' }
];

export const verticalAlignPosition = [
    { value: 'top', text: '居上' },
    { value: 'middle', text: '居中' },
    { value: 'bottom', text: '居下' }
];

export const innerStyle = [
    { value: 'true', text: 'true' },
    { value: 'false', text: 'false' }
]

export const fontWeightValues = [
    { value: 'normal', text: 'normal' },
    { value: 'bolder', text: 'bolder' }
];

export const showBorderArray = [
    '上', '下', '左', '右'
];

export const fontStyleArray = [
    '加粗', '斜体'
];

export const EVENT_INSERT_TABLE = "event_insert_table"

export const editElement = 'element';
export const editDisplay = 'display';
export const editPreview = 'preview';
export const editSource = 'source';

export const toolEdit = 'edit';
export const toolTool = 'tool';
export const toolStyle = 'style';

export const styleViewAdd = 'viewAdd';
export const styleViewModify = 'viewModify';

export const componentText = 'text';
export const componentInput = 'input';
export const componentTextArea = 'textArea';
export const componentDropBox = 'dropBox';
export const componentCheckBox = 'checkBox';
export const componentRadioBox = 'radioBox';
export const componentTd = 'td';

export const editorNumberPicker = 'numberPicker';
export const editorNumberSetter = 'numberSetter';
export const editorColorPicker = 'colorPicker';
export const editorDropBoxPicker = 'dropBoxPicker';
export const editorCheckBoxPicker = 'checkBoxPicker';
export const editorTextPicker = 'textPicker';
export const editorOptionPicker = 'optionSetter';
export const editorTextAreaPicker = 'textAreaPicker';