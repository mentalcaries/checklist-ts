import { Checklist } from './components/Checklist'
import { ListItem } from './components/ListItem'
import './style.css'


// Checklist section
// on form submit, add List item to section

// List Item
// Check button to mark completed
// Delete button to remove element

const checkList = new Checklist(()=>{
  console.log('render')
}, ".items-list")


const test = new ListItem('This is a test')
checkList.addItem(test.createItem())