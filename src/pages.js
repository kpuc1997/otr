import BrainPowder from './BrainPowder';
import Staff from './staff';
import Recordings from './recordings';

const pages = [
    {name:"Brain Powder", url:'/BrainPowder', component: BrainPowder},
    {name:"Staff", url:"/Staff", component: Staff},
    {name:"Recordings", url:"/Recordings", component: Recordings},
];

export default pages;