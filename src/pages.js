import BrainPowder from './BrainPowder';
import Staff from './staff';

const pages = [
    {name:"Brain Powder", url:'/BrainPowder', component: BrainPowder},
    {name:"Staff", url:"/Staff", component: Staff},
    {name:"Recordings", url:"/Recordings", component: null},
];

export default pages;